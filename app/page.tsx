"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { supportFaq, type SupportFaqEntry } from "../data/supportFaq";

type LangCode = "sr" | "en" | "de" | "it" | "fr" | "es" | "ru" | "hi" | "zh" | "ar";

type Translation = {
  navFeatures: string;
  navHow: string;
  navFaq: string;
  navDownload: string;
  brandName: string;
  tag: string;
  title: string;
  subtitle: string;
  download: string;
  viewFeatures: string;
  global: string;
  cities: string;
  ai: string;
  routes: string;
  audio: string;
  guide: string;
  welcome: string;
  suggestedRoute: string;
  historicWalk: string;
  arrived: string;
  place: string;
  story: string;
  featuresTitle: string;
  howTitle: string;
  step1: string;
  step1Text: string;
  step2: string;
  step2Text: string;
  step3: string;
  step3Text: string;
  googlePlay: string;
  appStore: string;
  appGallery: string;
  faqTitle: string;
  privacyLabel: string;
  termsLabel: string;
  contactLabel: string;
  languageLabel: string;
  menuOpen: string;
  menuClose: string;
  features: [string, string][];
};

const languages: { code: LangCode; label: string }[] = [
  { code: "sr", label: "SR" },
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
  { code: "it", label: "IT" },
  { code: "fr", label: "FR" },
  { code: "es", label: "ES" },
  { code: "ru", label: "RU" },
  { code: "hi", label: "HI" },
  { code: "zh", label: "ZH" },
  { code: "ar", label: "AR" },
];

const phoneScreenshots: Record<LangCode, string> = {
  sr: "/images/phones/vtg-rs.png",
  en: "/images/phones/vtg-en.png",
  zh: "/images/phones/vtg-zh.png",
  es: "/images/phones/vtg-es.png",
  de: "/images/phones/vtg-de.png",
  ru: "/images/phones/vtg-ru.png",
  it: "/images/phones/vtg-it.png",
  fr: "/images/phones/vtg-fr.png",
  hi: "/images/phones/vtg-hi.png",
  ar: "/images/phones/vtg-ar.png",
};

const storeUrls = {
  googlePlay: "GOOGLE_PLAY_URL",
  appStore: "APP_STORE_URL",
  appGallery: "APP_GALLERY_URL",
} as const;

const websiteFaqSlugs = [
  "what-is-vtg",
  "supported-cities",
  "location-usage",
  "create-tour",
  "tour-selection",
  "live-tour",
  "automatic-audio",
  "narration-language",
  "nearby",
  "offline-tour",
  "visited-places",
  "vtg-premium",
] as const;

const translations: Record<LangCode, Translation> = {
  sr: {
    navFeatures: "Funkcije",
    navHow: "Kako radi",
    navFaq: "Česta pitanja",
    navDownload: "Preuzimanje",
    brandName: "Virtuelni turistički vodič",
    googlePlay: "Google Play",
    appStore: "App Store",
    appGallery: "AppGallery",
    tag: "AI saputnik za putovanja",
    title: "Tvoj lični turistički vodič za svaki grad.",
    subtitle:
      "VTG planira obilazak, vodi korisnika kroz grad i priča priče o znamenitostima na izabranom jeziku.",
    download: "Preuzmi aplikaciju",
    viewFeatures: "Pogledaj funkcije",
    global: "Globalno",
    cities: "gradovi",
    ai: "AI",
    routes: "rute",
    audio: "Audio",
    guide: "vodič",
    welcome: "Dobro došli",
    suggestedRoute: "Predložena ruta",
    historicWalk: "Istorijska šetnja",
    arrived: "Stigli ste ✅",
    place: "Kalemegdan",
    story: "Slušaj priču o tvrđavi i istoriji grada.",
    featuresTitle: "Napravljeno za moderan turizam.",
    howTitle: "Kako VTG radi?",
    step1: "Izaberi grad",
    step1Text: "Korisnik bira destinaciju i jezik.",
    step2: "Kreiraj rutu",
    step2Text: "AI predlaže obilazak prema interesovanjima.",
    step3: "Slušaj vodiča",
    step3Text: "Aplikacija vodi i priča priče na lokaciji.",
    faqTitle: "Česta pitanja",
    privacyLabel: "Privatnost",
    termsLabel: "Uslovi korišćenja",
    contactLabel: "Kontakt",
    languageLabel: "Izaberi jezik",
    menuOpen: "Otvori meni",
    menuClose: "Zatvori meni",
    features: [
  [
    "AI turističke rute",
    "VTG pravi plan obilaska prema gradu, vremenu i interesovanjima korisnika.",
  ],
  [
    "Pametan vodič",
    "Korisnik dobija zanimljive priče o mestima koja obilazi.",
  ],
  [
    "Audio naracija",
    "Priče se mogu slušati preko zvučnika bez stalnog gledanja u ekran.",
  ],
  [
    "Offline ture",
    "Tura se može pripremiti unapred preko Wi-Fi veze.",
  ],
],
  },

  en: {
    navFeatures: "Features",
    navHow: "How it works",
    navFaq: "FAQ",
    navDownload: "Download",
    brandName: "Virtual Tourist Guide",
    googlePlay: "Google Play",
    appStore: "App Store",
    appGallery: "AppGallery",
    tag: "AI Travel Companion",
    title: "Your personal tourist guide for every city.",
    subtitle:
      "VTG plans your tour, guides you through the city and tells stories about landmarks in your chosen language.",
    download: "Download app",
    viewFeatures: "View features",
    global: "Global",
    cities: "cities",
    ai: "AI",
    routes: "routes",
    audio: "Audio",
    guide: "guide",
    welcome: "Welcome",
    suggestedRoute: "Suggested route",
    historicWalk: "Historic walk",
    arrived: "You have arrived ✅",
    place: "Kalemegdan",
    story: "Listen to the story about the fortress and city history.",
    featuresTitle: "Built for modern tourism.",
    howTitle: "How does VTG work?",
    step1: "Choose a city",
    step1Text: "The user selects a destination and language.",
    step2: "Create a route",
    step2Text: "AI suggests a tour based on interests.",
    step3: "Listen to the guide",
    step3Text: "The app guides and tells stories on location.",
    faqTitle: "Frequently asked questions",
    privacyLabel: "Privacy",
    termsLabel: "Terms of use",
    contactLabel: "Contact",
    languageLabel: "Choose language",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    features: [
  [
    "AI tourist routes",
    "VTG creates a tour plan based on the city, time and user interests.",
  ],
  [
    "Smart guide",
    "Users get interesting stories about the places they visit.",
  ],
  [
    "Audio narration",
    "Stories can be listened to through the speaker without constantly looking at the screen.",
  ],
  [
    "Offline tours",
    "Tours can be prepared in advance over Wi-Fi.",
  ],
],
  },

  de: {
    navFeatures: "Funktionen",
    navHow: "So funktioniert es",
    navFaq: "FAQ",
    navDownload: "Download",
    brandName: "Virtueller Touristenführer",
    googlePlay: "Google Play",
    appStore: "App Store",
    appGallery: "AppGallery",
    tag: "KI-Reisebegleiter",
    title: "Dein persönlicher Reiseführer für jede Stadt.",
    subtitle:
      "VTG plant deine Tour, führt dich durch die Stadt und erzählt Geschichten über Sehenswürdigkeiten in deiner Sprache.",
    download: "App herunterladen",
    viewFeatures: "Funktionen ansehen",
    global: "Global",
    cities: "Städte",
    ai: "KI",
    routes: "Routen",
    audio: "Audio",
    guide: "Guide",
    welcome: "Willkommen",
    suggestedRoute: "Empfohlene Route",
    historicWalk: "Historischer Spaziergang",
    arrived: "Du bist angekommen ✅",
    place: "Kalemegdan",
    story: "Höre die Geschichte der Festung und der Stadt.",
    featuresTitle: "Entwickelt für modernen Tourismus.",
    howTitle: "Wie funktioniert VTG?",
    step1: "Stadt wählen",
    step1Text: "Der Nutzer wählt Ziel und Sprache.",
    step2: "Route erstellen",
    step2Text: "KI schlägt eine Tour nach Interessen vor.",
    step3: "Guide anhören",
    step3Text: "Die App führt und erzählt Geschichten vor Ort.",
    faqTitle: "Häufig gestellte Fragen",
    privacyLabel: "Datenschutz",
    termsLabel: "Nutzungsbedingungen",
    contactLabel: "Kontakt",
    languageLabel: "Sprache wählen",
    menuOpen: "Menü öffnen",
    menuClose: "Menü schließen",
    features: [
  ["KI-Reiserouten", "VTG erstellt einen Tourplan basierend auf Stadt, Zeit und Interessen."],
  ["Intelligenter Guide", "Nutzer erhalten interessante Geschichten über die Orte, die sie besuchen."],
  ["Audio-Erzählung", "Geschichten können über den Lautsprecher gehört werden, ohne ständig auf den Bildschirm zu schauen."],
  ["Offline-Touren", "Touren können im Voraus über WLAN vorbereitet werden."],
],
  },

  it: {
    navFeatures: "Funzioni",
    navHow: "Come funziona",
    navFaq: "FAQ",
    navDownload: "Download",
    brandName: "Guida Turistica Virtuale",
    googlePlay: "Google Play",
    appStore: "App Store",
    appGallery: "AppGallery",
    tag: "Compagno di viaggio AI",
    title: "La tua guida turistica personale per ogni città.",
    subtitle:
      "VTG pianifica il tour, guida l’utente in città e racconta storie sui luoghi nella lingua scelta.",
    download: "Scarica app",
    viewFeatures: "Vedi funzioni",
    global: "Globale",
    cities: "città",
    ai: "AI",
    routes: "percorsi",
    audio: "Audio",
    guide: "guida",
    welcome: "Benvenuto",
    suggestedRoute: "Percorso suggerito",
    historicWalk: "Passeggiata storica",
    arrived: "Sei arrivato ✅",
    place: "Kalemegdan",
    story: "Ascolta la storia della fortezza e della città.",
    featuresTitle: "Creato per il turismo moderno.",
    howTitle: "Come funziona VTG?",
    step1: "Scegli città",
    step1Text: "L’utente sceglie destinazione e lingua.",
    step2: "Crea un percorso",
    step2Text: "L’AI suggerisce un tour in base agli interessi.",
    step3: "Ascolta la guida",
    step3Text: "L’app guida e racconta storie sul posto.",
    faqTitle: "Domande frequenti",
    privacyLabel: "Privacy",
    termsLabel: "Termini di utilizzo",
    contactLabel: "Contatti",
    languageLabel: "Scegli la lingua",
    menuOpen: "Apri menu",
    menuClose: "Chiudi menu",
    features: [
  ["Percorsi turistici AI", "VTG crea un piano di visita in base alla città, al tempo e agli interessi dell’utente."],
  ["Guida intelligente", "Gli utenti ricevono storie interessanti sui luoghi che visitano."],
  ["Narrazione audio", "Le storie possono essere ascoltate tramite altoparlante senza guardare sempre lo schermo."],
  ["Tour offline", "I tour possono essere preparati in anticipo tramite Wi-Fi."],
],
  },

  fr: {
  navFeatures: "Fonctionnalités",
  navHow: "Comment ça marche",
  navFaq: "FAQ",
  navDownload: "Téléchargement",
  brandName: "Guide Touristique Virtuel",
  googlePlay: "Google Play",
  appStore: "App Store",
  appGallery: "AppGallery",
  tag: "Compagnon de voyage IA",
  title: "Votre guide touristique personnel pour chaque ville.",
  subtitle:
    "VTG planifie votre visite, vous guide dans la ville et raconte des histoires sur les monuments dans la langue choisie.",
  download: "Télécharger l’application",
  viewFeatures: "Voir les fonctionnalités",
  global: "Mondial",
  cities: "villes",
  ai: "IA",
  routes: "itinéraires",
  audio: "Audio",
  guide: "guide",
  welcome: "Bienvenue",
  suggestedRoute: "Itinéraire suggéré",
  historicWalk: "Promenade historique",
  arrived: "Vous êtes arrivé ✅",
  place: "Kalemegdan",
  story: "Écoutez l’histoire de la forteresse et de la ville.",
  featuresTitle: "Conçu pour le tourisme moderne.",
  howTitle: "Comment fonctionne VTG ?",
  step1: "Choisissez une ville",
  step1Text: "L’utilisateur choisit une destination et une langue.",
  step2: "Créer un itinéraire",
  step2Text: "L’IA propose une visite selon les intérêts.",
  step3: "Écoutez le guide",
  step3Text: "L’application guide et raconte des histoires sur place.",
  faqTitle: "Questions fréquentes",
  privacyLabel: "Confidentialité",
  termsLabel: "Conditions d’utilisation",
  contactLabel: "Contact",
  languageLabel: "Choisir la langue",
  menuOpen: "Ouvrir le menu",
  menuClose: "Fermer le menu",
  features: [
  ["Itinéraires IA", "VTG crée un plan de visite selon la ville, le temps disponible et les intérêts de l’utilisateur."],
  ["Guide intelligent", "Les utilisateurs reçoivent des histoires intéressantes sur les lieux qu’ils visitent."],
  ["Narration audio", "Les histoires peuvent être écoutées via le haut-parleur sans regarder constamment l’écran."],
  ["Visites hors ligne", "Les visites peuvent être préparées à l’avance via Wi-Fi."],
],
},

es: {
  navFeatures: "Funciones",
  navHow: "Cómo funciona",
  navFaq: "Preguntas frecuentes",
  navDownload: "Descarga",
  brandName: "Guía Turística Virtual",
  googlePlay: "Google Play",
  appStore: "App Store",
  appGallery: "AppGallery",
  tag: "Compañero de viaje con IA",
  title: "Tu guía turística personal para cada ciudad.",
  subtitle:
    "VTG planifica tu recorrido, te guía por la ciudad y cuenta historias sobre los lugares en el idioma elegido.",
  download: "Descargar app",
  viewFeatures: "Ver funciones",
  global: "Global",
  cities: "ciudades",
  ai: "IA",
  routes: "rutas",
  audio: "Audio",
  guide: "guía",
  welcome: "Bienvenido",
  suggestedRoute: "Ruta sugerida",
  historicWalk: "Paseo histórico",
  arrived: "Has llegado ✅",
  place: "Kalemegdan",
  story: "Escucha la historia de la fortaleza y de la ciudad.",
  featuresTitle: "Creado para el turismo moderno.",
  howTitle: "¿Cómo funciona VTG?",
  step1: "Elige ciudad",
  step1Text: "El usuario elige destino e idioma.",
  step2: "Crea una ruta",
  step2Text: "La IA sugiere un recorrido según los intereses.",
  step3: "Escucha la guía",
  step3Text: "La app guía y cuenta historias en el lugar.",
  faqTitle: "Preguntas frecuentes",
  privacyLabel: "Privacidad",
  termsLabel: "Términos de uso",
  contactLabel: "Contacto",
  languageLabel: "Elegir idioma",
  menuOpen: "Abrir menú",
  menuClose: "Cerrar menú",
  features: [
  ["Rutas turísticas con IA", "VTG crea un plan de visita según la ciudad, el tiempo y los intereses del usuario."],
  ["Guía inteligente", "Los usuarios reciben historias interesantes sobre los lugares que visitan."],
  ["Narración de audio", "Las historias se pueden escuchar por el altavoz sin mirar constantemente la pantalla."],
  ["Tours sin conexión", "Los tours se pueden preparar con antelación por Wi-Fi."],
],
},

ru: {
  navFeatures: "Функции",
  navHow: "Как это работает",
  navFaq: "Вопросы",
  navDownload: "Скачать",
  brandName: "Виртуальный туристический гид",
  googlePlay: "Google Play",
  appStore: "App Store",
  appGallery: "AppGallery",
  tag: "ИИ-помощник в путешествиях",
  title: "Ваш личный туристический гид для любого города.",
  subtitle:
    "VTG планирует маршрут, ведёт пользователя по городу и рассказывает истории о достопримечательностях на выбранном языке.",
  download: "Скачать приложение",
  viewFeatures: "Посмотреть функции",
  global: "Глобально",
  cities: "города",
  ai: "ИИ",
  routes: "маршруты",
  audio: "Аудио",
  guide: "гид",
  welcome: "Добро пожаловать",
  suggestedRoute: "Рекомендуемый маршрут",
  historicWalk: "Историческая прогулка",
  arrived: "Вы прибыли ✅",
  place: "Калемегдан",
  story: "Слушайте историю крепости и города.",
  featuresTitle: "Создано для современного туризма.",
  howTitle: "Как работает VTG?",
  step1: "Выберите город",
  step1Text: "Пользователь выбирает направление и язык.",
  step2: "Создайте маршрут",
  step2Text: "ИИ предлагает тур по интересам.",
  step3: "Слушайте гида",
  step3Text: "Приложение ведёт и рассказывает истории на месте.",
  faqTitle: "Частые вопросы",
  privacyLabel: "Конфиденциальность",
  termsLabel: "Условия использования",
  contactLabel: "Контакты",
  languageLabel: "Выбрать язык",
  menuOpen: "Открыть меню",
  menuClose: "Закрыть меню",
  features: [
  ["AI-маршруты", "VTG создаёт план прогулки на основе города, времени и интересов пользователя."],
  ["Умный гид", "Пользователь получает интересные истории о местах, которые посещает."],
  ["Аудио-рассказ", "Истории можно слушать через динамик, не глядя постоянно на экран."],
  ["Офлайн-туры", "Туры можно подготовить заранее через Wi-Fi."],
],
},

hi: {
  navFeatures: "सुविधाएँ",
  navHow: "यह कैसे काम करता है",
  navFaq: "सामान्य प्रश्न",
  navDownload: "डाउनलोड",
  brandName: "वर्चुअल पर्यटक गाइड",
  googlePlay: "Google Play",
  appStore: "App Store",
  appGallery: "AppGallery",
  tag: "एआई यात्रा साथी",
  title: "हर शहर के लिए आपका निजी पर्यटक गाइड।",
  subtitle:
    "VTG आपकी यात्रा की योजना बनाता है, शहर में आपका मार्गदर्शन करता है और चुनी हुई भाषा में स्थानों की कहानियाँ सुनाता है।",
  download: "ऐप डाउनलोड करें",
  viewFeatures: "सुविधाएँ देखें",
  global: "वैश्विक",
  cities: "शहर",
  ai: "AI",
  routes: "मार्ग",
  audio: "ऑडियो",
  guide: "गाइड",
  welcome: "स्वागत है",
  suggestedRoute: "सुझाया गया मार्ग",
  historicWalk: "ऐतिहासिक यात्रा",
  arrived: "आप पहुँच गए ✅",
  place: "Kalemegdan",
  story: "किले और शहर के इतिहास की कहानी सुनें।",
  featuresTitle: "आधुनिक पर्यटन के लिए बनाया गया।",
  howTitle: "VTG कैसे काम करता है?",
  step1: "शहर चुनें",
  step1Text: "उपयोगकर्ता गंतव्य और भाषा चुनता है।",
  step2: "मार्ग बनाएँ",
  step2Text: "AI रुचियों के आधार पर यात्रा सुझाता है।",
  step3: "गाइड सुनें",
  step3Text: "ऐप स्थान पर मार्गदर्शन करता है और कहानियाँ सुनाता है।",
  faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
  privacyLabel: "गोपनीयता",
  termsLabel: "उपयोग की शर्तें",
  contactLabel: "संपर्क",
  languageLabel: "भाषा चुनें",
  menuOpen: "मेनू खोलें",
  menuClose: "मेनू बंद करें",
  features: [
  ["AI पर्यटन मार्ग", "VTG शहर, समय और उपयोगकर्ता की रुचियों के आधार पर यात्रा योजना बनाता है।"],
  ["स्मार्ट गाइड", "उपयोगकर्ता जिन स्थानों पर जाते हैं, उनके बारे में रोचक कहानियाँ प्राप्त करते हैं।"],
  ["ऑडियो वर्णन", "कहानियों को बार-बार स्क्रीन देखे बिना स्पीकर पर सुना जा सकता है।"],
  ["ऑफलाइन टूर", "टूर को पहले से Wi-Fi पर तैयार किया जा सकता है।"],
],
},

zh: {
  navFeatures: "功能",
  navHow: "工作方式",
  navFaq: "常见问题",
  navDownload: "下载",
  brandName: "虚拟旅游指南",
  googlePlay: "Google Play",
  appStore: "App Store",
  appGallery: "AppGallery",
  tag: "AI 旅行伙伴",
  title: "适用于每座城市的个人旅游向导。",
  subtitle:
    "VTG 会规划您的游览路线，引导您穿过城市，并用您选择的语言讲述景点故事。",
  download: "下载应用",
  viewFeatures: "查看功能",
  global: "全球",
  cities: "城市",
  ai: "AI",
  routes: "路线",
  audio: "音频",
  guide: "向导",
  welcome: "欢迎",
  suggestedRoute: "推荐路线",
  historicWalk: "历史步行路线",
  arrived: "您已到达 ✅",
  place: "Kalemegdan",
  story: "聆听关于堡垒和城市历史的故事。",
  featuresTitle: "为现代旅游而打造。",
  howTitle: "VTG 如何工作？",
  step1: "选择城市",
  step1Text: "用户选择目的地和语言。",
  step2: "创建路线",
  step2Text: "AI 根据兴趣推荐游览路线。",
  step3: "收听向导",
  step3Text: "应用会在现场引导并讲述故事。",
  faqTitle: "常见问题",
  privacyLabel: "隐私",
  termsLabel: "使用条款",
  contactLabel: "联系",
  languageLabel: "选择语言",
  menuOpen: "打开菜单",
  menuClose: "关闭菜单",
  features: [
  ["AI 旅游路线", "VTG 会根据城市、时间和用户兴趣制定游览计划。"],
  ["智能向导", "用户可以获得关于所访问地点的有趣故事。"],
  ["音频讲解", "故事可以通过扬声器收听，无需一直看屏幕。"],
  ["离线游览", "游览路线可以提前通过 Wi-Fi 准备好。"],
],
},

ar: {
  navFeatures: "الميزات",
  navHow: "كيف يعمل",
  navFaq: "الأسئلة الشائعة",
  navDownload: "التحميل",
  brandName: "الدليل السياحي الافتراضي",
  googlePlay: "Google Play",
  appStore: "App Store",
  appGallery: "AppGallery",
  tag: "رفيق السفر بالذكاء الاصطناعي",
  title: "دليلك السياحي الشخصي لكل مدينة.",
  subtitle:
    "يقوم VTG بتخطيط جولتك، ويرشدك داخل المدينة، ويحكي قصص المعالم باللغة التي تختارها.",
  download: "تحميل التطبيق",
  viewFeatures: "عرض الميزات",
  global: "عالمي",
  cities: "مدن",
  ai: "ذكاء اصطناعي",
  routes: "مسارات",
  audio: "صوت",
  guide: "دليل",
  welcome: "مرحبًا",
  suggestedRoute: "المسار المقترح",
  historicWalk: "جولة تاريخية",
  arrived: "لقد وصلت ✅",
  place: "Kalemegdan",
  story: "استمع إلى قصة القلعة وتاريخ المدينة.",
  featuresTitle: "مصمم للسياحة الحديثة.",
  howTitle: "كيف يعمل VTG؟",
  step1: "اختر مدينة",
  step1Text: "يختار المستخدم الوجهة واللغة.",
  step2: "أنشئ مسارًا",
  step2Text: "يقترح الذكاء الاصطناعي جولة حسب الاهتمامات.",
  step3: "استمع إلى الدليل",
  step3Text: "يرشدك التطبيق ويحكي القصص في الموقع.",
  faqTitle: "الأسئلة الشائعة",
  privacyLabel: "الخصوصية",
  termsLabel: "شروط الاستخدام",
  contactLabel: "اتصال",
  languageLabel: "اختر اللغة",
  menuOpen: "فتح القائمة",
  menuClose: "إغلاق القائمة",
  features: [
  ["مسارات سياحية بالذكاء الاصطناعي", "ينشئ VTG خطة جولة حسب المدينة والوقت واهتمامات المستخدم."],
  ["دليل ذكي", "يحصل المستخدم على قصص شيقة عن الأماكن التي يزورها."],
  ["سرد صوتي", "يمكن الاستماع إلى القصص عبر السماعة دون النظر المستمر إلى الشاشة."],
  ["جولات دون اتصال", "يمكن تجهيز الجولة مسبقًا عبر Wi-Fi."],
],
},
};

const fallback = translations.en;



function isLangCode(value: string | null): value is LangCode {
  return (
    value === "sr" ||
    value === "en" ||
    value === "de" ||
    value === "it" ||
    value === "fr" ||
    value === "es" ||
    value === "ru" ||
    value === "hi" ||
    value === "zh" ||
    value === "ar"
  );
}

export default function Home() {
  const [lang, setLang] = useState<LangCode>("sr");
  const [languageHydrated, setLanguageHydrated] = useState(false);
const [open, setOpen] = useState(false);
const [mobileMenu, setMobileMenu] = useState(false);
const [openFaq, setOpenFaq] = useState<string | null>(null);

const dropdownRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const savedLang = localStorage.getItem("vtg-language");
  const timeoutId = window.setTimeout(() => {
    if (isLangCode(savedLang)) {
      setLang(savedLang);
    }
    setLanguageHydrated(true);
  }, 0);

  return () => window.clearTimeout(timeoutId);
}, []);

useEffect(() => {
  if (!languageHydrated) return;

  localStorage.setItem("vtg-language", lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
}, [lang, languageHydrated]);

useEffect(() => {
  const timeoutId = window.setTimeout(() => setOpenFaq(null), 0);

  return () => window.clearTimeout(timeoutId);
}, [lang]);

useEffect(() => {
  function handleClickOutside(event: MouseEvent) {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);
  const t = translations[lang] || fallback;
  const localizedFaq = websiteFaqSlugs
    .map((slug) => supportFaq.find((article) => article.language_code === lang && article.slug === slug))
    .filter((article): article is SupportFaqEntry => Boolean(article));

  return (
    <main
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="min-h-screen overflow-hidden bg-[#07111f] text-white"
    >
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-amber-400/20 blur-[120px]" />
        <div className="absolute right-[-10%] top-[20%] h-[460px] w-[460px] rounded-full bg-blue-500/20 blur-[140px]" />
      </div>

      <header className="sticky top-0 z-[999] border-b border-white/10 bg-[#07111f]/75 backdrop-blur-xl">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
    <div className="flex items-center gap-3">
      <Image
        src="/vtg-logo.png"
        alt="VTG logo"
        width={52}
        height={52}
      />

      <div>
        <p className="text-lg font-black leading-none">VTG</p>

        <p className="text-xs text-slate-400">
          {t.brandName}
        </p>
      </div>
    </div>

    <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
      <a href="#features" className="hover:text-white">
        {t.navFeatures}
      </a>

      <a href="#how" className="hover:text-white">
        {t.navHow}
      </a>

      <a href="#faq" className="hover:text-white">
        {t.navFaq}
      </a>

      <a href="#download" className="hover:text-white">
        {t.navDownload}
      </a>
    </nav>

    <div className="flex items-center gap-3">
      <div className="relative z-[1000]" ref={dropdownRef}>
        <button
          type="button"
          aria-label={t.languageLabel}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15"
        >
          {lang.toUpperCase()}

          <ChevronDown size={16} />
        </button>

        {open && (
          <div className="absolute right-0 top-12 z-[1001] w-40 overflow-hidden rounded-2xl border border-white/10 bg-[#0f1c2f] shadow-2xl shadow-black/40">
            {languages.map((item) => (
              <button
                key={item.code}
                type="button"
                onClick={() => {
                  setLang(item.code);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm transition hover:bg-white/10 ${
                  lang === item.code
                    ? "text-amber-300"
                    : "text-white"
                }`}
              >
                {item.label}

                {lang === item.code && (
                  <div className="h-2 w-2 rounded-full bg-amber-300" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      <button
        type="button"
        aria-label={mobileMenu ? t.menuClose : t.menuOpen}
        aria-expanded={mobileMenu}
        aria-controls="mobile-navigation"
        onClick={() => setMobileMenu(!mobileMenu)}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white md:hidden"
      >
        {mobileMenu ? <X size={20} /> : <Menu size={20} />}
      </button>
    </div>
  </div>

  {mobileMenu && (
    <div id="mobile-navigation" className="border-t border-white/10 bg-[#07111f]/95 px-6 py-5 backdrop-blur-xl md:hidden">
      <div className="flex flex-col gap-5 text-lg font-semibold text-white">
        <a
          href="#features"
          onClick={() => setMobileMenu(false)}
        >
          {t.navFeatures}
        </a>

        <a
          href="#how"
          onClick={() => setMobileMenu(false)}
        >
          {t.navHow}
        </a>

        <a
          href="#download"
          onClick={() => setMobileMenu(false)}
        >
          {t.navDownload}
        </a>

        <a
          href="#faq"
          onClick={() => setMobileMenu(false)}
        >
          {t.navFaq}
        </a>
      </div>
    </div>
  )}
</header>

      <motion.section
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }} className="relative z-10 mx-auto grid min-h-[82vh] max-w-7xl items-center gap-14 px-6 py-12 lg:grid-cols-2">
        <div>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-amber-300">
            {t.tag}
          </p>

          <h1 className="text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">
            {t.title}
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            {t.subtitle}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#download"
              className="rounded-full bg-amber-400 px-8 py-4 text-center font-black text-slate-950"
            >
              {t.download}
            </a>

            <a
              href="#features"
              className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-center font-bold"
            >
              {t.viewFeatures}
            </a>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-3 gap-4">
            {[
              [t.global, t.cities],
              [t.ai, t.routes],
              [t.audio, t.guide],
            ].map(([top, bottom]) => (
              <div
                key={top}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-4"
              >
                <p className="text-xl font-black text-amber-300">{top}</p>
                <p className="mt-1 text-sm text-slate-400">{bottom}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto">
          <motion.div
  initial={{ opacity: 0, scale: 0.9, rotate: 4 }}
  animate={{ opacity: 1, scale: 1, rotate: 0 }}
  transition={{ duration: 0.9 }}
              className="relative h-[606px] w-[276px] rounded-[3.1rem] border border-white/20 bg-gradient-to-b from-slate-800 to-black p-[5px] shadow-[0_40px_120px_rgba(0,0,0,0.65)]"
>
            <div className="relative h-auto w-full aspect-[9/20] overflow-hidden rounded-[2.9rem] bg-gradient-to-b from-[#183764] via-[#10233f] to-[#07111f] p-0">
              <div className="absolute right-[-40px] top-[-40px] h-40 w-40 rounded-full bg-amber-400/20 blur-3xl" />

<div className="absolute bottom-[-60px] left-[-40px] h-44 w-44 rounded-full bg-blue-500/20 blur-3xl" />
              <div className="mx-auto mb-7 h-6 w-28 rounded-full bg-black/35" />
              <Image
                src={phoneScreenshots[lang]}
                alt={`VTG app preview - ${lang}`}
                fill
                priority
                sizes="(max-width: 768px) 280px, 310px"
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
  id="features"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }} className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-4xl font-black md:text-5xl">{t.featuresTitle}</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {t.features.map(([title, text]: [string, string], index: number) => (
  <motion.div
    key={title}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.12 }}
    className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 transition hover:-translate-y-1 hover:bg-white/[0.09]"
  >
    <h3 className="text-xl font-black text-amber-300">
      {title}
    </h3>

    <p className="mt-4 leading-7 text-slate-300">
      {text}
    </p>
  </motion.div>
))}
        </div>
      </motion.section>

      <motion.section
  id="how"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="relative z-10 mx-auto max-w-7xl px-6 py-24"
>
        <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-8 md:p-12">
          <h2 className="text-4xl font-black">{t.howTitle}</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["01", t.step1, t.step1Text],
              ["02", t.step2, t.step2Text],
              ["03", t.step3, t.step3Text],
            ].map(([num, title, text]) => (
              <motion.div
  key={num}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="rounded-3xl bg-slate-950/50 p-6"
>
                <p className="text-3xl font-black text-amber-300">{num}</p>
                <h3 className="mt-5 text-2xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="faq"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-5xl px-6 py-24"
      >
        <h2 className="text-center text-4xl font-black md:text-5xl">
          {t.faqTitle}
        </h2>

        <div className="mt-12 grid gap-5">
          {localizedFaq.map((article) => {
            const expanded = openFaq === article.slug;

            return (
              <article
                key={`${article.language_code}-${article.slug}`}
                className="rounded-3xl border border-white/10 bg-white/[0.06]"
              >
                <button
                  type="button"
                  aria-expanded={expanded}
                  onClick={() => setOpenFaq(expanded ? null : article.slug)}
                  className="flex w-full items-center justify-between gap-5 p-7 text-start"
                >
                  <span className="text-xl font-black text-amber-300">{article.title}</span>
                  <ChevronDown
                    aria-hidden="true"
                    className={`h-6 w-6 shrink-0 transition-transform ${expanded ? "rotate-180" : ""}`}
                  />
                </button>

                {expanded && (
                  <p className="px-7 pb-7 leading-7 text-slate-300">{article.content}</p>
                )}
              </article>
            );
          })}
        </div>
      </motion.section>

      <section id="download" className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-white p-10 text-center text-slate-950 md:p-16">
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={storeUrls.googlePlay}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-20 flex-1 items-center justify-center rounded-2xl bg-slate-950 px-7 py-5 text-xl font-black text-white transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500"
            >
              {t.googlePlay}
            </a>

            <a
              href={storeUrls.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-20 flex-1 items-center justify-center rounded-2xl border border-slate-300 px-7 py-5 text-xl font-black text-slate-950 transition hover:border-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500"
            >
              {t.appStore}
            </a>

            <a
              href={storeUrls.appGallery}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-20 flex-1 items-center justify-center rounded-2xl border border-slate-300 px-7 py-5 text-xl font-black text-slate-950 transition hover:border-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500"
            >
              {t.appGallery}
            </a>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-6 py-8 text-sm text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <p>© 2026 VTG — Tourist Virtual Guide</p>

          <div className="flex gap-6">
            <a href="/privacy">{t.privacyLabel}</a>
            <a href="/terms">{t.termsLabel}</a>
            <a href="/contact">{t.contactLabel}</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
