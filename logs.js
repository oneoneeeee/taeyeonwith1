// 泰妍官方 YouTube 頻道 TAEYEON Official（@taeyeonofficial）的 log 系列。每支一行，同系列由新到舊：
//   s = 系列（"집 나간 탱log" 旅行 vlog／"TAENG LOG" 幕後 vlog）、n = 集數或標籤
//   t = 原始標題（韓文，去掉 emoji）、id = YouTube 影片代碼（網址 watch?v= 後面那串）
//   b = 一句自己寫的中文介紹（不確定就寫通用描述）
const LOGS = [
  {s:"집 나간 탱log", n:"in Bangkok", t:"집 나간 탱log in Bangkok (feat. 안녕, BANGKOK 2026)", id:"e4fPbvzfHNw", b:"曼谷旅行 vlog。"},
  {s:"집 나간 탱log", n:"in Tokyo", t:"집 나간 탱log in Tokyo (feat. 핑구x탱그)", id:"ZYeUxdMAg0c", b:"東京旅行 vlog。"},
  {s:"집 나간 탱log", n:"Teaser", t:"집 나간 탱log Teaser", id:"-X9yWSu8unc", b:"離家出走系列的預告。"},
  {s:"TAENG LOG", n:"#22", t:"마데카솔 광고 비하인드", id:"gIp7O8Egpu8", b:"Madecassol 廣告拍攝幕後。"},
  {s:"TAENG LOG", n:"#21", t:"DAZED KOREA 2026 Summer Edition", id:"got7bNRHd3o", b:"DAZED KOREA 2026 夏季號畫報幕後。"},
  {s:"TAENG LOG", n:"#20", t:"W Korea Behind", id:"OmvEoBtvSsE", b:"W Korea 畫報幕後。"},
  {s:"TAENG LOG", n:"#19", t:"Uber Taxi Behind", id:"JsdMfORF4eU", b:"Uber Taxi 拍攝幕後。"},
  {s:"TAENG LOG", n:"#18", t:"엘르 베네피트 비하인드", id:"OH-v0YEGRsI", b:"ELLE × Benefit 拍攝幕後。"},
  {s:"TAENG LOG", n:"#17", t:"eyesmagazine Louis Vuitton Holiday Behind", id:"cg7s5NMtvpM", b:"eyesmagazine × Louis Vuitton 節日畫報幕後。"},
  {s:"TAENG LOG", n:"#16", t:"베네피트 광고 비하인드", id:"0umnuJaP_eA", b:"Benefit 廣告拍攝幕後。"},
  {s:"TAENG LOG", n:"#15", t:"하퍼스바자 코리아 비하인드", id:"8VORezQYlXU", b:"Harper's BAZAAR Korea 畫報幕後。"},
  {s:"TAENG LOG", n:"#14", t:"엘르 홍콩 비하인드", id:"wrP0yJodH_0", b:"ELLE 香港畫報幕後。"},
  {s:"TAENG LOG", n:"#13", t:"마데카솔 광고 비하인드", id:"cFS2GBNMRhc", b:"Madecassol 廣告拍攝幕後。"},
  {s:"TAENG LOG", n:"#12", t:"도영 'Time Machine (Feat. 태연, 마크)' 녹음 비하인드", id:"CMSYccSIR9E", b:"道英〈Time Machine〉合作錄音幕後。"},
  {s:"TAENG LOG", n:"#11", t:"SMTOWN LIVE 2024 SMCU PALACE @TOKYO Behind", id:"pE2Vbqma7Y0", b:"SMTOWN LIVE 2024 東京場幕後。"},
  {s:"TAENG LOG", n:"#10", t:"보그 코리아 화보 비하인드", id:"AqLm7rwff_g", b:"VOGUE Korea 畫報幕後。"},
  {s:"TAENG LOG", n:"#9", t:"생일 숏폼 비하인드", id:"lRw60MMLA0g", b:"生日短影音拍攝幕後。"},
  {s:"TAENG LOG", n:"#8", t:"놀라운 토요일 비하인드", id:"VWHG-D1aCZI", b:"《驚人的星期六》錄影幕後。"},
  {s:"TAENG LOG", n:"#7", t:"TAEYEON X Benefit Behind", id:"vrIzJI38YIs", b:"TAEYEON × Benefit 拍攝幕後。"},
  {s:"TAENG LOG", n:"#6", t:"W Korea Photoshoot Behind", id:"ieVLhC4mbiQ", b:"W Korea 畫報拍攝幕後。"},
  {s:"TAENG LOG", n:"#5", t:"크리스마스 숏폼 비하인드", id:"zoR7zXEBM7g", b:"聖誕短影音拍攝幕後。"},
  {s:"TAENG LOG", n:"#4", t:"'꿈' (웰컴투 삼달리 OST) Recording Behind", id:"gtls1ivcBps", b:"《歡迎來到三達里》OST〈꿈〉錄音幕後。"},
  {s:"TAENG LOG", n:"#3", t:"퀸덤퍼즐 Behind The Scenes", id:"Y88WKaa__UY", b:"《Queendom Puzzle》幕後。"},
  {s:"TAENG LOG", n:"#2", t:"머리 자른 태연", id:"s6TECxy2JQE", b:"剪頭髮的泰妍。"},
  {s:"TAENG LOG", n:"#1", t:"놀토 브이로그 (with 실버버튼 언박싱)", id:"2NAxMz0bNys", b:"《驚人的星期六》vlog，順便開箱銀色按鈕。"},
];
