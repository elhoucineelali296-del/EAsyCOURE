/* =====================================================================
   EAsyCOUR — CONTENU DU SITE  (le seul fichier à modifier pour ajouter
   des cours, vidéos, exercices et examens)
   ---------------------------------------------------------------------
   Clé d'une matière :  "cycle|année|matière"
     cycle  : primaire | college | lycee | superieur
     année  : 1..6 | tc | 1bac | 2bac | all (pour le supérieur)
     matière: l'id de la matière (voir SUBJECTS plus bas)

   Dossiers conseillés pour les fichiers :
     files/<cycle>/<année>/<matière>/nom-du-fichier.pdf

   Types d'éléments :
     Cours / Exercices : { t:"Titre" ou {fr:"..",ar:".."}, url:"files/..pdf", desc:"..." }
     Examens           : { t:"...", year:2024, url:"...", corr:"lien correction (optionnel)" }
     Vidéos YouTube    : { t:"...", youtube:"ID_DE_LA_VIDEO", desc:"Durée / auteur" }
     Vidéo MP4 locale  : { t:"...", src:"videos/fichier.mp4", poster:"image.jpg" }
   ===================================================================== */

window.EASYCOUR = {

  cycles: [
    { id: "primaire",  fr: "Primaire",   ar: "الابتدائي",
      years: [
        { id: "1", fr: "1ère année", ar: "السنة الأولى" },
        { id: "2", fr: "2ème année", ar: "السنة الثانية" },
        { id: "3", fr: "3ème année", ar: "السنة الثالثة" },
        { id: "4", fr: "4ème année", ar: "السنة الرابعة" },
        { id: "5", fr: "5ème année", ar: "السنة الخامسة" },
        { id: "6", fr: "6ème année", ar: "السنة السادسة" } ] },
    { id: "college",   fr: "Collège",    ar: "الإعدادي",
      years: [
        { id: "1", fr: "1ère année", ar: "السنة الأولى" },
        { id: "2", fr: "2ème année", ar: "السنة الثانية" },
        { id: "3", fr: "3ème année", ar: "السنة الثالثة" } ] },
    { id: "lycee",     fr: "Lycée",      ar: "الثانوي",
      years: [
        { id: "tc",   fr: "Tronc commun", ar: "الجذع المشترك" },
        { id: "1bac", fr: "1ère Bac",     ar: "الأولى باكالوريا" },
        { id: "2bac", fr: "2ème Bac",     ar: "الثانية باكالوريا" } ] },
    { id: "superieur", fr: "Supérieur",  ar: "التعليم العالي", years: [] }
  ],

  /* Matières par cycle — ab = sigle affiché, h = teinte de couleur (0-360) */
  subjects: {
    primaire: [
      { id: "arabe",   fr: "Arabe",              ar: "اللغة العربية",   ab: "Ar", h: 150 },
      { id: "francais",fr: "Français",           ar: "اللغة الفرنسية",  ab: "Fr", h: 215 },
      { id: "maths",   fr: "Mathématiques",      ar: "الرياضيات",       ab: "Ma", h: 35 },
      { id: "eveil",   fr: "Éveil scientifique", ar: "النشاط العلمي",   ab: "Sc", h: 170 },
      { id: "islam",   fr: "Éducation islamique",ar: "التربية الإسلامية", ab: "Is", h: 95 }
    ],
    college: [
      { id: "maths",   fr: "Mathématiques",   ar: "الرياضيات",        ab: "Ma", h: 35 },
      { id: "pc",      fr: "Physique-Chimie", ar: "الفيزياء والكيمياء", ab: "PC", h: 200 },
      { id: "svt",     fr: "SVT",             ar: "علوم الحياة والأرض", ab: "SV", h: 140 },
      { id: "francais",fr: "Français",        ar: "اللغة الفرنسية",   ab: "Fr", h: 215 },
      { id: "arabe",   fr: "Arabe",           ar: "اللغة العربية",    ab: "Ar", h: 150 },
      { id: "anglais", fr: "Anglais",         ar: "اللغة الإنجليزية", ab: "En", h: 340 },
      { id: "hg",      fr: "Histoire-Géo",    ar: "الاجتماعيات",      ab: "HG", h: 20 },
      { id: "info",    fr: "Informatique",    ar: "المعلوميات",       ab: "In", h: 260 }
    ],
    lycee: [
      { id: "maths",   fr: "Mathématiques",   ar: "الرياضيات",        ab: "Ma", h: 35 },
      { id: "pc",      fr: "Physique-Chimie", ar: "الفيزياء والكيمياء", ab: "PC", h: 200 },
      { id: "svt",     fr: "SVT",             ar: "علوم الحياة والأرض", ab: "SV", h: 140 },
      { id: "philo",   fr: "Philosophie",     ar: "الفلسفة",          ab: "Ph", h: 280 },
      { id: "francais",fr: "Français",        ar: "اللغة الفرنسية",   ab: "Fr", h: 215 },
      { id: "arabe",   fr: "Arabe",           ar: "اللغة العربية",    ab: "Ar", h: 150 },
      { id: "anglais", fr: "Anglais",         ar: "اللغة الإنجليزية", ab: "En", h: 340 },
      { id: "hg",      fr: "Histoire-Géo",    ar: "الاجتماعيات",      ab: "HG", h: 20 },
      { id: "info",    fr: "Informatique",    ar: "المعلوميات",       ab: "In", h: 260 }
    ],
    superieur: [
      { id: "maths",   fr: "Mathématiques",   ar: "الرياضيات",        ab: "Ma", h: 35 },
      { id: "physique",fr: "Physique",        ar: "الفيزياء",         ab: "Ph", h: 200 },
      { id: "info",    fr: "Informatique",    ar: "المعلوميات",       ab: "In", h: 260 },
      { id: "eco",     fr: "Économie-Gestion",ar: "الاقتصاد والتسيير", ab: "Éc", h: 45 },
      { id: "droit",   fr: "Droit",           ar: "القانون",          ab: "Dr", h: 0 },
      { id: "langues", fr: "Langues",         ar: "اللغات",           ab: "La", h: 320 }
    ]
  },

  /* Ressources — exemple à remplacer par vos vrais fichiers */
  resources: {
    "lycee|2bac|maths": {
      cours: [
        { t: { fr: "Limites et continuité", ar: "النهايات والاتصال" },
          url: "files/lycee/2bac/maths/limites-continuite.pdf",
          desc: { fr: "Résumé de cours avec exemples", ar: "ملخص الدرس مع أمثلة" } }
      ],
      videos: [],
      exercices: [
        { t: { fr: "Série 1 : limites", ar: "سلسلة 1: النهايات" },
          url: "files/lycee/2bac/maths/serie-1.pdf" }
      ],
      examens: [
        { t: { fr: "Examen national — session normale", ar: "الامتحان الوطني — الدورة العادية" },
          year: 2024, url: "files/lycee/2bac/maths/examen-2024.pdf",
          corr: "files/lycee/2bac/maths/examen-2024-correction.pdf" }
      ]
    }
  }
};
