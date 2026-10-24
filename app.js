/* NaradNow frontend. Configure API_BASE to your deployed Cloudflare Worker endpoint. */
const API_BASE = "https://naradnow-api.notesfriendair1.workers.dev/api/news";
const CACHE_KEY = "naradnow:cache:v7";
const REVISED_KEY = "naradnow:revised:v1";
const SAVED_KEY = "naradnow:saved:v1";
const THEME_KEY = "naradnow:theme:v1";
const LANG_KEY = "naradnow:language:v1";
const CATEGORIES = ["top", "politics", "education", "health", "finance", "business", "science", "technology", "environment", "sports", "world", "government"];
const WORDS = {
  en: {dailyBrief:"THE DAILY BRIEF",brandTagline:"India, in the know.",navHome:"Home",navIndia:"India",navWorld:"World",navBusiness:"Business",navOfficial:"Official desk",independentDesk:"YOUR INDEPENDENT NEWS DESK",heroLine1:"India, in the",heroLine2:"know.",heroDescription:"A calmer way to catch up on what matters — from national decisions to the ideas shaping tomorrow.",sourceFirst:"Sources first. Noise less.",newsPulse:"NEWS PULSE",explore:"EXPLORE",catForYou:"For you",catPolitics:"Politics",catEducation:"Education",catHealth:"Health",catFinance:"Finance",catBusiness:"Business",catScience:"Science",catTechnology:"Technology",catEnvironment:"Environment",catSports:"Sports",catWorld:"World",catGovernment:"Govt. schemes",officialCardTitle:"Read it at the source.",officialCardBody:"Government updates, directly from PIB.",viewOfficial:"View official desk ↗",editorialNote:"Headlines link to their original publishers.",latestBrief:"LATEST BRIEFING",topStories:"Top stories",officialLabel:"PRIMARY SOURCES",officialHeading:"The official desk",pibFeedLink:"Visit PIB ↗",officialDescription:"Government press releases are shown separately so readers can distinguish official announcements from newsroom coverage.",dailyDesk:"THE DAILY DESK",dailyDigestTitle:"A little more context.<br>Every day.",dailyDigestBody:"Build your own briefing across the topics you follow. Your saved stories stay on this device.",savedStories:"Saved stories",privateNote:"Saved locally. No account needed.",savedTitle:"Your reading list",popularTopics:"Popular topics",topicNote:"Tap a topic to search the feed.",sourceHealth:"",statusNote:"",examCorner:"FOR THE CURIOUS",examTitle:"Know more than the headline.",examBody:"Explore UPSC/SSC study topics, mark stories for revision, take the daily quiz, and export your reading list.",whatsNewKicker:"PRODUCT UPDATE · 24 OCT 2026",whatsNewTitle:"What’s new in NaradNow",whatsNewLead:"A quieter pointer, clearer story actions, and easier daily reading.",whatsNewCursor:"A clean high-contrast pointer that stays out of your way.",whatsNewReader:"Open a story summary, save it locally, or continue to the original publisher.",whatsNewQuiz:"Try a three-question briefing check based on real headlines and publisher labels.",whatsNewThemes:"Dark Forest, Warm Paper and Auto themes, with easier reading on phones and tablets.",whatsNewSources:"Official government announcements are clearly marked apart from newsroom coverage.",whatsNewExam:"UPSC/SSC study topics, revision prompts, and a way to mark stories for review.",whatsNewExport:"Save stories for later, export your reading list, and continue exploring more headlines.",quizPreview:"Take the daily quiz",previewNote:"Preview cards are illustrative, not current news.",closingKicker:"A MORE THOUGHTFUL NEWS ROUTINE",closingTitle:"Stay curious. Stay informed.",backTop:"Back to top ↑",footerLine:"Independent daily reading for India. Headlines remain the property of their original publishers.",quizLabel:"DAILY BRIEFING CHECK",quizTitle:"A sample current-affairs quiz.",quizNote:"Three questions based on real headlines and source labels in your current briefing. Open original reports for facts and context.",searchPlaceholder:"Search headlines…",noResults:"No stories found",noResultsBody:"Try a different search or switch to another category.",retry:"Try again",loading:"Refreshing today’s briefing…",noLive:"No recent headlines are available",notConnected:"Temporarily unavailable",waitingWorker:"More headlines are temporarily unavailable",connected:"Connected",pibLoaded:"Official feed loaded",usingCache:"Showing cached stories",loadError:"Today’s briefing is temporarily unavailable",apiNeedsKey:"Temporarily unavailable",pibOnly:"Some official announcements are available; more headlines may appear later.",workerNeeded:"Today’s headlines are temporarily unavailable. Please try again shortly.",lastUpdated:"Updated",story:"story",stories:"stories",openStory:"Open original story",saveStory:"Save story",unsaveStory:"Remove saved story",published:"Published",sourceOfficial:"Official source",newsdataOK:"Headlines updated",pibOK:"Official announcements updated",apiUnavailable:"Temporarily unavailable",savedEmpty:"No saved stories yet.",searchHint:"Search headlines or topics",themeAuto:"Auto",themeLight:"Warm Paper",themeDark:"Dark Forest",themeAutoTitle:"Theme mode: automatic",themeLightTitle:"Theme: Warm Paper",themeDarkTitle:"Theme: Dark Forest",languageChanged:"Language changed",savedToast:"Story saved to your reading list",removedToast:"Removed from your reading list",feedsRefreshed:"Feeds refreshed",quizRight:"Correct — the Reserve Bank of India is the country's central bank.",quizWrong:"Not quite. The Reserve Bank of India (RBI) is India's central bank.",categoryTop:"Top stories",categoryFinance:"Finance & economy",categoryGovernment:"Government updates",regionKicker:"EXPLORE INDIA",regionTitle:"Cities and states in the news",regionLead:"Open to see which places are mentioned in the headlines currently loaded.",regionCaption:"Counts reflect mentions in loaded headlines, not a ranking of importance.",regionCities:"Top cities",regionStates:"Top states",regionFootnote:"Select a place to search the current-affairs feed for matching headlines.",regionEmpty:"No city or state mentions were found in this batch yet. Refresh or load more headlines.",regionMention:"mentions",regionMentionOne:"mention",regionSearch:"Searching headlines mentioning",officialEmptyTitle:"Official releases will appear here",officialEmptyBody:"Official government updates will appear here when available."},
  hi: {dailyBrief:"आज की मुख्य खबरें",brandTagline:"देश-दुनिया की खबर, साफ़-साफ़।",navHome:"होम",navIndia:"भारत",navWorld:"दुनिया",navBusiness:"कारोबार",navOfficial:"आधिकारिक स्रोत",independentDesk:"आपका स्वतंत्र न्यूज़ डेस्क",heroLine1:"भारत की खबरें,",heroLine2:"समझ के साथ।",heroDescription:"ज़रूरी खबरों से जुड़ें — देश के फैसलों से लेकर कल को आकार देने वाले विचारों तक।",sourceFirst:"स्रोत पहले। शोर कम।",newsPulse:"खबरों की झलक",explore:"श्रेणियाँ",catForYou:"आपके लिए",catPolitics:"राजनीति",catEducation:"शिक्षा",catHealth:"स्वास्थ्य",catFinance:"वित्त",catBusiness:"कारोबार",catScience:"विज्ञान",catTechnology:"तकनीक",catEnvironment:"पर्यावरण",catSports:"खेल",catWorld:"दुनिया",catGovernment:"सरकारी योजनाएँ",officialCardTitle:"खबर को मूल स्रोत पर पढ़ें।",officialCardBody:"सरकार की घोषणाएँ सीधे PIB से।",viewOfficial:"आधिकारिक खबरें ↗",editorialNote:"हर खबर उसके मूल प्रकाशक से जुड़ी है।",latestBrief:"ताज़ा खबरें",topStories:"मुख्य खबरें",officialLabel:"प्राथमिक स्रोत",officialHeading:"आधिकारिक खबरें",pibFeedLink:"PIB वेबसाइट ↗",officialDescription:"सरकारी प्रेस रिलीज़ अलग दिखाई जाती हैं, ताकि आधिकारिक घोषणाओं और मीडिया कवरेज में अंतर स्पष्ट रहे।",dailyDesk:"आपका डेली डेस्क",dailyDigestTitle:"थोड़ा और संदर्भ।<br>हर दिन।",dailyDigestBody:"अपनी पसंद के विषयों का ब्रीफिंग बनाएं। सेव की गई खबरें इसी डिवाइस पर रहेंगी।",savedStories:"सेव की गई खबरें",privateNote:"डिवाइस पर सेव। अकाउंट ज़रूरी नहीं।",savedTitle:"आपकी रीडिंग लिस्ट",popularTopics:"लोकप्रिय विषय",topicNote:"फीड में खोजने के लिए किसी विषय पर टैप करें।",sourceHealth:"",statusNote:"",examCorner:"जिज्ञासु पाठकों के लिए",examTitle:"सिर्फ़ हेडलाइन से आगे जानें।",examBody:"UPSC/SSC अध्ययन मोड में विषय-सुझाव देखें, खबरों को रिविज़न मार्क करें, स्रोत-आधारित क्विज़ लें और अपनी रीडिंग लिस्ट निर्यात करें।",whatsNewKicker:"नया अपडेट · 24 अक्टूबर 2026",whatsNewTitle:"NaradNow में नया क्या है",whatsNewLead:"कम ध्यान भटकाने वाला पॉइंटर, साफ़ स्टोरी एक्शन और आसान न्यूज़ रीडिंग।",whatsNewCursor:"एक साफ़, स्पष्ट पॉइंटर जो पढ़ते समय ध्यान नहीं भटकाता।",whatsNewReader:"खबर का सारांश पढ़ें, उसे डिवाइस पर सेव करें या मूल स्रोत खोलें।",whatsNewQuiz:"असली हेडलाइन और प्रकाशक की जानकारी पर आधारित तीन सवालों की ब्रीफिंग क्विज़ आज़माएँ।",whatsNewThemes:"Dark Forest, Warm Paper और Auto थीम, साथ ही फोन और टैबलेट पर आसान रीडिंग।",whatsNewSources:"सरकारी घोषणाओं को समाचार रिपोर्टों से अलग और स्पष्ट रूप से दिखाया जाता है।",whatsNewExam:"UPSC/SSC अध्ययन-विषय, रिविज़न सुझाव और खबरों को दोबारा पढ़ने के लिए मार्क करने की सुविधा।",whatsNewExport:"खबरें सेव करें, अपनी रीडिंग लिस्ट निर्यात करें और और सुर्खियाँ पढ़ते रहें।",quizPreview:"आज का क्विज़ लें",previewNote:"ये केवल डिज़ाइन के नमूने हैं, ताज़ा खबरें नहीं।",closingKicker:"बेहतर खबर पढ़ने की आदत",closingTitle:"जिज्ञासु रहें। जागरूक रहें।",backTop:"ऊपर जाएँ ↑",footerLine:"भारत के लिए रोज़ाना खबरें पढ़ने का स्वतंत्र अनुभव। हेडलाइन का अधिकार मूल प्रकाशकों के पास है।",quizLabel:"आज की खबरों की जाँच",quizTitle:"करंट अफेयर्स का नमूना क्विज़।",quizNote:"आपकी मौजूदा ब्रीफिंग की असली हेडलाइन और स्रोतों पर आधारित तीन सवाल। तथ्यों और संदर्भ के लिए मूल खबर पढ़ें।",searchPlaceholder:"खबरें खोजें…",noResults:"कोई खबर नहीं मिली",noResultsBody:"अलग शब्द खोजें या दूसरी श्रेणी चुनें।",retry:"फिर कोशिश करें",loading:"आज की खबरें रीफ़्रेश हो रही हैं…",noLive:"अभी नई सुर्खियाँ उपलब्ध नहीं हैं",notConnected:"कनेक्ट नहीं है",waitingWorker:"अभी कुछ और खबरें उपलब्ध नहीं हैं",connected:"कनेक्ट है",pibLoaded:"आधिकारिक फीड लोड हुई",usingCache:"कैश की गई खबरें दिखाई जा रही हैं",loadError:"आज की ब्रीफिंग अभी उपलब्ध नहीं है",apiNeedsKey:"अभी उपलब्ध नहीं",pibOnly:"कुछ आधिकारिक घोषणाएँ उपलब्ध हैं; बाकी सुर्खियाँ बाद में दिखाई दे सकती हैं।",workerNeeded:"अभी सुर्खियाँ उपलब्ध नहीं हैं। कृपया थोड़ी देर बाद फिर कोशिश करें।",lastUpdated:"अपडेट",story:"खबर",stories:"खबरें",openStory:"मूल खबर खोलें",saveStory:"खबर सेव करें",unsaveStory:"सेव की गई सूची से हटाएँ",published:"प्रकाशित",sourceOfficial:"आधिकारिक स्रोत",newsdataOK:"फीड तैयार",pibOK:"फीड तैयार",apiUnavailable:"अभी उपलब्ध नहीं",savedEmpty:"अभी कोई खबर सेव नहीं है।",searchHint:"हेडलाइन या विषय खोजें",themeAuto:"ऑटो",themeLight:"वार्म पेपर",themeDark:"डार्क फॉरेस्ट",themeAutoTitle:"थीम: ऑटो",themeLightTitle:"थीम: वार्म पेपर",themeDarkTitle:"थीम: डार्क फॉरेस्ट",languageChanged:"भाषा बदल गई",savedToast:"खबर आपकी रीडिंग लिस्ट में सेव हुई",removedToast:"खबर रीडिंग लिस्ट से हटाई गई",feedsRefreshed:"फीड रीफ़्रेश हो गई",quizRight:"सही — भारतीय रिज़र्व बैंक देश का केंद्रीय बैंक है।",quizWrong:"नहीं। भारतीय रिज़र्व बैंक (RBI) भारत का केंद्रीय बैंक है।",categoryTop:"मुख्य खबरें",categoryFinance:"वित्त और अर्थव्यवस्था",categoryGovernment:"सरकारी अपडेट",officialEmptyTitle:"आधिकारिक रिलीज़ यहाँ दिखेंगी",regionKicker:"भारत को जानें",regionTitle:"खबरों में शहर और राज्य",regionLead:"खोलकर देखें कि अभी लोड की गई खबरों में किन जगहों का उल्लेख है।",regionCaption:"गिनती लोड की गई खबरों में उल्लेख पर आधारित है, महत्व की रैंकिंग नहीं।",regionCities:"प्रमुख शहर",regionStates:"प्रमुख राज्य",regionFootnote:"उस जगह से जुड़ी खबरें खोजने के लिए चुनें।",regionEmpty:"इस बैच में अभी किसी शहर या राज्य का उल्लेख नहीं मिला। खबरें रीफ़्रेश करें या और लोड करें।",regionMention:"उल्लेख",regionMentionOne:"उल्लेख",regionSearch:"इनका उल्लेख करने वाली खबरें खोजी जा रही हैं:",officialEmptyBody:"सरकारी घोषणाएँ उपलब्ध होने पर यहाँ दिखाई जाएँगी।"}
};
const CATEGORY_KEYS = {top:"catForYou",politics:"catPolitics",education:"catEducation",health:"catHealth",finance:"catFinance",business:"catBusiness",science:"catScience",technology:"catTechnology",environment:"catEnvironment",sports:"catSports",world:"catWorld",government:"catGovernment"};

// Heuristic exam-prep mapping. These labels are study prompts, not official syllabus determinations.
const EXAM_TAGS = {
  upsc:[
    {name:"Polity",paper:"GS2",angle:"Consider constitutional provisions, federalism, governance and accountability.",pattern:/parliament|supreme court|high court|constitution|election|assembly|governor|cabinet|tribunal|ordinance|bill|act|judiciary|lok sabha|rajya sabha/i},
    {name:"Economy",paper:"GS3",angle:"Look for effects on growth, inflation, fiscal policy, employment and inclusion.",pattern:/rbi|gdp|inflation|budget|gst|bank|trade|tariff|repo|sebi|export|rupee|msme|startup|fiscal|economy|economic|investment/i},
    {name:"International Relations",paper:"GS2",angle:"Identify India's interests, bilateral ties and the role of multilateral forums.",pattern:/united nations|\bun\b|china|pakistan|iran|russia|ukraine|summit|treaty|bilateral|g20|brics|quad|nato|diplom|foreign affairs|geopolit/i},
    {name:"Environment",paper:"GS3",angle:"Review causes, mitigation, conservation, climate commitments and sustainability.",pattern:/climate|forest|pollution|wildlife|emission|monsoon|tiger|biodiversity|wetland|air quality|renewable|conservation|environment/i},
    {name:"Science & Tech",paper:"GS3",angle:"Note the application, agency, indigenisation, ethics and security implications.",pattern:/isro|satellite|\bai\b|artificial intelligence|space|research|vaccine|nasa|quantum|semiconductor|drdo|missile|cyber|technology|scientific/i},
    {name:"Social Development",paper:"GS1/GS2",angle:"Consider welfare design, inclusion, implementation and measurable outcomes.",pattern:/tribal|women|welfare|poverty|rights|nutrition|scheme|education|health|farmer|youth|disaster|social justice|rural|employment/i}
  ],
  ssc:[
    {name:"National Affairs",paper:"GK",angle:"Remember the ministry, state, institution and people named in the report.",pattern:/india|minister|government|state|prime minister|chief minister|cabinet|parliament|national|policy|scheme|yojana/i},
    {name:"Economy & Banking",paper:"GK",angle:"Note the bank, index, rate, budget figure or scheme mentioned.",pattern:/rbi|gdp|inflation|budget|gst|bank|trade|repo|sebi|rupee|sensex|nifty|export|economy|finance/i},
    {name:"Sports",paper:"GK",angle:"Revise the tournament, venue, winner, team and record only when stated by the source.",pattern:/cricket|olympic|medal|tournament|championship|fifa|ipl|hockey|para games|asian games|champion|sports/i},
    {name:"Awards & Appointments",paper:"GK",angle:"Remember the person, post, awarding body and date if confirmed in the source.",pattern:/appointed|appointment|award|honour|honor|prize|chairman|chief|governor|takes charge|elected|awardee/i},
    {name:"Science & Technology",paper:"GK",angle:"Note the mission, agency, innovation or scientific term named in the headline.",pattern:/isro|satellite|space|nasa|\bai\b|drdo|missile|launch|research|vaccine|science|technology|cyber/i},
    {name:"International",paper:"GK",angle:"Identify the country, capital, leader or international organisation named.",pattern:/united nations|\bun\b|china|pakistan|iran|russia|usa|summit|treaty|nato|brics|g20|trump|international|world affairs/i}
  ]
};
function examTagFor(article,track=state.examTrack){const text=`${article.title||""} ${article.description||""}`;return (EXAM_TAGS[track]||EXAM_TAGS.upsc).find(tag=>tag.pattern.test(text))||null;}
function studyLabelFor(article){const tag=examTagFor(article);if(tag)return tag.name;const cat=String(article.category||"top");return cat==="top"?"General current affairs":categoryName(cat);}
function toggleRevised(id){state.revised=state.revised.includes(id)?state.revised.filter(x=>x!==id):[...state.revised,id];try{localStorage.setItem(REVISED_KEY,JSON.stringify(state.revised))}catch{}renderStories();renderExamPrepPanel();showToast(state.revised.includes(id)?"Marked for revision":"Removed revision mark");}

const state = {category:"top",language:localStorage.getItem(LANG_KEY)||"en",theme:(()=>{const saved=localStorage.getItem(THEME_KEY);return saved==="dark"?"forest":saved==="light"?"paper":(["auto","forest","paper"].includes(saved)?saved:"auto")})(),articles:[],official:[],loading:false,loadingMore:false,lastResult:null,search:"",page:1,nextPage:null,showSaved:false,regionTab:"cities",customCursorReady:false,examMode:false,examTrack:localStorage.getItem("naradnow:exam-track:v1")==="ssc"?"ssc":"upsc",examTopic:"all",revised:(()=>{try{return JSON.parse(localStorage.getItem("naradnow:revised:v1")||"[]")}catch{return []}})()};
const $ = (s, root=document) => root.querySelector(s); const $$ = (s, root=document) => [...root.querySelectorAll(s)];
const esc = (v="") => String(v).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
function t(key){return (WORDS[state.language]&&WORDS[state.language][key])||WORDS.en[key]||key;}
function safeUrl(value){try{const u=new URL(value);return ["https:","http:"].includes(u.protocol)?u.href:"#";}catch{return "#";}}
function localDate(date=new Date()){return new Intl.DateTimeFormat(state.language==="hi"?"hi-IN":"en-IN",{weekday:"short",day:"numeric",month:"short",year:"numeric",timeZone:"Asia/Kolkata"}).format(date);}
function timeAgo(value){
  if(!value)return "";
  let raw=String(value).trim();
  // API payloads may use a timezone-less SQL timestamp; interpret it as UTC, not local time.
  if(/^\d{4}-\d{2}-\d{2}[ T]\d{2}:\d{2}(?::\d{2}(?:\.\d+)?)?$/.test(raw))raw=raw.replace(" ","T")+"Z";
  const d=new Date(raw);if(Number.isNaN(d.getTime()))return "";
  const delta=Date.now()-d.getTime();if(delta<0)return "Just now";
  const mins=Math.floor(delta/60000);if(mins<1)return "Just now";if(mins<60)return `${mins}m ago`;
  const hrs=Math.floor(mins/60);if(hrs<24)return `${hrs}h ago`;
  const days=Math.floor(hrs/24);if(days<7)return `${days}d ago`;
  return new Intl.DateTimeFormat(state.language==="hi"?"hi-IN":"en-IN",{day:"numeric",month:"short",timeZone:"Asia/Kolkata"}).format(d);
}
function showToast(message){const el=$("#toast");el.textContent=message;el.classList.add("show");clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>el.classList.remove("show"),2500);}
function applyTheme(){
  document.documentElement.dataset.theme=state.theme;
  const metaTheme=document.querySelector('meta[name="theme-color"]');if(metaTheme){const paper=state.theme==="paper"||(state.theme==="auto"&&matchMedia("(prefers-color-scheme: light)").matches);metaTheme.setAttribute("content",paper?"#F6F3EB":"#0C120E");}
  const label=$("#theme-mode-label");
  const titleKey=state.theme==="auto"?"themeAutoTitle":state.theme==="paper"?"themeLightTitle":"themeDarkTitle";
  label.textContent=state.theme==="auto"?t("themeAuto"):state.theme==="paper"?t("themeLight"):t("themeDark");
  $("#theme-toggle").setAttribute("aria-label",t(titleKey));$("#theme-toggle").title=t(titleKey);
  const icon=$("#theme-icon");
  icon.innerHTML=state.theme==="paper"?'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"':state.theme==="forest"?'<path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.6 8.6 0 1 0 20.5 14.2Z"/>':'<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8m-4-4v4"/>';
}
function applyLanguage(){document.documentElement.lang=state.language==="hi"?"hi":"en";$$('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;const value=t(key);if(value.includes("<br>"))el.innerHTML=value;else el.textContent=value;});$("#language-toggle").textContent=state.language==="en"?"हिंदी":"English";$("#news-search").placeholder=t("searchPlaceholder");$("#news-search").setAttribute("aria-label",t("searchHint"));applyTheme();setCategoryHeading();if(API_BASE)renderStories();else renderPreviewCards();renderOfficial();renderSaved();renderRegionExplorer();}
function getSaved(){try{return JSON.parse(localStorage.getItem(SAVED_KEY)||"[]");}catch{return [];}}
function setSaved(arr){localStorage.setItem(SAVED_KEY,JSON.stringify(arr));$("#saved-count").textContent=arr.length;}
function categoryName(cat){const key=CATEGORY_KEYS[cat];return key?t(key):cat?cat[0].toUpperCase()+cat.slice(1):"News";}
function setCategoryHeading(){const heading=$("#feed-heading");let title=state.category==="top"?t("categoryTop"):state.category==="finance"?t("categoryFinance"):state.category==="government"?t("categoryGovernment"):categoryName(state.category);heading.innerHTML=`${esc(title)}<span class="heading-period">.</span>`;$("#feed-kicker").textContent=state.category==="top"?t("latestBrief"):state.language==="hi"?"चुनी हुई श्रेणी":"SELECTED CATEGORY";$$(".category-button").forEach(b=>b.classList.toggle("selected",b.dataset.category===state.category));}
function articleId(a){return a.id||a.url||`${a.title||""}-${a.publishedAt||""}`;}
function isSpamArticle(a){
  const title=String(a.title||"");
  const hay=`${title} ${a.description||""}`;
  const spam=/\b(euromillions|euro\s*millions|lottery|jackpot|horoscope|casino|lotto|gambling|betting tips|lucky numbers|astrology forecast)\b/i.test(hay);
  // Hide obvious entertainment promotions, not legitimate reporting about culture or media.
  const promo=/\b(official music video|music video|lyrics video|full song|new hindi song|latest hindi song|song release|official audio|audio song|movie trailer|official trailer|full episode|celebrity gossip|box office collection)\b/i.test(title)
    || /\|\s*song\s*[-:]/i.test(title)
    || /\b(song|audio)\b/i.test(title) && /\b(ramayana|official|listen|watch|release|lyrics|full|audio)\b/i.test(title);
  return spam||promo;
}
function detectedLanguage(a){const text=`${a.title||""} ${a.description||""}`;if(/[\u0900-\u097F]/.test(text))return "hi";const raw=String(a.language||"").toLowerCase();if(raw==="hi"||raw.includes("hindi"))return "hi";return "en";}
function languageBadge(a){return detectedLanguage(a)==="hi"?"हिंदी":"EN";}
function toneForArticle(a){if(a.official||a.sourceType==="pib")return "official";const c=String(a.category||"").toLowerCase();if(["politics","government","schemes"].includes(c))return "terracotta";if(["finance","business"].includes(c))return "emerald";if(["science","technology","tech"].includes(c))return "cyan";if(c==="environment")return "sage";return "neutral";}
function readMinutes(a){const text=`${a.title||""} ${a.description||""}`;return Math.max(1,Math.ceil(text.split(/\s+/).filter(Boolean).length/220));}
function normalizeArticle(a){return {id:String(a.id||a.article_id||a.link||a.url||""),title:String(a.title||"Untitled story"),description:String(a.description||a.summary||""),url:safeUrl(a.url||a.link||"#"),image:a.image||a.image_url||"",publishedAt:a.publishedAt||a.pubDate||a.published_at||"",sourceName:a.sourceName||a.source_name||a.source||"News source",sourceType:a.sourceType||a.source_type||"newsdata",category:a.category||"top",language:a.language||state.language,official:!!(a.official||a.sourceType==="pib"||a.source_type==="pib")};}
function allFallback(){return [];}
function readCache(){try{const stored=localStorage.getItem(CACHE_KEY);if(stored)return JSON.parse(stored)||{};return JSON.parse(sessionStorage.getItem(CACHE_KEY)||"{}");}catch{return {};}}
function cacheKey(){return `${state.category}|${state.language}|${state.search.toLowerCase()}`;}
function dedupeArticles(list){const urls=new Set(),titles=new Set();return list.filter(a=>{const url=String(a.url||"").toLowerCase().replace(/[?#].*$/g,"");const title=String(a.title||"").normalize("NFKD").toLowerCase().replace(/[^\p{L}\p{N}]+/gu," ").trim();if((url&&url!=="#"&&urls.has(url))||(title&&titles.has(title)))return false;if(url&&url!=="#")urls.add(url);if(title)titles.add(title);return true;});}
async function loadStories(force=false,append=false){if(state.loading)return;state.loading=true;state.loadingMore=append;setBusy(true);const key=cacheKey();if(!append)state.nextPage=null;const oldCache=readCache();if(!append&&!force&&oldCache[key]&&Date.now()-oldCache[key].time<10*60*1000){adoptResult(oldCache[key].data,true,false);state.loading=false;setBusy(false);return;}if(!API_BASE){state.loading=false;setBusy(false);$("#feed-notice").hidden=true;showEmptyState(t("loadError"),t("workerNeeded"),true);return;}
  try{const url=new URL(API_BASE);url.searchParams.set("category",state.category);url.searchParams.set("language",state.language);if(state.search)url.searchParams.set("search",state.search);url.searchParams.set("limit","18");if(append&&state.nextPage)url.searchParams.set("page",state.nextPage);const response=await fetch(url.toString(),{headers:{Accept:"application/json"},cache:"no-store"});if(!response.ok)throw new Error(`Feed request failed (${response.status})`);const data=await response.json();if(!data||data.ok===false)throw new Error(data?.error||"Unexpected feed response");adoptResult(data,false,append);if(!append){const c=readCache();c[key]={time:Date.now(),data};try{localStorage.setItem(CACHE_KEY,JSON.stringify(c));}catch(storageError){try{sessionStorage.setItem(CACHE_KEY,JSON.stringify(c));}catch(_){/* storage quota/private mode: keep the live page usable */}}}}catch(err){console.warn("NaradNow feed error:",err);if(append){showToast(state.language==="hi"?"और खबरें लोड नहीं हो सकीं। फिर कोशिश करें।":"Could not load more stories. Try again.");}else{const saved=readCache();const fallback=saved[key]||Object.values(saved).filter(x=>x&&x.data).sort((a,b)=>(b.time||0)-(a.time||0))[0];if(fallback&&fallback.data&&(fallback.data.articles?.length||fallback.data.official?.length)){adoptResult(fallback.data,true,false);$("#feed-notice").hidden=false;$("#feed-notice-text").textContent=state.language==="hi"?"कनेक्शन उपलब्ध नहीं है। हाल में देखी गई खबरें दिखाई जा रही हैं।":"You may be offline. Showing recently saved headlines.";updateSourceStatus({newsdata:false,pib:false,error:"offline-cache"});}else{$("#feed-notice").hidden=true;updateSourceStatus({newsdata:false,pib:false,error:"request-failed"});showEmptyState(t("loadError"),state.language==="hi"?"कृपया थोड़ी देर बाद फिर कोशिश करें।":"Please try again in a moment.",true);}}}finally{state.loading=false;state.loadingMore=false;setBusy(false);if(append)renderStories();}}
function setBusy(busy){const btn=$("#refresh-button");btn.classList.toggle("spinning",busy);btn.disabled=busy;btn.setAttribute("aria-busy",String(busy));const more=$("#load-more");if(more)more.disabled=busy;if(busy){$("#feed-notice").hidden=false;$("#feed-notice-text").textContent=t("loading");}}
function adoptResult(data,fromCache,append=false){state.lastResult=data;const incoming=(data.articles||[]).map(normalizeArticle);const incomingOfficial=(data.official||[]).map(a=>({...normalizeArticle({...a,sourceType:"pib",official:true}),official:true}));state.articles=append?dedupeArticles([...state.articles,...incoming]):dedupeArticles(incoming);state.official=append?dedupeArticles([...state.official,...incomingOfficial]):dedupeArticles(incomingOfficial);state.nextPage=data.nextPage||data.next_page||null;$("#last-sync").textContent=`${t("lastUpdated")} ${new Intl.DateTimeFormat(state.language==="hi"?"hi-IN":"en-IN",{hour:"2-digit",minute:"2-digit",timeZone:"Asia/Kolkata"}).format(new Date())}`;$("#today-label").textContent=state.language==="hi"?"भारत संस्करण":"India edition";$("#intro-date").textContent=localDate();$("#feed-notice").hidden=!!(state.articles.length||state.official.length);if(!state.articles.length&&!state.official.length){$("#feed-notice").hidden=false;$("#feed-notice-text").textContent=state.language==="hi"?"अभी कोई सुर्खी उपलब्ध नहीं है। थोड़ी देर बाद फिर कोशिश करें।":"No headlines are available right now. Please try again shortly.";showEmptyState(t("noLive"),t("noResultsBody"),true);}else{$("#feed-notice").hidden=true;renderStories();renderOfficial();updateTicker();}
  renderRegionExplorer();
  const statuses=data.sources||{};updateSourceStatus({newsdata:!!(statuses.newsdata?.ok||statuses.newsdata===true||data.newsdataOk),pib:!!(statuses.pib?.ok||statuses.pib===true||data.pibOk),note:fromCache?t("usingCache"):data.message,error:data.error});
}
function updateSourceStatus(){ /* Connection diagnostics are intentionally kept out of the reader-facing interface. */ }
function showEmptyState(title,body,showRetry=false){$("#story-grid").innerHTML=`<div class="empty-state"><div class="empty-mark">✳</div><h3>${esc(title)}</h3><p>${esc(body)}</p>${showRetry?`<button id="empty-retry">${esc(t("retry"))}</button>`:""}</div>`;const retry=$("#empty-retry");if(retry)retry.addEventListener("click",()=>loadStories(true));}
function imageClass(cat){return ({education:"image-education",finance:"image-economy",business:"image-economy",science:"image-science",technology:"image-science",health:"image-science",sports:"image-editorial",world:"image-editorial",politics:"image-editorial",government:"image-editorial",environment:"image-science"})[cat]||"image-editorial";}
function storyImage(a,featured=false){
  const category=String(a.category||"top").toLowerCase(),tone=toneForArticle(a);
  const label=a.official?"OFFICIAL PIB":category==="top"||category==="general"?"NEWS":categoryName(category).toUpperCase();
  const visual=a.image?`<img loading="lazy" alt="" src="${esc(safeUrl(a.image))}" onerror="this.remove()">`:category==="education"?'<div class="book-stack"><i></i><i></i><i></i></div>':category==="finance"||category==="business"?'<div class="econ-bars"><i></i><i></i><i></i><i></i><i></i><i></i></div>':category==="science"||category==="technology"||category==="health"?'<div class="science-orbit"><i></i><i></i><i></i><b></b></div>':'<div class="image-shape shape-sun"></div><div class="image-shape shape-arch"></div>';
  return `<div class="story-image ${imageClass(category)}">${visual}<span class="image-flag" data-tone="${tone}">${esc(label)}</span></div>`;
}
function storyCard(a,index){
  const saved=getSaved().some(s=>articleId(s)===articleId(a)),id=articleId(a),time=timeAgo(a.publishedAt)||t("published");
  const description=(a.description||"").replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim();
  const shortDescription=description.length>260?description.slice(0,257)+"…":description;
  const roleClass=index===0?"story-featured":index===1||index===2?"story-secondary":"story-horizontal";
  const publisher=String(a.sourceName||"News source"),examTag=state.examMode?examTagFor(a):null,revised=state.revised.includes(id);
  return `<article class="story-card ${roleClass} ${state.examMode?"exam-tagged-story":""}" data-story-id="${esc(id)}" tabindex="0" aria-label="Quick preview: ${esc(a.title)}" style="--story-index:${Math.min(index,10)}">
    ${storyImage(a,index===0)}
    <div class="story-content">
      <div class="story-meta"><span class="publisher-inline" title="${esc(publisher)}">${esc(publisher)}</span><span class="meta-dot"></span><time>${esc(time)}</time><span class="meta-dot"></span><span class="read-estimate">~${readMinutes(a)} min read</span><span class="language-tag" data-language="${detectedLanguage(a)}">${languageBadge(a)}</span></div>
      <h3>${esc(a.title)}</h3>${shortDescription?`<p>${esc(shortDescription)}</p>`:""}
      ${examTag?`<div class="exam-angle"><span class="exam-angle-tag">${esc(examTag.paper)} · ${esc(examTag.name)}</span><p>${esc(examTag.angle)}</p></div>`:""}
      <div class="story-footer"><span class="story-source-note">${a.official?"Official government release":"Source-linked coverage"}</span><span class="story-actions">${state.examMode?`<button class="mark-revised ${revised?"is-revised":""}" data-revised-id="${esc(id)}" aria-pressed="${revised}" title="Mark this story as revised">${revised?"✓ Revised":"Mark revised"}</button>`:""}<button class="save-story ${saved?"is-saved":""}" data-save-id="${esc(id)}" aria-label="${esc(saved?t("unsaveStory"):t("saveStory"))}" title="${esc(saved?t("unsaveStory"):t("saveStory"))}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V21l-6-4-6 4V4.5Z"/></svg></button><button class="open-quick-preview" data-open-id="${esc(id)}" aria-label="Quick preview" title="Quick preview">↗</button></span></div>
    </div></article>`;
}
function getBaseFilteredArticles(){
  const q=state.search.trim().toLowerCase();let items=state.articles.filter(a=>!a.official&&a.sourceType!=="pib"&&!isSpamArticle(a));
  items=dedupeArticles(items);
  if(q)items=items.filter(a=>`${a.title} ${a.description} ${a.sourceName}`.toLowerCase().includes(q));
  return items;
}
function getFilteredArticles(){
  let items=getBaseFilteredArticles();
  if(state.examMode){items=items.filter(a=>{const tag=examTagFor(a);return tag&&(state.examTopic==="all"||tag.name===state.examTopic);});}
  return items;
}
function renderExamPrepPanel(){
  const panel=$("#exam-prep-panel"),toggle=$("#exam-mode-toggle");if(!panel||!toggle)return;
  panel.hidden=!state.examMode;toggle.classList.toggle("is-active",state.examMode);toggle.setAttribute("aria-expanded",String(state.examMode));
  const hi=state.language==="hi";toggle.innerHTML=`${state.examMode?(hi?"परीक्षा मोड चालू":"Exam prep on"):(hi?"परीक्षा तैयारी":"Exam prep")} <span>${state.examMode?"✓":"↗"}</span>`;
  $("#exam-prep-title").textContent=hi?"हेडलाइन्स को रिविज़न नोट्स में बदलें":"Turn headlines into revision notes";
  $("#exam-prep-subtitle").textContent=hi?"लोड की गई खबरों को UPSC/SSC अध्ययन-विषयों में छाँटें। मूल लेख और आधिकारिक पाठ्यक्रम से मिलान करें।":"Explore current stories by broad UPSC/SSC study topics. Verify the details against the original report and official syllabus.";
  $("#exam-prep-close").textContent=hi?"बंद करें ×":"Close ×";
  $$('[data-exam-track]').forEach(b=>{const active=b.dataset.examTrack===state.examTrack;b.classList.toggle("is-active",active);b.setAttribute("aria-pressed",String(active));b.textContent=b.dataset.examTrack==="upsc"?(hi?"UPSC / सिविल सेवा":"UPSC / CSE"):(hi?"SSC / सामान्य जागरूकता":"SSC / General Awareness");});
  const tags=EXAM_TAGS[state.examTrack]||EXAM_TAGS.upsc;const allLabel=hi?"सभी विषय":"All topics";$("#exam-topic-chips").innerHTML=[{name:"all",label:allLabel},...tags.map(tag=>({name:tag.name,label:tag.name}))].map(item=>`<button type="button" class="exam-topic-chip ${state.examTopic===item.name?"is-active":""}" data-exam-topic="${esc(item.name)}" aria-pressed="${state.examTopic===item.name}">${esc(item.label)}</button>`).join("");
  const relevant=getBaseFilteredArticles().filter(a=>examTagFor(a,state.examTrack)&&(state.examTopic==="all"||examTagFor(a,state.examTrack)?.name===state.examTopic));const revised=relevant.filter(a=>state.revised.includes(articleId(a))).length;
  $("#exam-prep-count").textContent=hi?`${relevant.length} खबरें मिलान करती हैं · ${revised} रिविज़न मार्क की गईं`:`${relevant.length} matching stories · ${revised} marked revised`;
  const caveat=panel.querySelector(".exam-prep-caveat");if(caveat)caveat.textContent=hi?"विषय-सुझाव शुरुआती मार्गदर्शन हैं; मूल खबर और आधिकारिक पाठ्यक्रम से मिलान करें।":"Keyword matches are suggestions, not official syllabus classifications.";
}
function renderStories(){
  const grid=$("#story-grid");if(!grid)return;const articles=getFilteredArticles();renderExamPrepPanel();
  if(!articles.length){if(state.loading){grid.innerHTML=Array.from({length:4},(_,i)=>`<div class="story-card story-skeleton" style="--story-index:${i}"><div class="skeleton-image"></div><div class="skeleton-copy"><i></i><i></i><i></i></div></div>`).join("");}
    else if(state.articles.length||state.search){showEmptyState(state.examMode?(state.language==="hi"?"चुने हुए विषय से मेल खाती खबर नहीं मिली":"No matching exam-topic stories") : t("noResults"),state.examMode?(state.language==="hi"?"दूसरा UPSC/SSC ट्रैक या विषय चुनें, या सामान्य खबरों पर लौटें।":"Try another UPSC/SSC track or topic, or switch back to the main news feed."):t("noResultsBody"));}const more=$("#load-more");if(more)more.hidden=true;return;}
  grid.innerHTML=articles.slice(0,state.page*10).map(storyCard).join("");
  const more=$("#load-more");more.hidden=!(articles.length>state.page*10||state.nextPage);more.disabled=state.loading;
  $("#load-more").textContent=state.loading&&state.nextPage?(state.language==="hi"?"और खबरें लोड हो रही हैं…":"Loading more stories…"):(state.language==="hi"?"और खबरें लोड करें ↓":"Load more stories ↓");
  $("#load-more-note").textContent=state.language==="hi"?`${articles.length} खबरें उपलब्ध${state.nextPage?" · अगला पेज उपलब्ध":""}`:`${articles.length} ${articles.length===1?t("story"):t("stories")} available${state.nextPage?" · more available":""}`;
  renderHeroCarousel();
}
async function loadMoreStories(){const items=getFilteredArticles();if(items.length>state.page*10){state.page++;renderStories();return;}if(state.nextPage){state.page++;await loadStories(false,true);return;}showToast(state.language==="hi"?"अभी और खबरें उपलब्ध नहीं हैं।":"No additional stories are available right now.");}

const INDIA_CITIES = [
  {name:"Delhi",aliases:["Delhi","New Delhi","दिल्ली","नई दिल्ली"]},
  {name:"Mumbai",aliases:["Mumbai","Bombay","मुंबई"]},
  {name:"Bengaluru",aliases:["Bengaluru","Bangalore","बेंगलुरु","बैंगलोर"]},
  {name:"Chennai",aliases:["Chennai","Madras","चेन्नई"]},
  {name:"Kolkata",aliases:["Kolkata","Calcutta","कोलकाता"]},
  {name:"Hyderabad",aliases:["Hyderabad","हैदराबाद"]},
  {name:"Pune",aliases:["Pune","पुणे"]},
  {name:"Ahmedabad",aliases:["Ahmedabad","अहमदाबाद"]},
  {name:"Jaipur",aliases:["Jaipur","जयपुर"]},
  {name:"Lucknow",aliases:["Lucknow","लखनऊ"]},
  {name:"Patna",aliases:["Patna","पटना"]},
  {name:"Chandigarh",aliases:["Chandigarh","चंडीगढ़"]},
  {name:"Guwahati",aliases:["Guwahati","गुवाहाटी"]},
  {name:"Bhopal",aliases:["Bhopal","भोपाल"]},
  {name:"Ranchi",aliases:["Ranchi","रांची"]},
  {name:"Dehradun",aliases:["Dehradun","देहरादून"]},
  {name:"Srinagar",aliases:["Srinagar","श्रीनगर"]},
  {name:"Kochi",aliases:["Kochi","Cochin","कोच्चि"]},
  {name:"Gurugram",aliases:["Gurugram","Gurgaon","गुरुग्राम"]},
  {name:"Noida",aliases:["Noida","नोएडा"]},
  {name:"Amritsar",aliases:["Amritsar","अमृतसर"]},
  {name:"Visakhapatnam",aliases:["Visakhapatnam","Vizag","विशाखापत्तनम"]},
  {name:"Thiruvananthapuram",aliases:["Thiruvananthapuram","Trivandrum","तिरुवनंतपुरम"]},
  {name:"Indore",aliases:["Indore","इंदौर"]}
];
const INDIA_STATES = [
  {name:"Andhra Pradesh",aliases:["Andhra Pradesh","आंध्र प्रदेश"]},
  {name:"Arunachal Pradesh",aliases:["Arunachal Pradesh","अरुणाचल प्रदेश"]},
  {name:"Assam",aliases:["Assam","असम"]},
  {name:"Bihar",aliases:["Bihar","बिहार"]},
  {name:"Chhattisgarh",aliases:["Chhattisgarh","छत्तीसगढ़","छत्तीसगढ"]},
  {name:"Goa",aliases:["Goa","गोवा"]},
  {name:"Gujarat",aliases:["Gujarat","गुजरात"]},
  {name:"Haryana",aliases:["Haryana","हरियाणा"]},
  {name:"Himachal Pradesh",aliases:["Himachal Pradesh","हिमाचल प्रदेश"]},
  {name:"Jharkhand",aliases:["Jharkhand","झारखंड"]},
  {name:"Karnataka",aliases:["Karnataka","कर्नाटक"]},
  {name:"Kerala",aliases:["Kerala","केरल"]},
  {name:"Madhya Pradesh",aliases:["Madhya Pradesh","मध्य प्रदेश"]},
  {name:"Maharashtra",aliases:["Maharashtra","महाराष्ट्र"]},
  {name:"Manipur",aliases:["Manipur","मणिपुर"]},
  {name:"Meghalaya",aliases:["Meghalaya","मेघालय"]},
  {name:"Mizoram",aliases:["Mizoram","मिजोरम"]},
  {name:"Nagaland",aliases:["Nagaland","नागालैंड"]},
  {name:"Odisha",aliases:["Odisha","Orissa","ओडिशा"]},
  {name:"Punjab",aliases:["Punjab","पंजाब"]},
  {name:"Rajasthan",aliases:["Rajasthan","राजस्थान"]},
  {name:"Sikkim",aliases:["Sikkim","सिक्किम"]},
  {name:"Tamil Nadu",aliases:["Tamil Nadu","तमिलनाडु"]},
  {name:"Telangana",aliases:["Telangana","तेलंगाना"]},
  {name:"Tripura",aliases:["Tripura","त्रिपुरा"]},
  {name:"Uttar Pradesh",aliases:["Uttar Pradesh","उत्तर प्रदेश"]},
  {name:"Uttarakhand",aliases:["Uttarakhand","उत्तराखंड"]},
  {name:"West Bengal",aliases:["West Bengal","पश्चिम बंगाल"]},
  {name:"Jammu & Kashmir",aliases:["Jammu and Kashmir","Jammu & Kashmir","Jammu-Kashmir","जम्मू और कश्मीर"]},
  {name:"Ladakh",aliases:["Ladakh","लद्दाख"]},
  {name:"Delhi",aliases:["Delhi","New Delhi","दिल्ली","नई दिल्ली"]},
  {name:"Chandigarh",aliases:["Chandigarh","चंडीगढ़"]},
  {name:"Puducherry",aliases:["Puducherry","Pondicherry","पुडुचेरी"]}
];
function escapeRegex(value){return String(value).replace(/[.*+?^${}()|[\]\\]/g,"\\$&");}
function articleMentionsPlace(article,place){
  const text=`${article.title||""} ${article.description||""}`;
  return place.aliases.some(alias=>{
    const escaped=escapeRegex(alias).replace(/\s+/g,"\\s+");
    try{return new RegExp(`(^|[^\\p{L}\\p{N}])${escaped}($|[^\\p{L}\\p{N}])`,"iu").test(text);}catch{return text.toLowerCase().includes(alias.toLowerCase());}
  });
}
function renderRegionExplorer(){
  const root=$("#region-grid");if(!root)return;
  const all=dedupeArticles([...state.articles,...state.official].filter(a=>!isSpamArticle(a)));
  const hi=state.language==="hi";
  const source=state.regionTab==="states"?INDIA_STATES:INDIA_CITIES;
  const ranked=source.map(place=>({ ...place,count:all.reduce((sum,article)=>sum+(articleMentionsPlace(article,place)?1:0),0) }))
    .filter(place=>place.count>0).sort((a,b)=>b.count-a.count||a.name.localeCompare(b.name)).slice(0,6);
  $$('[data-region-tab]').forEach(button=>{
    const active=button.dataset.regionTab===state.regionTab;
    button.classList.toggle("is-active",active);button.setAttribute("aria-pressed",String(active));
    button.textContent=button.dataset.regionTab==="cities"?(hi?"प्रमुख शहर":"Top cities"):(hi?"प्रमुख राज्य":"Top states");
  });
  const caption=$("#region-caption");if(caption)caption.textContent=hi?`अभी लोड की गई ${all.length} खबरों में स्थानों के उल्लेख। यह महत्व की रैंकिंग नहीं है।`:`Place mentions across ${all.length} currently loaded stories. This is not a ranking of importance.`;
  if(!ranked.length){root.innerHTML=`<div class="region-empty"><span aria-hidden="true">✳</span><p>${esc(t("regionEmpty"))}</p></div>`;return;}
  root.innerHTML=ranked.map((place,index)=>`<button class="region-card" type="button" data-region-query="${esc(place.name)}" style="--region-index:${index}" title="${esc((hi?"खबरें खोजें: ":"Search headlines mentioning ")+place.name)}"><span class="region-card-index">${String(index+1).padStart(2,"0")}</span><span class="region-card-name">${esc(place.name)}</span><span class="region-card-count">${place.count}<small>${place.count===1?t("regionMentionOne"):t("regionMention")}</small></span><span class="region-card-arrow" aria-hidden="true">↗</span></button>`).join("");
}

function renderOfficial(){const root=$("#official-list");if(!root)return;const items=state.official.filter(a=>!isSpamArticle(a)).slice(0,7);if(!items.length){root.innerHTML=`<div class="official-empty"><span class="official-empty-icon">↗</span><div><b>${esc(t("officialEmptyTitle"))}</b><small>${esc(t("officialEmptyBody"))}</small></div></div>`;return;}root.innerHTML=items.map(a=>`<div class="official-item" data-story-id="${esc(articleId(a))}" tabindex="0"><div><a href="${esc(safeUrl(a.url))}" target="_blank" rel="noopener noreferrer">${esc(a.title)}</a><small><span>${esc(a.sourceName||"Press Information Bureau")}</span> · <span>${esc(timeAgo(a.publishedAt)||t("published"))}</span> · <span class="language-tag" data-language="${detectedLanguage(a)}">${languageBadge(a)}</span></small></div><span class="official-tag">PIB</span></div>`).join("");}
function updateTicker(){const titles=[...state.articles.filter(a=>!a.official&&a.sourceType!=="pib"&&!isSpamArticle(a)).slice(0,7),...state.official.filter(a=>!isSpamArticle(a)).slice(0,4)].map(a=>a.title).filter(Boolean);const track=$("#ticker-track");if(!track)return;if(!titles.length){track.innerHTML='<span>Sources first. Noise less.</span><span class="ticker-dot">◆</span>';return;}const line=titles.map(x=>`<span>${esc(x)}</span><span class="ticker-dot">◆</span>`).join("");track.innerHTML=line+line;}
function toggleSaved(id){const a=[...state.articles,...state.official].find(x=>articleId(x)===id)||getSaved().find(x=>articleId(x)===id);if(!a)return;let saved=getSaved();const exists=saved.some(x=>articleId(x)===id);saved=exists?saved.filter(x=>articleId(x)!==id):[{...a},...saved].slice(0,150);setSaved(saved);renderStories();renderSaved();showToast(exists?t("removedToast"):t("savedToast"));}
function renderSaved(){const saved=getSaved();$("#saved-count").textContent=saved.length;const exportButton=$("#export-saved");if(exportButton)exportButton.textContent=state.language==="hi"?"निर्यात .txt":"Export .txt";const root=$("#saved-list");if(!saved.length){root.innerHTML=`<p class="empty-small">${esc(t("savedEmpty"))}</p>`;return;}root.innerHTML=saved.slice(0,15).map(a=>`<div class="saved-row"><div style="flex:1;min-width:0"><a href="${esc(safeUrl(a.url))}" target="_blank" rel="noopener noreferrer">${esc(a.title)}</a><small>${esc(a.sourceName||"News source")}</small></div><button data-remove-saved="${esc(articleId(a))}" aria-label="${esc(t("unsaveStory"))}">×</button></div>`).join("");$$('[data-remove-saved]',root).forEach(b=>b.addEventListener("click",()=>toggleSaved(b.dataset.removeSaved)));}
function exportSavedStories(){const saved=getSaved();if(!saved.length){showToast(state.language==="hi"?"निर्यात करने के लिए कोई सेव की गई खबर नहीं है।":"There are no saved stories to export.");return;}const date=new Date().toISOString().slice(0,10);const lines=["NaradNow — Saved Reading List",`Exported: ${new Date().toLocaleString()}`,"",...saved.flatMap((a,i)=>[`${i+1}. ${a.title||"Untitled story"}`,`   Publisher: ${a.sourceName||"Unknown source"}`,`   Published: ${a.publishedAt||"Date not provided"}`,`   URL: ${safeUrl(a.url||a.link||"#")}`,""])];const blob=new Blob([lines.join("\n")],{type:"text/plain;charset=utf-8"});const href=URL.createObjectURL(blob);const link=document.createElement("a");link.href=href;link.download=`naradnow-reading-list-${date}.txt`;document.body.appendChild(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(href),1000);showToast(state.language==="hi"?"रीडिंग लिस्ट टेक्स्ट फ़ाइल में निर्यात हुई।":"Reading list exported as a text file.");}
function renderPreviewCards(){
  const grid=$("#story-grid");if(!grid)return;const cards=$$(".sample-card",grid);let matches=0;const q=state.search.toLowerCase();
  cards.forEach(card=>{const cats=(card.dataset.previewCategory||"top").split(/\s+/);const categoryMatch=state.category==="top"||cats.includes(state.category);const searchMatch=!q||card.textContent.toLowerCase().includes(q);card.hidden=!(categoryMatch&&searchMatch);if(!card.hidden)matches++;});
  let empty=$("#preview-empty");if(!empty){empty=document.createElement("div");empty.id="preview-empty";empty.className="empty-state";empty.innerHTML=`<div class="empty-mark">✳</div><h3>${esc(t("noResults"))}</h3><p>${esc(t("workerNeeded"))}</p>`;grid.appendChild(empty);}empty.hidden=matches>0;
  const note=$("#load-more-note");if(note)note.textContent=state.category==="top"&&!state.search?t("previewNote"):t("workerNeeded");$("#load-more").hidden=true;
}
function goCategory(category,clearSearch=false){state.category=CATEGORIES.includes(category)?category:"top";state.page=1;if(clearSearch){state.search="";$("#news-search").value="";$("#clear-search").hidden=true;}setCategoryHeading();if(API_BASE)loadStories();else renderPreviewCards();$("#latest").scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"});}
let searchTimer;function onSearch(){state.search=$("#news-search").value.trim();$("#clear-search").hidden=!state.search;state.page=1;clearTimeout(searchTimer);if(API_BASE){searchTimer=setTimeout(()=>loadStories(true),350);}else{renderPreviewCards();}}
let activeReaderStory=null, readerReturnFocus=null;
function findStory(id){return [...state.articles,...state.official,getSaved().find(a=>articleId(a)===id)].filter(Boolean).find(a=>articleId(a)===id)||null;}
function openReader(id){const a=findStory(id);if(!a)return;const drawerAlreadyOpen=$("#reader-drawer").classList.contains("is-open");activeReaderStory=a;if(!drawerAlreadyOpen)readerReturnFocus=document.activeElement;const drawer=$("#reader-drawer"),content=$("#reader-content"),saved=getSaved().some(s=>articleId(s)===id),description=(a.description||"This publisher has not supplied a longer summary. Open the original report for full details.").replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim();
  content.innerHTML=`<div class="reader-category" data-tone="${toneForArticle(a)}">${a.official?"OFFICIAL PIB RELEASE":esc(categoryName(a.category).toUpperCase())}</div><h2 id="reader-title">${esc(a.title)}</h2><div class="reader-meta"><span>${esc(a.sourceName||"News source")}</span><span>·</span><span>${esc(timeAgo(a.publishedAt)||t("published"))}</span><span class="language-tag" data-language="${detectedLanguage(a)}">${languageBadge(a)}</span></div>${a.image?`<img class="reader-image" src="${esc(safeUrl(a.image))}" alt="" onerror="this.hidden=true">`:""}<div class="reader-summary">${esc(description)}</div><div class="reader-notice">Headlines and summaries are provided by the original publisher. Follow the source link for the complete article and context.</div><div class="reader-actions"><button class="reader-save ${saved?"is-saved":""}" id="reader-save" type="button">${saved?"✓ Saved to your reading list":"＋ Save story"}</button><a class="reader-original" id="reader-original" href="${esc(safeUrl(a.url))}" target="_blank" rel="noopener noreferrer">Read full story at source ↗</a></div>`;
  $("#reader-backdrop").hidden=false;drawer.inert=false;drawer.classList.add("is-open");drawer.setAttribute("aria-hidden","false");document.body.classList.add("reader-open");$("#reader-close").focus();
}
function closeReader(){const drawer=$("#reader-drawer");drawer.classList.remove("is-open");drawer.setAttribute("aria-hidden","true");drawer.inert=true;$("#reader-backdrop").hidden=true;document.body.classList.remove("reader-open");if(readerReturnFocus&&readerReturnFocus.focus)readerReturnFocus.focus();activeReaderStory=null;}
function renderHeroCarousel(){const stories=getFilteredArticles().slice(0,6),title=$("#big-picture-title"),dots=$("#hero-dots"),count=$("#big-picture-count");if(!title||!dots||!count)return;
  if(!stories.length){title.textContent="Today's headlines, with context.";title.dataset.storyId="";dots.innerHTML="";count.textContent="00 / 00";return;}
  state.heroStories=stories;state.heroIndex=Math.min(state.heroIndex||0,stories.length-1);const a=stories[state.heroIndex];title.textContent=a.title;title.dataset.storyId=articleId(a);count.textContent=`${String(state.heroIndex+1).padStart(2,"0")} / ${String(stories.length).padStart(2,"0")}`;
  dots.innerHTML=stories.map((s,i)=>`<button type="button" class="hero-dot ${i===state.heroIndex?"is-active":""}" data-hero-index="${i}" aria-label="Show story ${i+1}" aria-pressed="${i===state.heroIndex}"></button>`).join("");
  const fill=$("#hero-progress-fill");fill.style.transition="none";fill.style.width="0%";requestAnimationFrame(()=>{fill.style.transition="width 7s linear";fill.style.width="100%";});
}
function heroNext(){const stories=getFilteredArticles().slice(0,6);if(stories.length<2)return;state.heroIndex=((state.heroIndex||0)+1)%stories.length;renderHeroCarousel();}
let heroRaf=0,heroLastTime=0,heroElapsed=0;
function heroLoop(now){if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;if(!heroLastTime)heroLastTime=now;heroElapsed+=now-heroLastTime;heroLastTime=now;if(heroElapsed>=7000){heroElapsed=0;heroNext();}heroRaf=requestAnimationFrame(heroLoop);}
function startHeroLoop(){if(matchMedia("(prefers-reduced-motion: reduce)").matches||heroRaf)return;heroRaf=requestAnimationFrame(heroLoop);}
function initReadingProgress(){const update=()=>{const doc=document.documentElement;const max=doc.scrollHeight-doc.clientHeight;const pct=max>0?(doc.scrollTop/max)*100:0;$("#reading-progress-fill").style.width=`${Math.max(0,Math.min(100,pct))}%`;};window.addEventListener("scroll",update,{passive:true});window.addEventListener("resize",update);update();}
function initCustomCursor(){
  // NaradNow deliberately uses the native system pointer: it is familiar,
  // accessible, visible in dialogs, and avoids a distracting custom overlay.
  // On fine pointers only, track position for a quiet card-edge glow; this
  // never hides or replaces the browser cursor and does not run on touch or
  // reduced-motion configurations.
  if(!matchMedia("(pointer: fine)").matches||matchMedia("(prefers-reduced-motion: reduce)").matches)return;
  document.addEventListener("pointermove",event=>{
    const target=event.target instanceof Element?event.target.closest(".story-card"):null;
    if(!target)return;
    const rect=target.getBoundingClientRect();
    target.style.setProperty("--cursor-x",`${Math.max(0,event.clientX-rect.left)}px`);
    target.style.setProperty("--cursor-y",`${Math.max(0,event.clientY-rect.top)}px`);
  },{passive:true});
}
function shuffleList(items){
  const list=[...items];
  for(let i=list.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[list[i],list[j]]=[list[j],list[i]];}
  return list;
}
function quizText(value,max=104){
  const clean=String(value||"").replace(/\s+/g," ").trim();
  return clean.length>max?clean.slice(0,max-1).trimEnd()+"…":clean;
}
function quizChoices(correct,candidates,max=4){
  const seen=new Set(),clean=[];
  for(const raw of [correct,...shuffleList(candidates)]){
    const value=quizText(raw,108),key=value.toLocaleLowerCase();
    if(value&&!seen.has(key)){seen.add(key);clean.push(value);}
  }
  const answer=quizText(correct,108);
  if(!clean.includes(answer))clean.unshift(answer);
  return shuffleList(clean.slice(0,max));
}
function quizHeadlineQuestion(article,pool,language=state.language){
  const answer=quizText(article.title,108);
  const options=quizChoices(answer,pool.filter(x=>articleId(x)!==articleId(article)).map(x=>x.title),4);
  if(options.length<2)return null;
  return {
    question:language==="hi"?"इनमें से कौन-सी हेडलाइन आपकी मौजूदा ब्रीफिंग में है?":"Which headline appeared in your current briefing?",
    answer,options,
    explanation:language==="hi"?`यह हेडलाइन अभी लोड की गई ब्रीफिंग में है। तथ्य और पूरा संदर्भ जानने के लिए ${article.sourceName||"मूल प्रकाशक"} की मूल खबर खोलें।`:`This headline is present in the currently loaded briefing. Open ${article.sourceName||"the original publisher"}'s report for facts and full context.`
  };
}
function buildQuiz(){
  const pool=dedupeArticles([...state.articles,...state.official]).filter(a=>a.title&&!isSpamArticle(a));
  if(pool.length<2)return [];
  const questions=[];
  const usedIds=new Set();
  const pickUnused=(items)=>shuffleList(items.filter(a=>!usedIds.has(articleId(a))));
  const headlineArticles=shuffleList(pool.filter(a=>!a.official&&a.sourceType!=="pib"));
  const first=(headlineArticles.length?headlineArticles:shuffleList(pool))[0];
  const q1=quizHeadlineQuestion(first,pool);
  if(q1){questions.push(q1);usedIds.add(articleId(first));}

  // Ask for publisher identity only when the loaded feed contains real alternatives.
  const publishers=[...new Set(pool.map(a=>String(a.sourceName||"").trim()).filter(Boolean))];
  const sourceCandidates=pickUnused(pool.filter(a=>a.sourceName&&publishers.length>=2));
  if(sourceCandidates.length){
    const article=sourceCandidates[0],answer=String(article.sourceName||"News source").trim();
    const options=quizChoices(answer,publishers.filter(p=>p.toLowerCase()!==answer.toLowerCase()),4);
    if(options.length>=2){
      questions.push({
        question:state.language==="hi"?`इस रिपोर्ट के लिए कौन-सा प्रकाशक दिया गया है?\n“${quizText(article.title,115)}”`:`Which publisher is listed for this report?\n“${quizText(article.title,115)}”`,
        answer:quizText(answer,108),options,
        explanation:state.language==="hi"?`फीड में इस हेडलाइन का स्रोत ${answer} दिया गया है। पूरा संदर्भ पढ़ने के लिए मूल रिपोर्ट खोलें।`:`The feed lists ${answer} as the source for this headline. Open the original report for the full context.`
      });
      usedIds.add(articleId(article));
    }
  }

  // If both official and newsroom items are present, quiz the visible source distinction.
  const official=shuffleList(pool.filter(a=>(a.official||a.sourceType==="pib")&&!usedIds.has(articleId(a))));
  const newsroom=shuffleList(pool.filter(a=>!a.official&&a.sourceType!=="pib"));
  if(official.length&&newsroom.length){
    const article=official[0];
    const answer=quizText(article.title,108);
    const options=quizChoices(answer,newsroom.map(a=>a.title),4);
    if(options.length>=2){
      questions.push({
        question:state.language==="hi"?"कौन-सी हेडलाइन आधिकारिक PIB रिलीज़ के रूप में चिह्नित है?":"Which headline is marked as an official PIB release?",
        answer,options,
        explanation:state.language==="hi"?"यह आइटम फीड में PIB की आधिकारिक रिलीज़ के रूप में चिह्नित है। मूल प्रेस रिलीज़ खोलकर विवरण और तारीख़ देखें।":"This item is marked as an official PIB release in the feed. Open the original press release to check its details and date."
      });
      usedIds.add(articleId(article));
    }
  }

  // Fill any missing slots with distinct headline-recognition questions based only on loaded data.
  for(const article of pickUnused(pool)){
    if(questions.length>=3)break;
    const q=quizHeadlineQuestion(article,pool);
    if(q){questions.push(q);usedIds.add(articleId(article));}
  }
  return questions.slice(0,3);
}
function suspendCustomCursorForQuiz(){
  // The native system cursor remains visible while the quiz dialog is open.
  document.documentElement.classList.remove("minimal-cursor-enabled");
}
function restoreCustomCursorAfterQuiz(){
  // No custom overlay to restore; retain the system pointer in every layer.
  document.documentElement.classList.remove("minimal-cursor-enabled");
}
function launchQuiz(){const questions=buildQuiz();state.quizQuestions=questions;state.quizIndex=0;state.quizScore=0;state.quizLocked=false;$("#quiz-next").hidden=true;delete $("#quiz-next").dataset.restart;$("#quiz-note").textContent=state.language==="hi"?"आपकी मौजूदा ब्रीफिंग की हेडलाइन और स्रोत-लेबल पर आधारित अधिकतम तीन सवाल। पूरी जानकारी के लिए मूल खबर पढ़ें।":"Up to three questions grounded in headlines and source labels from your current briefing. Open original reports for full context.";const d=$("#quiz-dialog");renderQuizQuestion();if(d.showModal&&!d.open){suspendCustomCursorForQuiz();d.showModal();}else if(!d.showModal)showToast("Your browser doesn't support the quiz dialog.");}
function renderQuizQuestion(){const questions=state.quizQuestions||[],q=questions[state.quizIndex];const question=$("#quiz-question"),options=$("#quiz-options"),result=$("#quiz-result"),next=$("#quiz-next"),step=$("#quiz-step");result.textContent="";next.hidden=true;state.quizLocked=false;
  if(!q){question.textContent="Not enough headlines are available for a briefing quiz yet. Refresh the feed and try again.";options.innerHTML="";step.textContent="—";$("#quiz-note").textContent="The quiz uses headlines and source labels currently available in your briefing.";return;}
  step.textContent=`${String(state.quizIndex+1).padStart(2,"0")} / ${String(questions.length).padStart(2,"0")}`;question.textContent=q.question;options.innerHTML=q.options.map((o,i)=>`<button type="button" data-quiz-option="${i}">${esc(o)}</button>`).join("");
  $$("[data-quiz-option]",options).forEach(button=>button.addEventListener("click",()=>{if(state.quizLocked)return;state.quizLocked=true;const picked=q.options[Number(button.dataset.quizOption)];const correct=picked===q.answer;if(correct)state.quizScore++;$$("[data-quiz-option]",options).forEach((b,idx)=>{b.disabled=true;if(q.options[idx]===q.answer)b.classList.add("correct-answer");else if(b===button)b.classList.add("wrong-answer");});result.textContent=`${correct?"Correct. ":"Review: "}${q.explanation||`The feed's answer is ${q.answer}.`}`;next.hidden=false;next.textContent=state.quizIndex===questions.length-1?`See score (${state.quizScore}/${questions.length})`:"Next question →";}));
}
function advanceQuiz(){const next=$("#quiz-next");if(next.dataset.restart==="true"){delete next.dataset.restart;launchQuiz();return;}if(!state.quizLocked)return;const questions=state.quizQuestions||[];if(state.quizIndex<questions.length-1){state.quizIndex++;renderQuizQuestion();return;}$("#quiz-question").textContent=`Quiz complete — ${state.quizScore} / ${questions.length} correct`;$("#quiz-options").innerHTML="";$("#quiz-result").textContent="Keep exploring the original reports to build your understanding.";next.textContent="Try again ↻";next.dataset.restart="true";state.quizLocked=false;}
function initMagneticFallback(){if(matchMedia("(pointer: coarse)").matches)return;}

function setupEvents(){
  $("#theme-toggle").addEventListener("click",()=>{state.theme=state.theme==="auto"?"forest":state.theme==="forest"?"paper":"auto";localStorage.setItem(THEME_KEY,state.theme);applyTheme();});
  $("#language-toggle").addEventListener("click",()=>{state.language=state.language==="en"?"hi":"en";localStorage.setItem(LANG_KEY,state.language);applyLanguage();showToast(t("languageChanged"));if(API_BASE)loadStories(true);});
  $("#mobile-menu-button").addEventListener("click",()=>{const nav=$("#mobile-nav");const open=nav.hidden;nav.hidden=!open;$("#mobile-menu-button").setAttribute("aria-expanded",String(open));});
  $$("[data-category]").forEach(b=>b.addEventListener("click",()=>goCategory(b.dataset.category,true)));
  $$('[data-cat-shortcut]').forEach(a=>a.addEventListener("click",()=>{goCategory(a.dataset.catShortcut,true);$("#mobile-nav").hidden=true;}));
  $("#news-search").addEventListener("input",onSearch);$("#search-open").addEventListener("click",()=>{$("#news-search").focus();$("#latest").scrollIntoView({behavior:"smooth",block:"start"});});
  $("#clear-search").addEventListener("click",()=>{$("#news-search").value="";onSearch();$("#news-search").focus();});
  $("#refresh-button").addEventListener("click",()=>{if(API_BASE)loadStories(true);else {showToast(t("workerNeeded"));}});
  $("#dismiss-notice").addEventListener("click",()=>$("#feed-notice").hidden=true);
  $("#load-more").addEventListener("click",loadMoreStories);
  $("#explore-india").addEventListener("toggle",()=>{if($("#explore-india").open)renderRegionExplorer();});
  $("#explore-india").addEventListener("click",e=>{
    const tab=e.target.closest("[data-region-tab]");
    if(tab){state.regionTab=tab.dataset.regionTab==="states"?"states":"cities";renderRegionExplorer();return;}
    const place=e.target.closest("[data-region-query]");if(!place)return;
    const query=place.dataset.regionQuery;state.category="top";state.examMode=false;state.examTopic="all";state.search=query;state.page=1;
    $("#news-search").value=query;$("#clear-search").hidden=false;setCategoryHeading();renderExamPrepPanel();
    if(API_BASE)loadStories(true);else renderPreviewCards();
    $("#latest").scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"});
    showToast(`${t("regionSearch")} ${query}`);
  });
  $("#filter-button").addEventListener("click",()=>goCategory("top",true));
  $("#exam-mode-toggle").addEventListener("click",()=>{state.examMode=!state.examMode;if(state.examMode){state.category="top";state.page=1;state.examTopic="all";setCategoryHeading();}renderExamPrepPanel();if(API_BASE&&state.examMode)loadStories(true);else renderStories();});
  $("#exam-prep-close").addEventListener("click",()=>{state.examMode=false;state.examTopic="all";renderExamPrepPanel();renderStories();});
  $("#exam-prep-panel").addEventListener("click",e=>{const track=e.target.closest("[data-exam-track]");if(track){state.examTrack=track.dataset.examTrack;state.examTopic="all";try{localStorage.setItem("naradnow:exam-track:v1",state.examTrack)}catch{}renderStories();return;}const topic=e.target.closest("[data-exam-topic]");if(topic){state.examTopic=topic.dataset.examTopic;renderStories();}});
  $("#export-saved").addEventListener("click",exportSavedStories);
  $("#show-saved").addEventListener("click",()=>{$("#saved-panel").hidden=!$("#saved-panel").hidden;state.showSaved=!$("#saved-panel").hidden;renderSaved();if(state.showSaved)$("#saved-panel").scrollIntoView({behavior:"smooth",block:"nearest"});});
  $("#close-saved").addEventListener("click",()=>{$("#saved-panel").hidden=true;state.showSaved=false;});
  $$ ("[data-topic]").forEach(b=>b.addEventListener("click",()=>{$("#news-search").value=b.dataset.topic.replace(/^#\s*/,"");state.search=$("#news-search").value;$("#clear-search").hidden=false;state.page=1;if(API_BASE)loadStories(true);else onSearch();$("#latest").scrollIntoView({behavior:"smooth"});}));
  $("#quiz-button").addEventListener("click",launchQuiz);$("#quiz-next").addEventListener("click",advanceQuiz);$("#quiz-dialog").addEventListener("close",restoreCustomCursorAfterQuiz);
  // Feed card interactions use delegation so they survive every re-render.
  $("#story-grid").addEventListener("click",e=>{const revised=e.target.closest("[data-revised-id]");if(revised){e.stopPropagation();toggleRevised(revised.dataset.revisedId);return;}const save=e.target.closest("[data-save-id]");if(save){e.stopPropagation();toggleSaved(save.dataset.saveId);return;}const preview=e.target.closest("[data-open-id]");if(preview){e.stopPropagation();openReader(preview.dataset.openId);return;}const card=e.target.closest(".story-card[data-story-id]");if(card&&!e.target.closest("a,button,input"))openReader(card.dataset.storyId);});
  $("#story-grid").addEventListener("keydown",e=>{const card=e.target.closest(".story-card[data-story-id]");if(card&&e.target===card&&(e.key==="Enter"||e.key===" ")){e.preventDefault();openReader(card.dataset.storyId);}});
  $("#official-list").addEventListener("click",e=>{const item=e.target.closest(".official-item[data-story-id]");if(item){if(e.target.closest("a"))e.preventDefault();openReader(item.dataset.storyId);}});
  $("#official-list").addEventListener("keydown",e=>{const item=e.target.closest(".official-item[data-story-id]");if(item&&e.target===item&&(e.key==="Enter"||e.key===" ")){e.preventDefault();openReader(item.dataset.storyId);}});
  $("#reader-close").addEventListener("click",closeReader);$("#reader-backdrop").addEventListener("click",closeReader);
  $("#reader-drawer").addEventListener("click",e=>{if(e.target.closest("#reader-save")&&activeReaderStory){toggleSaved(articleId(activeReaderStory));openReader(articleId(activeReaderStory));}});
  $("#big-picture-title").addEventListener("click",()=>{const id=$("#big-picture-title").dataset.storyId;if(id)openReader(id);});
  $("#hero-dots").addEventListener("click",e=>{const dot=e.target.closest("[data-hero-index]");if(!dot)return;state.heroIndex=Number(dot.dataset.heroIndex);renderHeroCarousel();heroElapsed=0;});
  document.addEventListener("keydown",e=>{const active=document.activeElement;const typing=active&&(active.matches("input,textarea,select")||active.isContentEditable);if(e.key==="/"&&!typing&&!e.ctrlKey&&!e.metaKey&&!e.altKey){e.preventDefault();$("#news-search").focus();$("#latest").scrollIntoView({behavior:"smooth",block:"start"});}if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();$("#news-search").focus();}if(e.key==="Escape"){$("#mobile-nav").hidden=true;if($("#reader-drawer").classList.contains("is-open"))closeReader();}if(e.key==="Tab"&&$("#reader-drawer").classList.contains("is-open")){const focusables=$$('button:not([disabled]),a[href],input,select,textarea,[tabindex]:not([tabindex="-1"])',$("#reader-drawer"));if(focusables.length){const first=focusables[0],last=focusables[focusables.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}}});
}
function init(){
  if("serviceWorker" in navigator&&location.protocol!=="file:")navigator.serviceWorker.register("./sw.js").catch(()=>{});
  $("#footer-year").textContent=new Date().getFullYear();$("#today-label").textContent=state.language==="hi"?"भारत संस्करण":"India edition";$("#intro-date").textContent=localDate();
  setSaved(getSaved());applyTheme();applyLanguage();setupEvents();renderSaved();renderExamPrepPanel();renderRegionExplorer();initReadingProgress();initCustomCursor();renderHeroCarousel();startHeroLoop();
  if(API_BASE)loadStories();else{showEmptyState(t("loadError"),t("workerNeeded"),true);}
}
init();
