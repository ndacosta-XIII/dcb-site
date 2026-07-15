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
$dir     = rtrim(str_replace('\\', '/', dirname($_SERVER['REQUEST_URI'])), '/');
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

// Email invalide : ignoré plutôt que bloquant
if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $email = '';
}

// Il faut au moins un nom + un moyen de recontact (la validation front est déjà passée)
if ($fullname === '' || ($email === '' && $phoneAny === '')) {
    redirect_merci($merci);
}

$to      = 'contact@dcb-technologies.fr';
$subject = 'Nouvelle demande via le site : ' . ($fullname !== '' ? $fullname : 'contact');

$lines   = array();
$lines[] = 'Nouvelle demande depuis le site DCB Technologies.';
$lines[] = '';
if ($fullname !== '') $lines[] = 'Nom        : ' . $fullname;
if ($email !== '')    $lines[] = 'Email      : ' . $email;
if ($phoneAny !== '') $lines[] = 'Telephone  : ' . $phoneAny;
if ($ville !== '')    $lines[] = 'Ville      : ' . $ville;
if ($formule !== '')  $lines[] = 'Formule    : ' . $formule;
if ($message !== '') {
    $lines[] = '';
    $lines[] = 'Message :';
    $lines[] = $message;
}
$lines[] = '';
$lines[] = '---';
if ($source !== '') $lines[] = 'Origine    : ' . $source;
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
