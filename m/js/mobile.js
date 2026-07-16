/* ── mobile.js — DCB Technologies m.dcb-technologies.fr ─────────── */
/* Version: 1.2 | 2026-05-12 */

(function () {
  'use strict';

  /* ── Focus trap utility ───────────────────────── */
  var _focusSel = 'a[href],button:not([disabled]),input:not([disabled]),select,textarea,[tabindex]:not([tabindex="-1"])';

  function trapFocus(container) {
    /* Re-query on every Tab keydown so disabled buttons don't break the trap */
    container._trap = function (e) {
      if (e.key !== 'Tab') return;
      var els = Array.from(container.querySelectorAll(_focusSel));
      if (!els.length) return;
      var idx = els.indexOf(document.activeElement);
      if (e.shiftKey) {
        if (idx <= 0) { e.preventDefault(); els[els.length - 1].focus(); }
      } else {
        if (idx >= els.length - 1) { e.preventDefault(); els[0].focus(); }
      }
    };
    container.addEventListener('keydown', container._trap);
  }

  function releaseTrap(container) {
    if (container && container._trap) {
      container.removeEventListener('keydown', container._trap);
      container._trap = null;
    }
  }

  /* ── Progress bar ─────────────────────────────── */
  var pg = document.getElementById('m-pg');
  var _pgRaf = null;
  function updProgress() {
    if (!pg) return;
    var h = document.documentElement.scrollHeight - window.innerHeight;
    pg.style.width = (window.scrollY / Math.max(h, 1) * 100) + '%';
  }
  window.addEventListener('scroll', function () {
    if (!pg || _pgRaf) return;
    _pgRaf = requestAnimationFrame(function () { updProgress(); _pgRaf = null; });
  }, { passive: true });
  if (pg) updProgress();

  /* ── Menu burger ──────────────────────────────── */
  var menu = document.getElementById('menu');
  var fab = document.querySelector('.fab');
  var _menuOpener = null;

  function openMenu() {
    if (!menu) return;
    _menuOpener = document.activeElement;
    menu.classList.add('on');
    menu.setAttribute('aria-hidden', 'false');
    if (btnOpen) btnOpen.setAttribute('aria-expanded', 'true');
    if (fab) fab.classList.add('hidden');
    /* iOS Safari : overflow:hidden sur html+body bloque le scroll de fond */
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    trapFocus(menu);
    var menuTitle = document.getElementById('menu-title');
    if (menuTitle) { setTimeout(function () { menuTitle.focus(); }, 60); }
    history.pushState({ dcb: 'menu' }, '');
  }

  function closeMenu() {
    if (!menu) return;
    releaseTrap(menu);
    menu.classList.remove('on');
    menu.setAttribute('aria-hidden', 'true');
    if (btnOpen) btnOpen.setAttribute('aria-expanded', 'false');
    if (!sheet || !sheet.classList.contains('on')) {
      if (fab) fab.classList.remove('hidden');
    }
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    if (_menuOpener) { _menuOpener.focus(); _menuOpener = null; }
  }

  var btnOpen = document.getElementById('btnMenu');
  var btnClose = document.getElementById('btnClose');
  if (btnOpen) btnOpen.addEventListener('click', openMenu);
  if (btnClose) btnClose.addEventListener('click', closeMenu);

  /* Close menu when a link inside is clicked */
  if (menu) {
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
  }

  /* ── Bottom-sheet devis ───────────────────────── */
  var sheetbg = document.getElementById('sheetbg');
  var sheet = document.getElementById('sheet');
  var _sheetOpener = null;

  function openSheet() {
    if (!sheetbg || !sheet) return;
    /* Ferme le menu si ouvert — évite 2 role="dialog" simultanés */
    if (menu && menu.classList.contains('on')) { closeMenu(); }
    _sheetOpener = document.activeElement;
    /* NOTE : le reset metier est fait dans closeSheet (etat propre a chaque close),
       ce qui evite que dcbResetSheetMetier() ecrase le preselect pose par le handler
       [data-sheet][data-plan] de scripts.js (qui fire AVANT openSheet) */
    /* Réinitialise le bouton submit si l'utilisateur rouvre la sheet après un envoi */
    var _submitBtn = sheet.querySelector('[type="submit"]');
    if (_submitBtn) {
      _submitBtn.disabled = false;
      _submitBtn.removeAttribute('aria-busy');
      _submitBtn.innerHTML = 'Envoyer ma demande<span class="material-symbols-outlined" aria-hidden="true">arrow_forward</span>';
    }
    sheetbg.classList.add('on');
    requestAnimationFrame(function () {
      sheet.classList.add('on');
      sheet.setAttribute('aria-hidden', 'false');
      trapFocus(sheet);
      /* Focus the title for screen-reader announcement instead of first interactive element */
      var title = document.getElementById('sheet-title');
      if (title) { setTimeout(function () { title.focus(); }, 80); }
    });
    /* iOS : neutralise le transform persistant une fois l'ouverture terminee.
       position:fixed + transform fait sauter le sheet en haut au focus d'un champ
       (clavier). translateY(0) == none visuellement, mais sans le bug d'ancrage. */
    setTimeout(function () {
      if (sheet.classList.contains('on')) sheet.style.transform = 'none';
    }, 340);
    if (fab) fab.classList.add('hidden');
    /* iOS Safari : overflow:hidden ne bloque PAS le scroll au focus d'un champ
       (le sheet saute en haut de l'ecran). Lock robuste = body en position:fixed
       avec l'offset de scroll memorise, restaure a la fermeture. */
    sheet._lockY = window.scrollY || window.pageYOffset || 0;
    document.body.style.top = (-sheet._lockY) + 'px';
    document.body.style.position = 'fixed';
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    /* Clavier virtuel iOS : ajuster le padding-bottom quand le clavier remonte */
    if (window.visualViewport) {
      sheet._vpResize = function () {
        var kh = window.innerHeight - window.visualViewport.height;
        /* Seuil 50px : ignore les fluctuations toolbar Android, réagit uniquement au vrai clavier */
        if (kh < 50) { sheet.style.paddingBottom = ''; return; }
        sheet.style.paddingBottom = 'calc(' + kh + 'px + env(safe-area-inset-bottom,0px))';
      };
      window.visualViewport.addEventListener('resize', sheet._vpResize);
    }
    history.pushState({ dcb: 'sheet' }, '');
  }

  function closeSheet() {
    if (!sheet || !sheetbg) return;
    /* Reset du metier au metier de la page : etat propre pour la prochaine ouverture.
       Si l'utilisateur rouvre via un CTA pricing avec data-plan, le handler scripts.js
       fire AVANT openSheet et applique setSheetMetier(metier, plan) avec preselect. */
    if (typeof window.dcbResetSheetMetier === 'function') { window.dcbResetSheetMetier(); }
    releaseTrap(sheet);
    if (window.visualViewport && sheet._vpResize) {
      window.visualViewport.removeEventListener('resize', sheet._vpResize);
      sheet._vpResize = null;
    }
    /* Retire le transform:none inline pose a l'ouverture, pour reactiver l'animation de sortie */
    sheet.style.transform = '';
    void sheet.offsetHeight;
    sheet.classList.remove('on');
    sheet.setAttribute('aria-hidden', 'true');
    setTimeout(function () {
      sheetbg.classList.remove('on');
      sheet.style.paddingBottom = ''; /* reset après la fin de l'animation (320ms) */
    }, 320);
    /* Only show FAB if menu is also closed */
    if (!menu || !menu.classList.contains('on')) {
      if (fab) fab.classList.remove('hidden');
    }
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    window.scrollTo(0, sheet._lockY || 0);
    if (_sheetOpener) { _sheetOpener.focus({ preventScroll: true }); _sheetOpener = null; }
  }

  /* Wire all "Demander un devis" CTAs */
  document.querySelectorAll('[data-sheet]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      openSheet();
    });
  });

  /* FAB devis button */
  var fabDevis = document.getElementById('fabDevis');
  if (fabDevis) fabDevis.addEventListener('click', openSheet);

  /* Close sheet on scrim click */
  if (sheetbg) {
    sheetbg.addEventListener('click', function (e) {
      if (e.target === sheetbg) closeSheet();
    });
  }

  /* Close sheet button */
  var btnCloseSheet = document.getElementById('btnCloseSheet');
  if (btnCloseSheet) btnCloseSheet.addEventListener('click', closeSheet);

  /* Grab handle tap — also dismisses sheet */
  var grabHandle = document.querySelector('.sheet .grab');
  if (grabHandle) grabHandle.addEventListener('click', closeSheet);

  /* ── Swipe-down to dismiss sheet (iOS/Android native pattern) ── */
  if (sheet) {
    var _swipeStartY = 0;
    var _swipeStartX = 0;
    sheet.addEventListener('touchstart', function (e) {
      _swipeStartY = e.touches[0].clientY;
      _swipeStartX = e.touches[0].clientX;
    }, { passive: true });
    sheet.addEventListener('touchend', function (e) {
      var dy = e.changedTouches[0].clientY - _swipeStartY;
      var dx = Math.abs(e.changedTouches[0].clientX - _swipeStartX);
      /* Swipe majoritairement vertical (dy > dx*1.5) pour éviter les fermetures accidentelles */
      if (dy > 80 && dy > dx * 1.5) { closeSheet(); }
    }, { passive: true });
  }

  /* ── Escape key — ferme sheet puis menu ──────── */
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (sheet && sheet.classList.contains('on')) { closeSheet(); return; }
    if (menu && menu.classList.contains('on')) { closeMenu(); }
  });

  /* ── Android Back button (popstate) ─────────── */
  window.addEventListener('popstate', function (e) {
    if (sheet && sheet.classList.contains('on')) { closeSheet(); return; }
    if (menu && menu.classList.contains('on')) { closeMenu(); }
  });

  /* ── Métier cards carousel + tabs ─────────────── */
  var tabs = document.querySelectorAll('#tabs .tab');
  var carou = document.getElementById('carou');

  if (carou && tabs.length) {
    var cards = carou.querySelectorAll('.mcard');
    var dots = document.querySelectorAll('#dots span');

    /* Init roving tabindex + aria-selected on tabs */
    tabs.forEach(function (t, i) {
      var active = t.classList.contains('active');
      t.setAttribute('tabindex', active ? '0' : '-1');
      t.setAttribute('aria-selected', active ? 'true' : 'false');
    });

    var _prefersReduced = window.matchMedia('(prefers-reduced-motion:reduce)').matches;

    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () {
        /* Mise à jour immédiate de l'état actif (pas d'attente du scroll event) */
        tabs.forEach(function (x) { x.classList.remove('active'); x.setAttribute('tabindex', '-1'); x.setAttribute('aria-selected', 'false'); });
        t.classList.add('active');
        t.setAttribute('tabindex', '0');
        t.setAttribute('aria-selected', 'true');
        if (cards[i]) {
          cards[i].scrollIntoView({ behavior: _prefersReduced ? 'auto' : 'smooth', inline: 'center', block: 'nearest' });
        }
      });
    });

    /* Arrow key navigation on tablist */
    var tabsContainer = document.getElementById('tabs');
    if (tabsContainer) {
      tabsContainer.addEventListener('keydown', function (e) {
        var tabArr = Array.from(tabs);
        var idx = tabArr.indexOf(document.activeElement);
        if (idx < 0) return;
        var next = -1;
        if (e.key === 'ArrowRight') { next = (idx + 1) % tabArr.length; }
        if (e.key === 'ArrowLeft') { next = (idx - 1 + tabArr.length) % tabArr.length; }
        if (next >= 0) {
          e.preventDefault();
          /* Optimistic update — évite le flickering sur key-repeat rapide */
          tabArr.forEach(function (x) { x.classList.remove('active'); x.setAttribute('tabindex', '-1'); x.setAttribute('aria-selected', 'false'); });
          tabArr[next].classList.add('active');
          tabArr[next].setAttribute('tabindex', '0');
          tabArr[next].setAttribute('aria-selected', 'true');
          tabArr[next].focus();
          tabArr[next].click();
        }
      });
    }

    var _carouRaf = null;
    carou.addEventListener('scroll', function () {
      if (_carouRaf) return;
      _carouRaf = requestAnimationFrame(function () {
        var bestI = 0, bestD = Infinity;
        var cx = carou.scrollLeft + carou.clientWidth / 2;
        cards.forEach(function (c, i) {
          var ccx = c.offsetLeft + c.clientWidth / 2;
          var d = Math.abs(ccx - cx);
          if (d < bestD) { bestD = d; bestI = i; }
        });
        tabs.forEach(function (t, i) {
          var active = i === bestI;
          t.classList.toggle('active', active);
          t.setAttribute('tabindex', active ? '0' : '-1');
          t.setAttribute('aria-selected', active ? 'true' : 'false');
          /* Ramène l'onglet actif dans le viewport horizontal de la barre de tabs */
          if (active) { t.scrollIntoView({ behavior: 'auto', inline: 'nearest', block: 'nearest' }); }
        });
        dots.forEach(function (d, i) {
          d.classList.toggle('on', i === bestI);
        });
        _carouRaf = null;
      });
    }, { passive: true });
  }

  /* ── Devis form — segment selector (métier) + roving tabindex ── */
  document.querySelectorAll('.seg').forEach(function (seg) {
    var btns = Array.from(seg.querySelectorAll('button'));
    /* Init tabindex */
    btns.forEach(function (b, i) { b.setAttribute('tabindex', b.classList.contains('on') ? '0' : '-1'); });

    btns.forEach(function (b) {
      b.addEventListener('click', function () {
        btns.forEach(function (x) { x.classList.remove('on'); x.setAttribute('aria-checked', 'false'); x.setAttribute('tabindex', '-1'); });
        b.classList.add('on');
        b.setAttribute('aria-checked', 'true');
        b.setAttribute('tabindex', '0');
      });
    });

    seg.addEventListener('keydown', function (e) {
      var idx = btns.indexOf(document.activeElement);
      if (idx < 0) return;
      var next = -1;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { next = (idx + 1) % btns.length; }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { next = (idx - 1 + btns.length) % btns.length; }
      if (next >= 0) { e.preventDefault(); btns[next].focus(); btns[next].click(); }
    });
  });

  /* ── FAQ details — icon rotation handled by CSS only ─────────── */
  /* .faq details[open] summary .ch { transform:rotate(180deg) } — déjà dans mobile.css */

  /* ── FAB : masqué quand le Hero est visible ──── */
  var hero = document.querySelector('.hero');
  if (hero && fab) {
    var heroObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          fab.classList.add('hidden');
        } else {
          /* Ne montrer le FAB que si menu et sheet sont fermés */
          if (!menu || !menu.classList.contains('on')) {
            if (!sheet || !sheet.classList.contains('on')) {
              fab.classList.remove('hidden');
            }
          }
        }
      });
    }, { threshold: 0.1 });
    heroObserver.observe(hero);
  }

  /* ── Devis form — prevent double-submit, basic validation ── */
  var devisForm = document.querySelector('.sheet form');
  if (devisForm) {
    devisForm.addEventListener('submit', function (e) {
      var submitBtn = devisForm.querySelector('[type="submit"]');
      if (submitBtn && submitBtn.disabled) { e.preventDefault(); return; }
      /* Basic required check — all [required] fields */
      var invalid = Array.from(devisForm.querySelectorAll('[required]')).find(function (f) { return !f.value.trim(); });
      if (invalid) {
        e.preventDefault();
        invalid.setAttribute('aria-invalid', 'true');
        invalid.focus();
        return;
      }
      /* Validation téléphone basique — au moins 9 chiffres */
      var telField = devisForm.querySelector('[name="telephone"]');
      if (telField && telField.value.replace(/\D/g, '').length < 9) {
        e.preventDefault();
        telField.setAttribute('aria-invalid', 'true');
        telField.focus();
        return;
      }
      /* Clear previous errors */
      devisForm.querySelectorAll('[aria-invalid]').forEach(function (f) { f.removeAttribute('aria-invalid'); });
      /* Valide : on laisse partir le POST natif vers send.php (redirige vers /merci) */
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.setAttribute('aria-busy', 'true');
        submitBtn.innerHTML = 'Envoi en cours…';
      }
      /* pas de preventDefault ici : la soumission native part vers send.php */
    });

    /* Clear aria-invalid on input */
    devisForm.querySelectorAll('input,select').forEach(function (f) {
      f.addEventListener('input', function () { f.removeAttribute('aria-invalid'); });
      f.addEventListener('change', function () { f.removeAttribute('aria-invalid'); });
    });
  }

})();
