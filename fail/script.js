const languages = {
  en: {
    name: "Bahaa Abu Khiarah",
    subtitle: "Creative Frontend Developer",
    about: "About",
    aboutTitle: "About Me",
    aboutText: "I am Bahaa Abu Khiarah, a passionate frontend developer with a love for clean design.",
    skills: "Skills",
    skillsTitle: "Skills",
    portfolio: "Portfolio",
    portfolioTitle: "Portfolio",
    portfolioText: "Coming soon with amazing projects!",
    contact: "Contact",
    contactTitle: "Contact Me",
    contactText: "Email: PPX198@GMAIL.COM",
    dir: "ltr",
  },
  ar: {
    name: "بهاء أبو خيارة",
    subtitle: "مطور واجهات أمامية مبدع",
    about: "من أنا",
    aboutTitle: "من أنا",
    aboutText: "أنا بهاء أبو خيارة، مطور واجهات أمامية شغوف بتصميم أنيق ونظيف.",
    skills: "المهارات",
    skillsTitle: "المهارات",
    portfolio: "أعمالي",
    portfolioTitle: "أعمالي",
    portfolioText: "قريبًا سيتم عرض مشاريع رائعة!",
    contact: "تواصل",
    contactTitle: "تواصل معي",
    contactText: "البريد الإلكتروني: PPX198@GMAIL.COM",
    dir: "rtl",
  },
};

let currentLang = "en";

function switchLanguage() {
  currentLang = currentLang === "en" ? "ar" : "en";
  applyLanguage();
}

function applyLanguage() {
  const lang = languages[currentLang];
  document.documentElement.lang = currentLang;
  document.documentElement.dir = lang.dir;
  document.getElementById("name").textContent = lang.name;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = lang[key];
  });
}

function initPage() {
  document.getElementById("year").textContent = new Date().getFullYear();
  applyLanguage();
}
