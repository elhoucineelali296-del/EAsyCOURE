
(function () {
  var LANG_KEY = "easycour_lang", LEVEL_KEY = "easycour_level";
  var EC = window.EC = { lang: "fr", dict: {} };

  var COMMON = {
    fr: { btn: "العربية", soon: "Bientôt disponible", back: "Retour", footer: "Cours, vidéos et exercices pour tous les niveaux." },
    ar: { btn: "Français", soon: "قريباً", back: "رجوع", footer: "دروس وفيديوهات وتمارين لجميع المستويات." }
  };

  EC.t = function (k) {
    var d = EC.dict[EC.lang] || {};
    return d[k] || COMMON[EC.lang][k] || k;
  };
  EC.tr = function (x) {
    return x && typeof x === "object" ? (x[EC.lang] || x.fr || "") : (x || "");
  };
  EC.esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  EC.level = function () {
    try { return JSON.parse(localStorage.getItem(LEVEL_KEY) || "null"); } catch (e) { return null; }
  };
  EC.cycle = function (id) {
    return EASYCOUR.cycles.filter(function (c) { return c.id === id; })[0] || null;
  };
  EC.levelLabel = function () {
    var lv = EC.level(), c = lv && EC.cycle(lv.cycle);
    if (!c) return "";
    var y = c.years.filter(function (y) { return y.id === lv.year; })[0];
    return EC.tr(c) + (y ? " · " + EC.tr(y) : "");
  };
  EC.res = function (sid) {
    var lv = EC.level();
    var r = EASYCOUR.resources[lv.cycle + "|" + (lv.year || "all") + "|" + sid] || {};
    return { cours: r.cours || [], videos: r.videos || [], exercices: r.exercices || [], examens: r.examens || [] };
  };
  EC.count = function (r) {
    return r.cours.length + r.videos.length + r.exercices.length + r.examens.length;
  };

  EC.apply = function () {
    document.documentElement.lang = EC.lang;
    document.documentElement.dir = EC.lang === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = EC.t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      el.placeholder = EC.t(el.getAttribute("data-i18n-ph"));
    });
    var b = document.getElementById("lang-btn");
    if (b) b.textContent = EC.t("btn");
  };

  EC.init = function (dict, render) {
    EC.dict = dict;
    try { if (localStorage.getItem(LANG_KEY) === "ar") EC.lang = "ar"; } catch (e) {}
    var b = document.getElementById("lang-btn");
    if (b) b.addEventListener("click", function () {
      EC.lang = EC.lang === "fr" ? "ar" : "fr";
      try { localStorage.setItem(LANG_KEY, EC.lang); } catch (e) {}
      EC.apply(); render();
    });
    EC.apply(); render();
  };
})();
