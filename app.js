/* NaradNow frontend. Configure API_BASE to your deployed Cloudflare Worker endpoint. */
const API_BASE = "https://naradnow-api.notesfriendair1.workers.dev/api/news";
const CACHE_KEY = "naradnow:cache:v1";
const SAVED_KEY = "naradnow:saved:v1";
const THEME_KEY = "naradnow:theme:v1";
const LANG_KEY = "naradnow:language:v1";
const CATEGORIES = [
  "top",
  "politics",
  "education",
  "health",
  "finance",
  "business",
  "science",
  "technology",
  "environment",
  "sports",
  "world",
  "government",
];
const WORDS = {
  en: {
    dailyBrief: "THE DAILY BRIEF",
    brandTagline: "India, in the know.",
    navHome: "Home",
    navIndia: "India",
    navWorld: "World",
    navBusiness: "Business",
    navOfficial: "Official desk",
    independentDesk: "YOUR INDEPENDENT NEWS DESK",
    heroLine1: "India, in the",
    heroLine2: "know.",
    heroDescription:
      "A calmer way to catch up on what matters — from national decisions to the ideas shaping tomorrow.",
    sourceFirst: "Sources first. Noise less.",
    newsPulse: "NEWS PULSE",
    explore: "EXPLORE",
    catForYou: "For you",
    catPolitics: "Politics",
    catEducation: "Education",
    catHealth: "Health",
    catFinance: "Finance",
    catBusiness: "Business",
    catScience: "Science",
    catTechnology: "Technology",
    catEnvironment: "Environment",
    catSports: "Sports",
    catWorld: "World",
    catGovernment: "Govt. schemes",
    officialCardTitle: "Read it at the source.",
    officialCardBody: "Government updates, directly from PIB.",
    viewOfficial: "View official desk ↗",
    editorialNote: "Headlines link to their original publishers.",
    latestBrief: "LATEST BRIEFING",
    topStories: "Top stories",
    officialLabel: "PRIMARY SOURCES",
    officialHeading: "The official desk",
    pibFeedLink: "PIB RSS ↗",
    officialDescription:
      "Government press releases are shown separately so readers can distinguish official announcements from newsroom coverage.",
    dailyDesk: "THE DAILY DESK",
    dailyDigestTitle: "A little more context.<br>Every day.",
    dailyDigestBody:
      "Build your own briefing across the topics you follow. Your saved stories stay on this device.",
    savedStories: "Saved stories",
    privateNote: "Saved locally. No account needed.",
    savedTitle: "Your reading list",
    popularTopics: "Popular topics",
    topicNote: "Tap a topic to search the feed.",
    sourceHealth: "Source status",
    statusNote: "API credentials stay on the server, not in this page.",
    examCorner: "FOR THE CURIOUS",
    examTitle: "Know more than the headline.",
    examBody:
      "A daily quiz and revision notes can be added to turn headlines into learning.",
    quizPreview: "Preview a quick quiz",
    previewNote: "Preview cards are illustrative, not current news.",
    closingKicker: "A MORE THOUGHTFUL NEWS ROUTINE",
    closingTitle: "Stay curious. Stay informed.",
    backTop: "Back to top ↑",
    footerLine:
      "An independent interface for reading the news. Headlines remain the property of their original publishers.",
    quizLabel: "QUICK KNOWLEDGE CHECK",
    quizTitle: "A sample current-affairs quiz.",
    quizNote:
      "Demo question only. Connect verified daily quiz content before publishing this feature.",
    searchPlaceholder: "Search headlines…",
    noResults: "No stories found",
    noResultsBody: "Try a different search or switch to another category.",
    retry: "Try again",
    loading: "Loading the latest stories…",
    noLive: "No live stories loaded",
    notConnected: "Not connected",
    waitingWorker: "Waiting for Worker",
    connected: "Connected",
    pibLoaded: "Official feed loaded",
    usingCache: "Showing cached stories",
    loadError: "Could not load the live feed",
    apiNeedsKey: "NewsData key not set",
    pibOnly:
      "PIB official releases loaded; add your NewsData.io key for wider news coverage.",
    workerNeeded:
      "Connect your free Cloudflare Worker and NewsData.io key to load live stories. PIB is fetched through the Worker.",
    lastUpdated: "Updated",
    story: "story",
    stories: "stories",
    openStory: "Open original story",
    saveStory: "Save story",
    unsaveStory: "Remove saved story",
    published: "Published",
    sourceOfficial: "Official source",
    newsdataOK: "Feed ready",
    pibOK: "Feed ready",
    apiUnavailable: "Temporarily unavailable",
    savedEmpty: "No saved stories yet.",
    searchHint: "Search headlines or topics",
    themeAuto: "Auto",
    themeLight: "Light",
    themeDark: "Dark",
    themeAutoTitle: "Theme mode: automatic",
    themeLightTitle: "Theme mode: light",
    themeDarkTitle: "Theme mode: dark",
    languageChanged: "Language changed",
    savedToast: "Story saved to your reading list",
    removedToast: "Removed from your reading list",
    feedsRefreshed: "Feeds refreshed",
    quizRight:
      "Correct — the Reserve Bank of India is the country's central bank.",
    quizWrong:
      "Not quite. The Reserve Bank of India (RBI) is India's central bank.",
    categoryTop: "Top stories",
    categoryFinance: "Finance & economy",
    categoryGovernment: "Government updates",
    officialEmptyTitle: "Official releases will appear here",
    officialEmptyBody:
      "Connect your Cloudflare Worker to load the PIB RSS feed.",
  },
  hi: {
    dailyBrief: "आज की मुख्य खबरें",
    brandTagline: "देश-दुनिया की खबर, साफ़-साफ़।",
    navHome: "होम",
    navIndia: "भारत",
    navWorld: "दुनिया",
    navBusiness: "कारोबार",
    navOfficial: "आधिकारिक स्रोत",
    independentDesk: "आपका स्वतंत्र न्यूज़ डेस्क",
    heroLine1: "भारत की खबरें,",
    heroLine2: "समझ के साथ।",
    heroDescription:
      "ज़रूरी खबरों से जुड़ें — देश के फैसलों से लेकर कल को आकार देने वाले विचारों तक।",
    sourceFirst: "स्रोत पहले। शोर कम।",
    newsPulse: "खबरों की झलक",
    explore: "श्रेणियाँ",
    catForYou: "आपके लिए",
    catPolitics: "राजनीति",
    catEducation: "शिक्षा",
    catHealth: "स्वास्थ्य",
    catFinance: "वित्त",
    catBusiness: "कारोबार",
    catScience: "विज्ञान",
    catTechnology: "तकनीक",
    catEnvironment: "पर्यावरण",
    catSports: "खेल",
    catWorld: "दुनिया",
    catGovernment: "सरकारी योजनाएँ",
    officialCardTitle: "खबर को मूल स्रोत पर पढ़ें।",
    officialCardBody: "सरकार की घोषणाएँ सीधे PIB से।",
    viewOfficial: "आधिकारिक खबरें ↗",
    editorialNote: "हर खबर उसके मूल प्रकाशक से जुड़ी है।",
    latestBrief: "ताज़ा खबरें",
    topStories: "मुख्य खबरें",
    officialLabel: "प्राथमिक स्रोत",
    officialHeading: "आधिकारिक खबरें",
    pibFeedLink: "PIB RSS ↗",
    officialDescription:
      "सरकारी प्रेस रिलीज़ अलग दिखाई जाती हैं, ताकि आधिकारिक घोषणाओं और मीडिया कवरेज में अंतर स्पष्ट रहे।",
    dailyDesk: "आपका डेली डेस्क",
    dailyDigestTitle: "थोड़ा और संदर्भ।<br>हर दिन।",
    dailyDigestBody:
      "अपनी पसंद के विषयों का ब्रीफिंग बनाएं। सेव की गई खबरें इसी डिवाइस पर रहेंगी।",
    savedStories: "सेव की गई खबरें",
    privateNote: "डिवाइस पर सेव। अकाउंट ज़रूरी नहीं।",
    savedTitle: "आपकी रीडिंग लिस्ट",
    popularTopics: "लोकप्रिय विषय",
    topicNote: "फीड में खोजने के लिए किसी विषय पर टैप करें।",
    sourceHealth: "स्रोत की स्थिति",
    statusNote: "API की चाबी सर्वर पर रहती है, इस पेज में नहीं।",
    examCorner: "जिज्ञासु पाठकों के लिए",
    examTitle: "सिर्फ़ हेडलाइन से आगे जानें।",
    examBody:
      "खबरों को सीखने में बदलने के लिए डेली क्विज़ और रिविज़न नोट्स जोड़े जा सकते हैं।",
    quizPreview: "एक छोटा क्विज़ देखें",
    previewNote: "ये केवल डिज़ाइन के नमूने हैं, ताज़ा खबरें नहीं।",
    closingKicker: "बेहतर खबर पढ़ने की आदत",
    closingTitle: "जिज्ञासु रहें। जागरूक रहें।",
    backTop: "ऊपर जाएँ ↑",
    footerLine:
      "खबरें पढ़ने का एक स्वतंत्र इंटरफ़ेस। हेडलाइन का अधिकार मूल प्रकाशकों के पास है।",
    quizLabel: "ज्ञान की छोटी जाँच",
    quizTitle: "करंट अफेयर्स का नमूना क्विज़।",
    quizNote:
      "यह केवल एक डेमो सवाल है। प्रकाशित करने से पहले सत्यापित दैनिक क्विज़ जोड़ें।",
    searchPlaceholder: "खबरें खोजें…",
    noResults: "कोई खबर नहीं मिली",
    noResultsBody: "अलग शब्द खोजें या दूसरी श्रेणी चुनें।",
    retry: "फिर कोशिश करें",
    loading: "ताज़ा खबरें लोड हो रही हैं…",
    noLive: "कोई लाइव खबर लोड नहीं हुई",
    notConnected: "कनेक्ट नहीं है",
    waitingWorker: "Worker का इंतज़ार",
    connected: "कनेक्ट है",
    pibLoaded: "आधिकारिक फीड लोड हुई",
    usingCache: "कैश की गई खबरें दिखाई जा रही हैं",
    loadError: "लाइव फीड लोड नहीं हो सकी",
    apiNeedsKey: "NewsData की API key सेट नहीं है",
    pibOnly:
      "PIB की आधिकारिक खबरें लोड हुईं; अधिक खबरों के लिए NewsData.io key जोड़ें।",
    workerNeeded:
      "लाइव खबरों के लिए Cloudflare Worker और NewsData.io key जोड़ें। PIB फीड Worker के ज़रिए आएगी।",
    lastUpdated: "अपडेट",
    story: "खबर",
    stories: "खबरें",
    openStory: "मूल खबर खोलें",
    saveStory: "खबर सेव करें",
    unsaveStory: "सेव की गई सूची से हटाएँ",
    published: "प्रकाशित",
    sourceOfficial: "आधिकारिक स्रोत",
    newsdataOK: "फीड तैयार",
    pibOK: "फीड तैयार",
    apiUnavailable: "अभी उपलब्ध नहीं",
    savedEmpty: "अभी कोई खबर सेव नहीं है।",
    searchHint: "हेडलाइन या विषय खोजें",
    themeAuto: "ऑटो",
    themeLight: "लाइट",
    themeDark: "डार्क",
    themeAutoTitle: "थीम: ऑटो",
    themeLightTitle: "थीम: लाइट",
    themeDarkTitle: "थीम: डार्क",
    languageChanged: "भाषा बदल गई",
    savedToast: "खबर आपकी रीडिंग लिस्ट में सेव हुई",
    removedToast: "खबर रीडिंग लिस्ट से हटाई गई",
    feedsRefreshed: "फीड रीफ़्रेश हो गई",
    quizRight: "सही — भारतीय रिज़र्व बैंक देश का केंद्रीय बैंक है।",
    quizWrong: "नहीं। भारतीय रिज़र्व बैंक (RBI) भारत का केंद्रीय बैंक है।",
    categoryTop: "मुख्य खबरें",
    categoryFinance: "वित्त और अर्थव्यवस्था",
    categoryGovernment: "सरकारी अपडेट",
    officialEmptyTitle: "आधिकारिक रिलीज़ यहाँ दिखेंगी",
    officialEmptyBody:
      "PIB RSS फीड लोड करने के लिए Cloudflare Worker कनेक्ट करें।",
  },
};
const CATEGORY_KEYS = {
  top: "catForYou",
  politics: "catPolitics",
  education: "catEducation",
  health: "catHealth",
  finance: "catFinance",
  business: "catBusiness",
  science: "catScience",
  technology: "catTechnology",
  environment: "catEnvironment",
  sports: "catSports",
  world: "catWorld",
  government: "catGovernment",
};
const state = {
  category: "top",
  language: localStorage.getItem(LANG_KEY) || "en",
  theme: localStorage.getItem(THEME_KEY) || "auto",
  articles: [],
  official: [],
  loading: false,
  lastResult: null,
  search: "",
  page: 1,
  showSaved: false,
};
const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const esc = (v = "") =>
  String(v).replace(
    /[&<>"']/g,
    (ch) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        ch
      ],
  );
function t(key) {
  return (
    (WORDS[state.language] && WORDS[state.language][key]) ||
    WORDS.en[key] ||
    key
  );
}
function safeUrl(value) {
  try {
    const u = new URL(value);
    return ["https:", "http:"].includes(u.protocol) ? u.href : "#";
  } catch {
    return "#";
  }
}
function localDate(date = new Date()) {
  return new Intl.DateTimeFormat(state.language === "hi" ? "hi-IN" : "en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  }).format(date);
}
function timeAgo(value) {
  if (!value) return "";
  let d = new Date(value);
  if (Number.isNaN(d.getTime())) return "";
  let mins = Math.max(0, Math.floor((Date.now() - d.getTime()) / 60000));
  if (mins < 60) return `${mins}m ago`;
  let hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return new Intl.DateTimeFormat(state.language === "hi" ? "hi-IN" : "en-IN", {
    day: "numeric",
    month: "short",
    timeZone: "Asia/Kolkata",
  }).format(d);
}
function showToast(message) {
  const el = $("#toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => el.classList.remove("show"), 2500);
}
function applyTheme() {
  document.documentElement.dataset.theme = state.theme;
  const label = $("#theme-mode-label");
  const titleKey =
    state.theme === "auto"
      ? "themeAutoTitle"
      : state.theme === "light"
        ? "themeLightTitle"
        : "themeDarkTitle";
  label.textContent = t(state.theme === "auto" ? "themeAuto" : state.theme);
  $("#theme-toggle").setAttribute("aria-label", t(titleKey));
  $("#theme-toggle").title = t(titleKey);
  const icon = $("#theme-icon");
  icon.innerHTML =
    state.theme === "light"
      ? '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>'
      : state.theme === "dark"
        ? '<path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.6 8.6 0 1 0 20.5 14.2Z"/>'
        : '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8m-4-4v4"/>';
}
function applyLanguage() {
  document.documentElement.lang = state.language === "hi" ? "hi" : "en";
  $$("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const value = t(key);
    if (value.includes("<br>")) el.innerHTML = value;
    else el.textContent = value;
  });
  $("#language-toggle").textContent =
    state.language === "en" ? "हिंदी" : "English";
  $("#news-search").placeholder = t("searchPlaceholder");
  $("#news-search").setAttribute("aria-label", t("searchHint"));
  applyTheme();
  setCategoryHeading();
  if (API_BASE) renderStories();
  else renderPreviewCards();
  renderOfficial();
  renderSaved();
}
function getSaved() {
  try {
    return JSON.parse(localStorage.getItem(SAVED_KEY) || "[]");
  } catch {
    return [];
  }
}
function setSaved(arr) {
  localStorage.setItem(SAVED_KEY, JSON.stringify(arr));
  $("#saved-count").textContent = arr.length;
}
function categoryName(cat) {
  const key = CATEGORY_KEYS[cat];
  return key ? t(key) : cat ? cat[0].toUpperCase() + cat.slice(1) : "News";
}
function setCategoryHeading() {
  const heading = $("#feed-heading");
  let title =
    state.category === "top"
      ? t("categoryTop")
      : state.category === "finance"
        ? t("categoryFinance")
        : state.category === "government"
          ? t("categoryGovernment")
          : categoryName(state.category);
  heading.innerHTML = `${esc(title)}<span class="heading-period">.</span>`;
  $("#feed-kicker").textContent =
    state.category === "top"
      ? t("latestBrief")
      : state.language === "hi"
        ? "चुनी हुई श्रेणी"
        : "SELECTED CATEGORY";
  $$(".category-button").forEach((b) =>
    b.classList.toggle("selected", b.dataset.category === state.category),
  );
}
function articleId(a) {
  return a.id || a.url || `${a.title || ""}-${a.publishedAt || ""}`;
}
function normalizeArticle(a) {
  return {
    id: String(a.id || a.article_id || a.link || a.url || ""),
    title: String(a.title || "Untitled story"),
    description: String(a.description || a.summary || ""),
    url: safeUrl(a.url || a.link || "#"),
    image: a.image || a.image_url || "",
    publishedAt: a.publishedAt || a.pubDate || a.published_at || "",
    sourceName: a.sourceName || a.source_name || a.source || "News source",
    sourceType: a.sourceType || a.source_type || "newsdata",
    category: a.category || "top",
    language: a.language || state.language,
    official: !!(
      a.official ||
      a.sourceType === "pib" ||
      a.source_type === "pib"
    ),
  };
}
function allFallback() {
  return [];
}
function readCache() {
  try {
    return JSON.parse(sessionStorage.getItem(CACHE_KEY) || "{}");
  } catch {
    return {};
  }
}
function cacheKey() {
  return `${state.category}|${state.language}|${state.search.toLowerCase()}`;
}
async function loadStories(force = false) {
  if (state.loading) return;
  state.loading = true;
  setBusy(true);
  const key = cacheKey();
  const oldCache = readCache();
  if (
    !force &&
    oldCache[key] &&
    Date.now() - oldCache[key].time < 10 * 60 * 1000
  ) {
    adoptResult(oldCache[key].data, true);
    state.loading = false;
    setBusy(false);
    return;
  }
  if (!API_BASE) {
    updateSourceStatus({
      newsdata: false,
      pib: false,
      error: "worker-missing",
    });
    state.loading = false;
    setBusy(false);
    return;
  }
  try {
    const url = new URL(API_BASE);
    url.searchParams.set("category", state.category);
    url.searchParams.set("language", state.language);
    if (state.search) url.searchParams.set("search", state.search);
    url.searchParams.set("limit", "18");
    const response = await fetch(url.toString(), {
      headers: { Accept: "application/json" },
      cache: "no-store",
    });
    if (!response.ok)
      throw new Error(`Feed request failed (${response.status})`);
    const data = await response.json();
    if (!data || data.ok === false)
      throw new Error(data?.error || "Unexpected feed response");
    adoptResult(data, false);
    const c = readCache();
    c[key] = { time: Date.now(), data };
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(c));
  } catch (err) {
    console.warn("NaradNow feed error:", err);
    updateSourceStatus({
      newsdata: false,
      pib: false,
      error: "request-failed",
    });
    showEmptyState(
      t("loadError"),
      state.language === "hi"
        ? "जांचें कि Worker URL कॉन्फ़िगर है और Worker डिप्लॉय हो चुका है।"
        : "Check that the Worker URL is configured and the Worker has been deployed.",
      true,
    );
  } finally {
    state.loading = false;
    setBusy(false);
  }
}
function setBusy(busy) {
  const btn = $("#refresh-button");
  btn.classList.toggle("spinning", busy);
  btn.disabled = busy;
  btn.setAttribute("aria-busy", String(busy));
  if (busy) {
    $("#feed-notice").hidden = false;
    $("#feed-notice-text").textContent = t("loading");
  }
}
function adoptResult(data, fromCache) {
  state.lastResult = data;
  state.articles = (data.articles || []).map(normalizeArticle);
  state.official = (data.official || []).map((a) => ({
    ...normalizeArticle({ ...a, sourceType: "pib", official: true }),
    official: true,
  }));
  $("#last-sync").textContent =
    `${t("lastUpdated")} ${new Intl.DateTimeFormat(state.language === "hi" ? "hi-IN" : "en-IN", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kolkata" }).format(new Date())}`;
  $("#today-label").textContent =
    state.language === "hi" ? "भारत संस्करण" : "India edition";
  $("#intro-date").textContent = localDate();
  $("#feed-notice").hidden = !!(state.articles.length || state.official.length);
  if (!state.articles.length && !state.official.length) {
    showEmptyState(t("noLive"), t("noResultsBody"), true);
  } else {
    renderStories();
    renderOfficial();
    updateTicker();
  }
  const statuses = data.sources || {};
  updateSourceStatus({
    newsdata: !!(
      statuses.newsdata?.ok ||
      statuses.newsdata === true ||
      data.newsdataOk
    ),
    pib: !!(statuses.pib?.ok || statuses.pib === true || data.pibOk),
    note: fromCache ? t("usingCache") : data.message,
    error: data.error,
  });
  if (data.message) {
    $("#feed-notice").hidden = false;
    $("#feed-notice-text").textContent = data.message;
  }
}
function updateSourceStatus({
  newsdata = false,
  pib = false,
  note = "",
  error = "",
}) {
  const nd = $("#newsdata-status"),
    ndTag = $("#newsdata-tag"),
    ndDot = $("#newsdata-bullet"),
    pibEl = $("#pib-status"),
    pibTag = $("#pib-tag"),
    pibDot = $("#pib-bullet");
  nd.textContent = newsdata
    ? t("newsdataOK")
    : error === "worker-missing"
      ? t("notConnected")
      : error === "api-key-missing"
        ? t("apiNeedsKey")
        : error
          ? t("apiUnavailable")
          : t("notConnected");
  ndTag.textContent = newsdata
    ? "READY"
    : error === "api-key-missing"
      ? "KEY NEEDED"
      : "SETUP";
  ndTag.className =
    "status-tag " +
    (newsdata ? "good" : error === "api-key-missing" ? "warn" : "");
  ndDot.className =
    "source-bullet " +
    (newsdata ? "good" : error === "api-key-missing" ? "warn" : "");
  pibEl.textContent = pib
    ? t("pibOK")
    : error === "worker-missing"
      ? t("waitingWorker")
      : t("apiUnavailable");
  pibTag.textContent = pib ? "READY" : "SETUP";
  pibTag.className = "status-tag " + (pib ? "good" : "");
  pibDot.className = "source-bullet " + (pib ? "good" : "");
  if (error === "worker-missing") {
    $("#feed-notice").hidden = false;
    $("#feed-notice-text").textContent = t("workerNeeded");
  } else if (error === "api-key-missing") {
    $("#feed-notice").hidden = false;
    $("#feed-notice-text").textContent = t("pibOnly");
  }
}
function showEmptyState(title, body, showRetry = false) {
  $("#story-grid").innerHTML =
    `<div class="empty-state"><div class="empty-mark">✳</div><h3>${esc(title)}</h3><p>${esc(body)}</p>${showRetry ? `<button id="empty-retry">${esc(t("retry"))}</button>` : ""}</div>`;
  const retry = $("#empty-retry");
  if (retry) retry.addEventListener("click", () => loadStories(true));
}
function imageClass(cat) {
  return (
    {
      education: "image-education",
      finance: "image-economy",
      business: "image-economy",
      science: "image-science",
      technology: "image-science",
      health: "image-science",
      sports: "image-editorial",
      world: "image-editorial",
      politics: "image-editorial",
      government: "image-editorial",
      environment: "image-science",
    }[cat] || "image-editorial"
  );
}
function storyImage(a, featured = false) {
  const category = a.category || "top";
  const label = categoryName(category);
  const art = `<div class="story-image ${imageClass(category)}"><span class="image-flag">${a.official ? "OFFICIAL SOURCE" : esc(label.toUpperCase())}</span>${a.image ? `<img loading="lazy" alt="" src="${esc(safeUrl(a.image))}" onerror="this.remove()">` : category === "education" ? '<div class="book-stack"><i></i><i></i><i></i></div>' : category === "finance" || category === "business" ? '<div class="econ-bars"><i></i><i></i><i></i><i></i><i></i><i></i></div>' : category === "science" || category === "technology" || category === "health" ? '<div class="science-orbit"><i></i><i></i><i></i><b></b></div>' : '<div class="image-shape shape-sun"></div><div class="image-shape shape-arch"></div>'}<span class="image-kicker">${esc(label.toUpperCase())}</span></div>`;
  return art;
}
function storyCard(a, index) {
  const saved = getSaved().some((s) => articleId(s) === articleId(a));
  const time = timeAgo(a.publishedAt) || t("published");
  const description = (a.description || "").replace(/<[^>]*>/g, " ").trim();
  const shortDescription =
    description.length > 160 ? description.slice(0, 157) + "…" : description;
  const footer = `<span class="source-name" title="${esc(a.sourceName)}">${esc(a.sourceName)}</span><span class="read-time">${esc(time)}</span><span class="story-actions"><button class="save-story ${saved ? "is-saved" : ""}" data-save-id="${esc(articleId(a))}" aria-label="${esc(saved ? t("unsaveStory") : t("saveStory"))}" title="${esc(saved ? t("unsaveStory") : t("saveStory"))}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V21l-6-4-6 4V4.5Z"/></svg></button><a class="story-open" href="${esc(a.url)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(t("openStory"))}" title="${esc(t("openStory"))}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9"/><path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5"/></svg></a></span>`;
  return `<article class="story-card ${index === 0 ? "story-featured" : ""}" style="animation-delay:${Math.min(index * 55, 275)}ms">${storyImage(a, index === 0)}<div class="story-content"><div class="story-meta"><span class="story-category">${esc(categoryName(a.category))}</span><span class="meta-dot"></span><span>${esc(time)}</span>${a.official ? '<span class="official-tag">PIB</span>' : ""}</div><h3>${esc(a.title)}</h3>${shortDescription ? `<p>${esc(shortDescription)}</p>` : ""}<div class="story-footer">${footer}</div></div></article>`;
}
function getFilteredArticles() {
  const q = state.search.trim().toLowerCase();
  let items = state.articles;
  if (q)
    items = items.filter((a) =>
      `${a.title} ${a.description} ${a.sourceName}`.toLowerCase().includes(q),
    );
  return items;
}
function renderStories() {
  const grid = $("#story-grid");
  if (!grid) return;
  const articles = getFilteredArticles();
  if (!articles.length) {
    if (state.loading) {
      grid.innerHTML = Array.from(
        { length: 4 },
        (_, i) =>
          `<div class="story-card" style="height:250px;opacity:.45;animation-delay:${i * 70}ms"><div style="height:130px;background:var(--accent-soft)"></div><div style="padding:16px"><div style="height:6px;width:45%;background:var(--line-strong);border-radius:9px"></div><div style="height:12px;width:87%;background:var(--line-strong);border-radius:9px;margin:15px 0"></div><div style="height:8px;width:70%;background:var(--line);border-radius:9px"></div></div></div>`,
      ).join("");
    } else if (state.articles.length || state.search) {
      showEmptyState(t("noResults"), t("noResultsBody"));
    }
    return;
  }
  grid.innerHTML = articles
    .slice(0, state.page * 10)
    .map(storyCard)
    .join("");
  $$(".save-story", grid).forEach((button) =>
    button.addEventListener("click", () => toggleSaved(button.dataset.saveId)),
  );
  const more = $("#load-more");
  more.hidden = articles.length <= state.page * 10;
  $("#load-more-note").textContent =
    state.language === "hi"
      ? `${articles.length} खबरें उपलब्ध`
      : `${articles.length} ${articles.length === 1 ? t("story") : t("stories")} available`;
}
function renderOfficial() {
  const root = $("#official-list");
  if (!root) return;
  const items = state.official.slice(0, 5);
  if (!items.length) {
    root.innerHTML = `<div class="official-empty"><span class="official-empty-icon">↗</span><div><b>${esc(t("officialEmptyTitle"))}</b><small>${esc(t("officialEmptyBody"))}</small></div></div>`;
    return;
  }
  root.innerHTML = items
    .map(
      (a) =>
        `<div class="official-item"><div><a href="${esc(a.url)}" target="_blank" rel="noopener noreferrer">${esc(a.title)}</a><small>${esc(a.sourceName || "Press Information Bureau")} · ${esc(timeAgo(a.publishedAt) || t("published"))}</small></div><span class="official-tag">PIB</span></div>`,
    )
    .join("");
}
function updateTicker() {
  const titles = [...state.articles.slice(0, 7), ...state.official.slice(0, 4)]
    .map((a) => esc(a.title))
    .filter(Boolean);
  const track = $("#ticker-track");
  if (!titles.length) return;
  const line = titles
    .map((x) => `<span>${x}</span><span class="ticker-dot">◆</span>`)
    .join("");
  track.innerHTML = line + line;
}
function toggleSaved(id) {
  const a =
    [...state.articles, ...state.official].find((x) => articleId(x) === id) ||
    getSaved().find((x) => articleId(x) === id);
  if (!a) return;
  let saved = getSaved();
  const exists = saved.some((x) => articleId(x) === id);
  saved = exists
    ? saved.filter((x) => articleId(x) !== id)
    : [{ ...a }, ...saved].slice(0, 150);
  setSaved(saved);
  renderStories();
  renderSaved();
  showToast(exists ? t("removedToast") : t("savedToast"));
}
function renderSaved() {
  const saved = getSaved();
  $("#saved-count").textContent = saved.length;
  const root = $("#saved-list");
  if (!saved.length) {
    root.innerHTML = `<p class="empty-small">${esc(t("savedEmpty"))}</p>`;
    return;
  }
  root.innerHTML = saved
    .slice(0, 15)
    .map(
      (a) =>
        `<div class="saved-row"><div style="flex:1;min-width:0"><a href="${esc(safeUrl(a.url))}" target="_blank" rel="noopener noreferrer">${esc(a.title)}</a><small>${esc(a.sourceName || "News source")}</small></div><button data-remove-saved="${esc(articleId(a))}" aria-label="${esc(t("unsaveStory"))}">×</button></div>`,
    )
    .join("");
  $$("[data-remove-saved]", root).forEach((b) =>
    b.addEventListener("click", () => toggleSaved(b.dataset.removeSaved)),
  );
}
function renderPreviewCards() {
  const grid = $("#story-grid");
  if (!grid) return;
  const cards = $$(".sample-card", grid);
  let matches = 0;
  const q = state.search.toLowerCase();
  cards.forEach((card) => {
    const cats = (card.dataset.previewCategory || "top").split(/\s+/);
    const categoryMatch =
      state.category === "top" || cats.includes(state.category);
    const searchMatch = !q || card.textContent.toLowerCase().includes(q);
    card.hidden = !(categoryMatch && searchMatch);
    if (!card.hidden) matches++;
  });
  let empty = $("#preview-empty");
  if (!empty) {
    empty = document.createElement("div");
    empty.id = "preview-empty";
    empty.className = "empty-state";
    empty.innerHTML = `<div class="empty-mark">✳</div><h3>${esc(t("noResults"))}</h3><p>${esc(t("workerNeeded"))}</p>`;
    grid.appendChild(empty);
  }
  empty.hidden = matches > 0;
  const note = $("#load-more-note");
  if (note)
    note.textContent =
      state.category === "top" && !state.search
        ? t("previewNote")
        : t("workerNeeded");
  $("#load-more").hidden = true;
}
function goCategory(category, clearSearch = false) {
  state.category = CATEGORIES.includes(category) ? category : "top";
  state.page = 1;
  if (clearSearch) {
    state.search = "";
    $("#news-search").value = "";
    $("#clear-search").hidden = true;
  }
  setCategoryHeading();
  if (API_BASE) loadStories();
  else renderPreviewCards();
  $("#latest").scrollIntoView({
    behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth",
    block: "start",
  });
}
let searchTimer;
function onSearch() {
  state.search = $("#news-search").value.trim();
  $("#clear-search").hidden = !state.search;
  state.page = 1;
  clearTimeout(searchTimer);
  if (API_BASE) {
    searchTimer = setTimeout(() => loadStories(true), 350);
  } else {
    renderPreviewCards();
  }
}
function setupEvents() {
  $("#theme-toggle").addEventListener("click", () => {
    state.theme =
      state.theme === "auto"
        ? "light"
        : state.theme === "light"
          ? "dark"
          : "auto";
    localStorage.setItem(THEME_KEY, state.theme);
    applyTheme();
  });
  $("#language-toggle").addEventListener("click", () => {
    state.language = state.language === "en" ? "hi" : "en";
    localStorage.setItem(LANG_KEY, state.language);
    applyLanguage();
    showToast(t("languageChanged"));
    if (API_BASE) loadStories(true);
  });
  $("#mobile-menu-button").addEventListener("click", () => {
    const nav = $("#mobile-nav");
    const open = nav.hidden;
    nav.hidden = !open;
    $("#mobile-menu-button").setAttribute("aria-expanded", String(open));
  });
  $$("[data-category]").forEach((b) =>
    b.addEventListener("click", () => goCategory(b.dataset.category, true)),
  );
  $$("[data-cat-shortcut]").forEach((a) =>
    a.addEventListener("click", () => {
      goCategory(a.dataset.catShortcut, true);
      $("#mobile-nav").hidden = true;
    }),
  );
  $("#news-search").addEventListener("input", onSearch);
  $("#search-open").addEventListener("click", () => {
    $("#news-search").focus();
    $("#latest").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  $("#clear-search").addEventListener("click", () => {
    $("#news-search").value = "";
    onSearch();
    $("#news-search").focus();
  });
  $("#refresh-button").addEventListener("click", () => {
    if (API_BASE) loadStories(true);
    else {
      showToast(t("workerNeeded"));
      updateSourceStatus({ error: "worker-missing" });
    }
  });
  $("#dismiss-notice").addEventListener(
    "click",
    () => ($("#feed-notice").hidden = true),
  );
  $("#load-more").addEventListener("click", () => {
    state.page++;
    renderStories();
  });
  $("#filter-button").addEventListener("click", () => goCategory("top", true));
  $("#show-saved").addEventListener("click", () => {
    $("#saved-panel").hidden = !$("#saved-panel").hidden;
    state.showSaved = !$("#saved-panel").hidden;
    renderSaved();
    if (state.showSaved)
      $("#saved-panel").scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
  });
  $("#close-saved").addEventListener("click", () => {
    $("#saved-panel").hidden = true;
    state.showSaved = false;
  });
  $$("[data-topic]").forEach((b) =>
    b.addEventListener("click", () => {
      $("#news-search").value = b.dataset.topic.replace(/^#\s*/, "");
      state.search = $("#news-search").value;
      $("#clear-search").hidden = false;
      state.page = 1;
      if (API_BASE) loadStories(true);
      else onSearch();
      $("#latest").scrollIntoView({ behavior: "smooth" });
    }),
  );
  $("#quiz-button").addEventListener("click", () => {
    $("#quiz-result").textContent = "";
    $$("#quiz-options button").forEach((b) =>
      b.classList.remove("correct-answer", "wrong-answer"),
    );
    const d = $("#quiz-dialog");
    if (d.showModal) d.showModal();
    else showToast(t("quizNote"));
  });
  $$("#quiz-options button").forEach((b) =>
    b.addEventListener("click", () => {
      $$("#quiz-options button").forEach((x) =>
        x.classList.remove("correct-answer", "wrong-answer"),
      );
      b.classList.add(
        b.dataset.answer === "correct" ? "correct-answer" : "wrong-answer",
      );
      $("#quiz-result").textContent = t(
        b.dataset.answer === "correct" ? "quizRight" : "quizWrong",
      );
    }),
  );
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      $("#news-search").focus();
    }
    if (e.key === "Escape") {
      $("#mobile-nav").hidden = true;
    }
  });
}
function init() {
  $("#footer-year").textContent = new Date().getFullYear();
  $("#today-label").textContent =
    state.language === "hi" ? "भारत संस्करण" : "India edition";
  $("#intro-date").textContent = localDate();
  setSaved(getSaved());
  applyTheme();
  applyLanguage();
  setupEvents();
  renderSaved();
  if (API_BASE) loadStories();
  else {
    updateSourceStatus({ error: "worker-missing" });
    $("#feed-notice").hidden = false;
    $("#feed-notice-text").textContent = t("workerNeeded");
  }
}
init();
