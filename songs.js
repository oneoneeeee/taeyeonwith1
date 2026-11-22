// 泰妍 MV 歌單。每首一行：
//   t = 歌名、y = 年份、m = 分類（soft 抒情 / bright 輕快）、id = YouTube 影片代碼（網址 watch?v= 後面那串）
//   沒有確認到官方影片的歌，改用 q = YouTube 搜尋關鍵字，播放器會顯示成「到 YouTube 搜尋」。
//   b = 一句介紹（中文），可留空。
const SONGS = [
  {t:"I (feat. Verbal Jint)", y:2015, m:"bright", id:"4OrCA1OInoo", b:"個人出道曲，清爽又有希望感。"},
  {t:"Rain", y:2016, m:"soft", id:"eHir_vB1RUI", b:"SM STATION 第一首，下雨天必聽。"},
  {t:"Why", y:2016, m:"bright", id:"WkdtmT8A2iY", b:"迷你二輯主打，公路旅行般的自由感。"},
  {t:"Starlight (feat. DEAN)", y:2016, m:"bright", id:"eNmL4JiGxZQ", b:"和 DEAN 合作，甜甜的戀愛歌。"},
  {t:"11:11 (Live Acoustic)", y:2016, m:"soft", id:"WLJyhhNCHi0", b:"吉他伴奏的現場版，像在耳邊說話。"},
  {t:"Fine", y:2017, m:"soft", q:"TAEYEON 'Fine' MV", b:"第一張正規專輯主打。"},
  {t:"Make Me Love You", y:2017, m:"bright", q:"TAEYEON 'Make Me Love You' MV", b:"春天感的輕快歌。"},
  {t:"Something New", y:2018, m:"bright", q:"TAEYEON 'Something New' MV", b:"迷你三輯主打。"},
  {t:"四季 (Four Seasons)", y:2019, m:"soft", id:"4HG_CJzyX6A", b:"橫掃韓國音源榜的代表作。"},
  {t:"Blue", y:2019, m:"soft", id:"CSqsIoEyx9E", b:"很純粹的抒情曲，淡淡的想念。"},
  {t:"火花 (Spark)", y:2019, m:"bright", id:"eP4ga_fNm-E", b:"《Purpose》主打，紅色系的強烈舞台感。"},
  {t:"Happy", y:2020, m:"bright", q:"TAEYEON 'Happy' MV", b:"明亮溫暖的單曲。"},
  {t:"What Do I Call You", y:2020, m:"soft", id:"5LbFdY6vGsQ", b:"迷你四輯主打，分手後的釋懷。"},
  {t:"Weekend", y:2021, m:"bright", id:"RmuL-BPFi2Q", b:"復古又輕快，適合週末出門前聽。"},
  {t:"INVU", y:2022, m:"bright", id:"AbZH7XWDW_k", b:"第三張正規專輯主打，冷豔的氣場。"},
  {t:"Can't Control Myself", y:2022, m:"bright", id:"RccDIpx4ZMM", b:"INVU 後續曲，帶點懸疑感。"},
  {t:"To. X", y:2023, m:"bright", id:"5_n6t9G2TUQ", b:"迷你五輯主打，酷酷地說再見。"},
  {t:"Letter To Myself", y:2024, m:"soft", id:"wqN1vLPX-no", b:"迷你六輯主打，寫給自己的信。"},
  {t:"The Unspecial（專輯預告）", y:2026, m:"soft", id:"8h2mkPn7-pA", b:"第四張正規專輯《Unspecial》的電影感預告片，11/30 發行。"}
];
