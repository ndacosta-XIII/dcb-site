<?php
/**
 * send.php : Traitement des formulaires DCB Technologies
 * Formulaires Contact (name/email/phone/message) + Bottom-sheet devis
 * (formule/prenom/nom/telephone/ville).
 *
 * Flux : POST -> honeypot -> validation -> email vers contact@ -> redirection /merci
 * Fonctionne indifféremment sous /new/ (staging) ou à la racine (prod).
 * Aucun secret ici : envoi via le mail local du serveur (Plesk).
 */

// Base de redirection : dossier du script + /merci/
$dir = rtrim(str_replace('\\', '/', dirname($_SERVER['REQUEST_URI'] ?? '/')), '/');
/* Securite : REQUEST_URI est fourni par le client. On n'accepte qu'un chemin
   local simple, sinon la redirection pourrait etre detournee vers un domaine
   externe (redirection ouverte -> phishing). Sinon, repli sur la racine. */
if ($dir === '' || $dir[0] !== '/' || strpos($dir, '//') === 0
    || strpos($dir, "\n") !== false || strpos($dir, "\r") !== false) {
    $dir = '';
}
$merci   = $dir . '/merci/';

function redirect_merci($path) {
    header('Location: ' . $path, true, 303);
    exit;
}

// Accès direct (GET) : on renvoie vers l'accueil du dossier
if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST') {
    header('Location: ' . ($dir === '' ? '/' : $dir . '/'), true, 302);
    exit;
}

/* ── Anti-flood : limite les envois par IP sur une fenetre glissante.
   Le honeypot arrete les bots betes ; ceci arrete celui qui poste en boucle
   et inonderait la boite mail. Stockage fichier, aucune dependance. ── */
$RL_MAX    = 5;    // envois autorises...
$RL_WINDOW = 600;  // ...par tranche de 10 minutes
$ip = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
// Derriere Cloudflare, l'IP reelle du visiteur est dans CF-Connecting-IP
if (!empty($_SERVER['HTTP_CF_CONNECTING_IP'])) { $ip = $_SERVER['HTTP_CF_CONNECTING_IP']; }
$rlFile = sys_get_temp_dir() . '/dcb_rl_' . hash('sha256', $ip) . '.txt';
$now  = time();
$hits = array();
if (is_readable($rlFile)) {
    $raw = @file_get_contents($rlFile);
    if ($raw !== false && $raw !== '') {
        foreach (explode(',', $raw) as $ts) {
            $ts = (int) $ts;
            if ($ts > $now - $RL_WINDOW) { $hits[] = $ts; }
        }
    }
}
if (count($hits) >= $RL_MAX) {
    http_response_code(429);
    header('Retry-After: ' . $RL_WINDOW);
    exit('Trop de demandes envoyees depuis cette connexion. Merci de reessayer dans quelques minutes, ou de nous appeler au 04 82 53 05 10.');
}
$hits[] = $now;
@file_put_contents($rlFile, implode(',', $hits), LOCK_EX);

// Honeypot : champ caché jamais rempli par un humain -> bot silencieux
if (!empty($_POST['hp_website'])) {
    redirect_merci($merci);
}

function field($k) {
    return isset($_POST[$k]) ? trim(strip_tags((string) $_POST[$k])) : '';
}
// Nettoyage pour les valeurs injectées dans les en-têtes (anti header-injection)
function hdr_safe($v) {
    return str_replace(array("\r", "\n", "%0a", "%0d"), ' ', $v);
}

$name     = field('name');
$prenom   = field('prenom');
$nom      = field('nom');
$fullname = $name !== '' ? $name : trim($prenom . ' ' . $nom);
$email    = field('email');
$phone    = field('phone');
$tel      = field('telephone');
$phoneAny = $phone !== '' ? $phone : $tel;
$message  = field('message');
$formule  = field('formule');
$ville    = field('ville');
$source   = field('source');
$metier   = field('metier');
$page     = field('page');

// Email invalide : ignoré plutôt que bloquant
if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $email = '';
}

// Il faut au moins un nom + un moyen de recontact (la validation front est déjà passée)
if ($fullname === '' || ($email === '' && $phoneAny === '')) {
    redirect_merci($merci);
}

$to      = 'contact@dcb-technologies.fr';
$context = $metier !== '' ? $metier : ($formule !== '' ? $formule : $source);
$subject = 'Demande site DCB' . ($fullname !== '' ? ' : ' . $fullname : '') . ($context !== '' ? ' (' . $context . ')' : '');

$lines   = array();
$lines[] = 'Nouvelle demande depuis le site DCB Technologies.';
$lines[] = '';
if ($fullname !== '') $lines[] = 'Nom        : ' . $fullname;
if ($email !== '')    $lines[] = 'Email      : ' . $email;
if ($phoneAny !== '') $lines[] = 'Telephone  : ' . $phoneAny;
if ($ville !== '')    $lines[] = 'Ville      : ' . $ville;
if ($metier !== '')   $lines[] = 'Metier     : ' . $metier;
if ($formule !== '')  $lines[] = 'Formule    : ' . $formule;
if ($message !== '') {
    $lines[] = '';
    $lines[] = 'Message :';
    $lines[] = $message;
}
$lines[] = '';
$lines[] = '---';
if ($source !== '') $lines[] = 'Origine    : ' . $source;
if ($page !== '')   $lines[] = 'Page       : ' . $page;
$lines[] = 'Recu le    : ' . date('d/m/Y H:i');
$body    = implode("\r\n", $lines);

$fromEmail = 'no-reply@dcb-technologies.fr';
$headers   = 'From: Site DCB Technologies <' . $fromEmail . ">\r\n";
if ($email !== '') {
    $headers .= 'Reply-To: ' . hdr_safe($fullname) . ' <' . $email . ">\r\n";
}
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "Content-Transfer-Encoding: 8bit\r\n";

$subjectEnc = '=?UTF-8?B?' . base64_encode($subject) . '?=';

@mail($to, $subjectEnc, $body, $headers, '-f' . $fromEmail);

redirect_merci($merci);
