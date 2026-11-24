// 泰妍 MV 歌單（只放官方頻道的完整版 MV）。每首一行，依年份由舊到新：
//   t = 歌名、y = 年份、m = 分類（soft 抒情 / bright 輕快）、id = YouTube 影片代碼（網址 watch?v= 後面那串）
//   b = 一句介紹（中文，自己寫，不放歌詞），可留空。
//   《Unspecial》主打 MV 發布後加到最後面。
const SONGS = [
  {t:"I (feat. Verbal Jint)", y:2015, m:"bright", id:"4OrCA1OInoo", b:"個人出道曲，清爽又有希望感。"},
  {t:"Rain", y:2016, m:"soft", id:"eHir_vB1RUI", b:"SM STATION 第一首，下雨天必聽。"},
  {t:"Starlight (feat. DEAN)", y:2016, m:"bright", id:"eNmL4JiGxZQ", b:"和 DEAN 合作，甜甜的戀愛歌。"},
  {t:"Why", y:2016, m:"bright", id:"WkdtmT8A2iY", b:"迷你二輯主打，公路旅行般的自由感。"},
  {t:"11:11", y:2016, m:"soft", id:"ulr0muQKjk0", b:"溫柔的抒情單曲，安靜的夜晚聽剛好。"},
  {t:"I Got Love", y:2017, m:"bright", id:"MHqy1JsVvIE", b:"第一張正規專輯的先行曲，帶點節奏感。"},
  {t:"Fine", y:2017, m:"soft", id:"NHXUM-6a3dU", b:"第一張正規專輯主打。"},
  {t:"Cover Up（Lyric Video）", y:2017, m:"bright", id:"Mn244U2fRKQ", b:"正規一輯收錄曲的歌詞影片。"},
  {t:"Make Me Love You", y:2017, m:"bright", id:"TVUqLBRQom8", b:"春天感的輕快歌。"},
  {t:"This Christmas", y:2017, m:"soft", id:"hsh54g9JmC0", b:"冬季特輯主打，暖暖的聖誕歌。"},
  {t:"겨울나무 (I'm all ears)（Special Video）", y:2018, m:"soft", id:"PcYhtiJneHg", b:"冬季特輯收錄曲的特別影片。"},
  {t:"Something New", y:2018, m:"bright", id:"im1UUY8dQIk", b:"迷你三輯主打。"},
  {t:"Stay（日文）", y:2018, m:"soft", id:"k9_XH1YibcY", b:"日本活動的日文歌。"},
  {t:"Page 0（with MeloMance，STATION X 0）", y:2018, m:"soft", id:"X46z6f24c7o", b:"和 MeloMance 合作的 SM STATION 單曲。"},
  {t:"四季 (Four Seasons)", y:2019, m:"soft", id:"4HG_CJzyX6A", b:"橫掃韓國音源榜的代表作。"},
  {t:"VOICE（日文）", y:2019, m:"soft", id:"35sE0gp72SU", b:"日本單曲。"},
  {t:"火花 (Spark)", y:2019, m:"bright", id:"eP4ga_fNm-E", b:"《Purpose》主打，紅色系的強烈舞台感。"},
  {t:"想對自己說的話 (Dear Me)", y:2020, m:"soft", id:"bho0m505qVA", b:"《Purpose》改版收錄，寫給自己的溫柔歌。"},
  {t:"Happy", y:2020, m:"bright", id:"Raj-AuQgCTg", b:"明亮溫暖的單曲。"},
  {t:"#GirlsSpkOut (feat. ちゃんみな)（日文）", y:2020, m:"bright", id:"XT7Oh6vTY1Q", b:"日本迷你一輯主打，和 ちゃんみな 合作。"},
  {t:"What Do I Call You", y:2020, m:"soft", id:"5LbFdY6vGsQ", b:"迷你四輯主打，分手後的釋懷。"},
  {t:"Weekend", y:2021, m:"bright", id:"RmuL-BPFi2Q", b:"復古又輕快，適合週末出門前聽。"},
  {t:"Hate that...（KEY feat. 太妍）", y:2021, m:"soft", id:"sz2Dmo1_BjM", b:"KEY 的歌，泰妍參與合唱。"},
  {t:"Can't Control Myself", y:2022, m:"bright", id:"RccDIpx4ZMM", b:"INVU 後續曲，帶點懸疑感。"},
  {t:"INVU", y:2022, m:"bright", id:"AbZH7XWDW_k", b:"第三張正規專輯主打，冷豔的氣場。"},
  {t:"The Cure（SM 群星合唱）", y:2023, m:"soft", id:"Gn7pr7RGPoM", b:"SM 歌手們一起合唱的歌曲。"},
  {t:"To. X", y:2023, m:"bright", id:"5_n6t9G2TUQ", b:"迷你五輯主打，酷酷地說再見。"},
  {t:"악몽 (Nightmare)（Lyric Video）", y:2023, m:"soft", id:"zM8txXJSpQs", b:"迷你五輯收錄曲的歌詞影片。"},
  {t:"To. X（IMLAY Remix）", y:2024, m:"bright", id:"_BS_PEPrXKA", b:"〈To. X〉的 Remix 版本。"},
  {t:"Heaven", y:2024, m:"soft", id:"oE8hAQie8fw", b:"2024 年的單曲。"},
  {t:"Letter To Myself", y:2024, m:"soft", id:"wqN1vLPX-no", b:"迷你六輯主打，寫給自己的信。"},
  {t:"인사 (Panorama)", y:2025, m:"soft", id:"xGhaNqnjgr4", b:"2025 年的單曲。"},
  {t:"晚餐歌 (만찬가)（J-POP REMAKE）", y:2026, m:"soft", id:"H0GbvPY_Yl8", b:"J-POP REMAKE 企劃第一彈，翻唱 tuki. 的〈晚餐歌〉。"}
];
