// 泰妍的官方現場演唱影片（TAEYEON Official 頻道的 Live Clip，以及 dingo 等官方節目頻道的完整現場）。每支一行，依專輯由新到舊：
//   t = 歌名、a = 所屬專輯（不確定就留空字串）、id = YouTube 影片代碼（網址 watch?v= 後面那串）
//   b = 一句自己寫的中文介紹（不放歌詞）
const LIVECLIPS = [
  {t:"Killing Voice（dingo）", a:"", id:"5ch94AaPZRQ", b:"dingo music 的 Killing Voice，一口氣唱完〈I〉〈11:11〉〈INVU〉等十多首代表曲的完整現場。"},
  {t:"Blur", a:"Letter To Myself", id:"ov3-8gKI80g", b:"〈Blur〉的現場版演唱。"},
  {t:"Disaster", a:"Letter To Myself", id:"GE8wQuR0Frg", b:"〈Disaster〉的現場版演唱。"},
  {t:"Letter To Myself", a:"Letter To Myself", id:"OyBO0nLrrq0", b:"迷你六輯同名主打的現場版。"},
  {t:"To. X", a:"To. X", id:"r_ve6Iw1O_A", b:"迷你五輯同名主打的現場版。"},
  {t:"All For Nothing", a:"To. X", id:"jXOQ9LG83uw", b:"迷你五輯收錄曲的現場版。"},
  {t:"Fabulous", a:"To. X", id:"705BcZyCfzk", b:"迷你五輯收錄曲的現場版。"},
  {t:"Priority Stage Video（MAX 昌珉、太妍、WINTER）", a:"", id:"KY-Dgpwthe8", b:"2023 年和 MAX 昌珉、WINTER 一起的舞台影片。"},
  {t:"INVU", a:"INVU", id:"8SrtnehtGh0", b:"正規三輯同名主打的現場版。"},
  {t:"어른아이 (Toddler)", a:"INVU", id:"EaIb4RzAvEI", b:"正規三輯收錄曲的現場版。"},
  {t:"그런 밤 (Some Nights)", a:"INVU", id:"a7NoogZ2eFo", b:"正規三輯收錄曲的現場版，適合夜晚聽。"},
  {t:"품 (Heart)", a:"INVU", id:"xA3-NV2tZhM", b:"正規三輯收錄曲的現場版。"},
  {t:"What Do I Call You", a:"What Do I Call You", id:"xbfZZt5arvs", b:"迷你四輯同名主打的現場版。"},
  {t:"Galaxy", a:"What Do I Call You", id:"u-62YXsDybE", b:"迷你四輯收錄曲的現場版。"},
  {t:"Playlist", a:"What Do I Call You", id:"fNYxBpBo050", b:"迷你四輯收錄曲的現場版。"},
  {t:"Sorrow（日文，Studio Live Ver.）", a:"#GirlsSpkOut", id:"rZO7Fe-6pxo", b:"日本迷你一輯收錄曲的錄音室現場版。"},
  {t:"기억을 걷는 시간 Time Walking Through Memories（柳熙烈的寫生簿）", a:"", id:"dWaALXL8h4U", b:"2017 年上 KBS《柳熙烈的寫生簿》翻唱 Nell 的〈기억을 걷는 시간〉，安靜又動人的現場。"},
  {t:"11:11（Live Acoustic Version）", a:"11:11", id:"WLJyhhNCHi0", b:"吉他伴奏的現場版，像在耳邊說話。"},
];
