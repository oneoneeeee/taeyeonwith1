# To. TAEYEON（泰妍應援站）

使用者自己的金泰妍（Taeyeon，少女時代）粉絲網站，對外公開。
- 公開網址：https://oneoneeeee.github.io/taeyeonwith1/
- 由 GitHub Pages 從 `main` 分支根目錄發布，推上去約 1 分鐘後生效（有快取，驗證時網址加 `?v=數字`）。

## 跟使用者溝通
- **一律用繁體中文（台灣用語）回覆**，不要用英文。使用者很在意這點。
- 使用者是住在台灣的老粉：去過 2023、2025 台灣場，2027 年是追泰妍第十年。最在意台北場（2027/4/3 台北大巨蛋）和搶票資訊。
- 回覆簡短、口語、可以加一點 emoji。改完要實際打開網站確認再回報。

## 版權與內容原則
- 不從 Facebook、Pinterest、Getty、Flickr 等處抓照片；照片只用使用者自己傳來的。
- 音樂只嵌 YouTube 官方影片（SMTOWN 頻道），播放器不能被遮住；不放歌詞。
- 新聞只收有可靠來源的，摘要用自己的話寫。

## 檔案
| 檔案 | 內容 |
| --- | --- |
| `index.html` | 整個網站（HTML/CSS/JS 都在這一個檔案） |
| `data.json` | 最新消息、巡演場次、提醒（meta / tour / news；`mvs`、`photos` 保持 `[]`）。tour 裡 `_id:"taipei"` 有 `ticket` 欄位（見下方「台北場 ticket 欄位」） |
| `songs.js` | MV 歌單 `SONGS`（格式見檔案開頭註解） |
| `logs.js` | TAENG LOG 影片清單 `LOGS`（泰妍官方頻道 @taeyeonofficial 的「집 나간 탱log」「TAENG LOG」「INVlogU」三個系列，格式見檔案開頭註解）。log 系列只放完整版，不放 Teaser／預告片。 |
| `concerts.js` | TAENG CONCERT 巡演紀錄 `CONCERTS`（泰妍官方頻道，分頁 `s`：2025 The TENSE、2023 The ODD Of LOVE、2020 The UNSEEN、2019 's...one、2018 Japan Showcase、最後是「回歸直播」（回歸倒數直播重播）；`tp:true` 為台北相關，放各分頁最前面並標「台北」） |
| `liveclips.js` | TAENG LIVE（原 LIVE CLIP）清單 `LIVECLIPS`（泰妍官方頻道的 Live Clip，依專輯由新到舊，不分頁） |
| `dance.js` | TAENG DANCE 清單 `DANCE`（`{t, y, id, b}`，舞蹈練習與舞台影片，由新到舊，不分頁） |
| `relax.js` | TAENG TALK 清單 `RELAX`（`{s, n, t, id, b}`，分頁「탱나무숲」聊天談心、「탱코덕」美妝、「特別企劃」、「綜藝客串」（節目官方頻道），同系列由新到舊，只放完整集數） |
| `behind.js` | TAENG BEHIND 清單 `BEHIND`（`{s, t, id, b}`，每次回歸的 MV／錄音／封面拍攝幕後完整版，依專輯分頁，分頁由新到舊：Panorama、Letter To Myself、Heaven、To. X） |
| `mv.html` | 獨立的完整 MV 播放器，有「← 回到應援站」連結 |
| `p001.jpg`–`p136.jpg` | 跑馬燈照片，已依風格排序 |
| `cover_2.jpg` | 背景：《Unspecial》紅色刺繡專輯封面 |
| `poster_2.jpg` | F.L.Y. 巡演宣傳圖（巡演日期下的小卡） |
| `favicon.png`、`apple-touch-icon.png` | 網站圖示：泰妍簽名（白底黑字）。`index.html` 引用時帶 `?v=sig2`，換圖要改版本號 |
| `theme-fly.css` | F.L.Y. 水下主題的全部樣式（只在 `<html data-theme="fly">` 時生效），見下方「主題」 |
| `og-image.jpg`、`og-image-fly.jpg` | 分享預覽卡片（1200×630，由 `poster_2.jpg` 裁切＋「To. TAEYEON」字樣）。`<head>` 的 og:image／twitter:image 目前用 `og-image.jpg`（酒紅版）；**11/30 後可把 og:image、twitter:image 改成 `og-image-fly.jpg`**（水藍版，爬蟲看不到 JS，只能手動改） |
| `manifest.webmanifest` | 加到手機主畫面設定（standalone、`#0d0a0b`，不做離線快取）；圖示 `icon-192.png`、`icon-512.png`、`icon-maskable-512.png`（由 `apple-touch-icon.png` 簽名圖放大，maskable 版內容縮在中央安全區） |
| `*.webp` | 每張 `p*.jpg`、`cover_2.jpg`、`poster_2.jpg` 都有同名 `.webp`（品質 80；跑馬燈圖寬度上限 900px、背景 1920px）。原 jpg 保留當備援 |
| `unspecial.ics` | 11/30《Unspecial》回歸的行事曆提醒（前一天、前一小時） |

## 網站各區塊（由上到下）
1. **開場相簿動畫**（`#bookintro`）：酒紅布面相簿，封面小窗是專輯封面，寫「SONE」與「every day with TAEYEON」；點一下翻開，內頁是拍立得風的宣傳圖。同一個分頁只播一次（sessionStorage `bkseen`）。
2. **城市／語言切換**：首爾 ko、澳門與香港 zh-HK、曼谷 th、台北 zh-TW、東京 ja，再加 EN。
3. **票券區**：標題、headline、最後更新日期；下方橫向倒數「天／時／分／秒」（`cdRun()`）。開演時間官方未公布前暫定當地 19:00（`CDTZ` 為各城市時區）。
4. **重要日期（data-tab=alerts）**（Bodoni 雜誌字標題「Key Dates」＋說明小字）：先是「🔔 回歸提醒」卡片（加入 iPhone 行事曆 `.ics`／Google 日曆），接著是「🎫 F.L.Y. 台北場」專區卡片（`#taipei`），最後是 `meta.alerts`。
4-1. **F.L.Y. 台北場專區**（`<div class="tpcard" id="taipei">`，`renderTaipei(D)` 產生內容）：日期場地、主辦遠雄創藝、開演時間／開賣時間／會員預購／票價／售票平台／實名制（讀 data.json 台北 `ticket`，空字串顯示「待公布」）、「最新狀況」（`meta.alerts` 中文字含「台北」且含售票/預購/開賣/票價的那則）、`ticket.onsale` 是 ISO 時間時才出現「加入 iPhone 行事曆（data: URL 的 .ics，前一天＋前一小時提醒）／Google 日曆」按鈕；交通重點（國父紀念館站 5/4 號出口、公車站、停車、散場、入場 Gate；來源 TVBS、聯合新聞網、中央社，寫在卡片底部）；搶票準備清單（勾選存 localStorage `ty-tpchk`，平台未公布時寫「平台公布後更新」）。網址 `#taipei` 直接切到 TAENG DATE 並捲到卡片；票券卡倒數下方與巡演場次台北那列有「台北場專區 →」連結。
5. **every day with TAEYEON**：照片跑馬燈，不顯示任何文字說明、篩選或連結；點照片放大。照片清單是 `index.html` 裡的 `PH` 陣列（寬高），用 `.filter((p,i)=>![...].includes(i))` 隱藏不要的（目前隱藏 p002、p003、p005，有 Sunny Date 浮水印）。
6. **MV 歌單**：嵌入式播放器，播完自動下一首，讀 `songs.js`。標題右邊有「🎲 今天聽什麼」按鈕（`#mvrand`／`randMv()`）：從目前篩選（全部／抒情／輕快）的歌隨機挑一首直接播，不會連續兩次同一首，清單標示並捲到該首；文字是多語系字典的 `rand`。
6-1. **TAENG LIVE**（原名 LIVE CLIP；Bodoni 標題「Taeng Live」，緊接在 MV 歌單後面）：官方 Live Clip（錄音室現場版），讀 `liveclips.js`（檔名、`LIVECLIPS` 變數、`data-tab="liveclip"` 都沿用舊名）；外觀與互動同 TAENG LOG（共用 `vidList()`），不分頁。
6-2. **TAENG DANCE**（Bodoni 標題，在 TAENG LIVE 後面、TAENG LOG 前面）：舞蹈練習與舞台影片，讀 `dance.js`；外觀與互動同 TAENG LOG（共用 `vidList()`），不分頁。
6-3. **TAENG BEHIND**（Bodoni 標題，在 TAENG DANCE 後面、TAENG LOG 前面）：每次回歸的 MV、錄音、封面拍攝幕後，讀 `behind.js`；外觀與互動同 TAENG LOG（共用 `vidList()`），小分頁依專輯切換。
7. **TAENG LOG**（Bodoni 標題）：泰妍官方頻道的幕後與旅行 vlog，讀 `logs.js`；youtube-nocookie 嵌入播放器＋可捲動清單，用小分頁切換「집 나간 탱log」「TAENG LOG」「INVlogU」（2022《INVU》時期的 vlog），預設載入第一支但不自動播放。
7-0. **TAENG TALK**（Bodoni 標題，在 TAENG LOG 後面、TAENG CONCERT 前面）：聊天談心（탱나무숲）、美妝篇（탱코덕）、特別企劃、綜藝客串（節目官方頻道的完整集數），讀 `relax.js`；外觀與互動同 TAENG LOG，小分頁切換四個系列。
7-1. **TAENG CONCERT**（Bodoni 標題，緊接在 TAENG TALK 後面）：2019–2025 巡演紀錄，讀 `concerts.js`；小分頁切換巡演，台北相關放最前面並標「台北」；最後一個分頁「回歸直播」放回歸倒數直播重播。和 TAENG LIVE 是分開的兩個區塊。
8. 巡演場次、時間軸等。

**分頁按鈕**（`#tabbar`，在照片跑馬燈下面）：按鈕名稱依序為 TAENG NEWS、TAENG DATE、TAENG MV、TAENG LIVE、TAENG DANCE、TAENG BEHIND、TAENG LOG、TAENG TALK、TAENG CONCERT（所有語言都顯示英文，按鈕沒有 data-i18n；區塊標題仍是「最新消息」「Key Dates」「MV 歌單」等，照語言切換）。平常只顯示 TAENG NEWS（最新消息，含巡演場次、時間軸），TAENG DATE（重要日期）、TAENG MV（MV 歌單）、TAENG LIVE、TAENG DANCE、TAENG BEHIND、TAENG LOG、TAENG TALK、TAENG CONCERT 要按按鈕才出現（按鈕依此順序）（`data-tab` 區塊＋`showTab()`）。切走時會停掉影片。網址加 `#alerts`、`#mv`、`#liveclip`（或 `#live`）、`#dance`、`#behind`、`#taenglog`、`#relax`、`#concert` 可以直接打開該分頁。

**🔍 找影片**（分頁列最右邊的 `#srchbtn`，點開 `#srch` 搜尋框＋下拉結果）：即時搜尋所有影片資料檔的 t、n、s、a、b（不分大小寫，NFKC 正規化），每筆顯示 mqdefault 縮圖、標題、所屬區（＋分頁名），最多 30 筆，標題符合的排前面；點一筆或 Enter → `showTab` 切到該區、切小分頁（`VL[區].pick(x)`，由 `vidList()` 提供；MV 用 `playMv`）、播放並捲到播放器，然後關閉。上下鍵選、Esc 關閉、點外面關閉；沒結果顯示「找不到，換個關鍵字試試」。**中韓英歌名別名表是 `index.html` 裡的 `SRCH_ALIAS`**（例如 四季／사계／Four Seasons、火花／불티／Spark、Wendy／웬디），只放確定的對照；搜尋相關多語系字串為 `srchAria`、`srchPh`、`srchNone`（在 `Object.assign(S.zh,…)` 那段）。

**影片區原則**：
- 所有影片區（含 MV 歌單）的播放器改成「高畫質封面（maxresdefault → sddefault → hqdefault），點了才載入 iframe」：共用 `ytCover()`／`ytSlot()`（MV 歌單點了才建立 YT.Player），切分頁時把 iframe 換回封面。
- 所有影片區只放官方頻道的完整版，不放 shorts、預告、片段；同一支影片只放在一個區。
- 例外：`concerts.js` 分頁「2018 Japan Showcase」的〈Indestructible〉（Japan Showcase Tour 2018，id `0WoVtfnOuwI`）是非官方頻道上傳，使用者 2026-11-27 明確要求破例加入，不要刪掉。
- 2016 Butterfly Kiss、2017 PERSONA 演唱會查過沒有官方影片。
- 《Unspecial》主打 MV 發布後加到 `songs.js` 最後。
- 《Unspecial》回歸後，官方頻道的 MV／錄音／封面幕後完整版可加到 `behind.js` 新分頁「Unspecial」（放最前面），回歸倒數直播重播可加到 `concerts.js` 的回歸直播分頁最前面。

## 台北場 ticket 欄位（data.json）
`tour` 中 `_id:"taipei"` 的項目有 `ticket:{onsale, presale, price, platform, realname, showtime}`，全部是字串，空字串＝待公布（卡片顯示「待公布」）：
- `onsale`：開賣時間，**ISO 格式含 +08:00**，例如 `"2027-01-10T12:00:00+08:00"`（有時間才會出現加入行事曆按鈕）
- `presale`：會員預購（可用 ISO 時間，或簡短文字如「GL 會員 1/8 12:00」）
- `price`：票價（例如「NT$ 6,880／5,880／…」）、`platform`：售票平台、`realname`：實名制規定（簡短）、`showtime`：開演時間（例如「19:00」）
- **每日更新排程在台北場售票資訊公布後，要把開賣時間（ISO 格式含 +08:00）、預購、票價、平台、實名制、開演時間填進 data.json 的 taipei ticket 欄位**（用 Python json 讀寫，`ensure_ascii=False, indent=1`，其他欄位不要動）。

## alerts 與 news 的分工
- **alerts（重要日期分頁，`meta.alerts`）**：只放尚未到期、需要使用者行動的日期（開賣、預購、發行）；不寫回歸提醒框已涵蓋的事件；過期就刪。
- **news（最新消息，`news`）**：放已發生的新聞報導。同一事件只留一則，有後續就合併到最新那則（更新日期、標題、來源、摘要），不另加新則。
- 不要因為 alerts 有某件事，就再加一則內容相同的 news。

## 主題
- **classic**（深酒紅黑底，現在的樣子）：用到台灣時間 **2026-11-30 17:00**（《Unspecial》發行）為止。樣式在 `index.html` 的 `<style>`，不要為了 fly 去改。
- **fly**（F.L.Y. 水下藍）：11/30 17:00 之後自動變成預設。淺色＝淺水藍→湖水藍漸層、深色模式＝深海；內容都放在毛玻璃卡片上；英文大標題（`.edw`、票券卡的 F.L.Y.）用草寫字 Great Vibes；頂端有水面光紋、少量氣泡（`prefers-reduced-motion` 時全部關掉）；開場改成「浮上水面」轉場（舊主題的書本動畫不變）。開場動畫每個分頁每種主題只播一次（sessionStorage `bkseen` / `bkseen-fly` 分開記），`?theme=fly` 預覽時每次都播（`prefers-reduced-motion` 時不播）。
- **切換邏輯**：`index.html` `<head>` 最前面的小腳本決定。網址 `?theme=fly` → fly；`?theme=classic` → 強制舊風格；否則 `Date.now() >= 2026-11-30T17:00:00+08:00` 就 fly。fly 時在 `<html>` 加 `data-theme="fly"` 並改 `theme-color`。不用 localStorage 記，預覽完拿掉參數就回到原本的樣子。
- **樣式位置**：fly 的樣式全部在 `theme-fly.css`，每條都以 `[data-theme="fly"]` 開頭；只屬於 fly 的元素加 `fly-only` class（舊主題自動隱藏），例如光紋 `.fly-surface`、氣泡 `.fly-bubbles`、開場 `.fly-intro`、售票提醒卡 `#flyremind`。
- fly 主題下「重要日期」的《Unspecial》回歸提醒（`#remind`）會隱藏，改顯示 `#flyremind`「🎫 台北場售票提醒」占位卡。**台北場售票時間公布後，要在 `#flyremind` 補上日期，並加「加入 iPhone 行事曆（.ics）／Google 日曆」按鈕（沿用 `.remind-b` / `.rbtn`）。**

## 風格
classic：紅黑專輯風（`--rose` 紅、深色布紋背景）；fly：水下藍，重點色亮白＋淡青 `#7fe3f0`（見「主題」）、標題用 Bodoni Moda 雜誌字（`.edw`）。手機寬度也要好看。

## 每日自動更新
排程「泰妍應援站每日更新」每天台灣時間 08:50 執行：搜尋新聞 → 更新 `data.json`（必要時 `songs.js`）→ commit「每日更新 YYYY-MM-DD」→ 直接 push 到 `main`。不要動 `index.html` 和圖片。
每日更新排程若發現官方頻道新的 TAENG LOG／탱log 影片，可加到 `logs.js`（同系列由新到舊，放該系列最前面）。
每日更新排程若發現官方頻道新的 Live Clip 可加到 `liveclips.js`；2027《F.L.Y.》巡演紀錄出來後在 `concerts.js` 加 2027 分頁（放最前面），台北場放最前面。
每日更新排程在台北場售票資訊公布後，要把開賣時間（ISO 格式含 +08:00）、預購、票價、平台、實名制、開演時間填進 data.json 的 taipei ticket 欄位。
每日排程若發現 탱나무숲／탱코덕 新的完整集數可加到 `relax.js`（該系列最前面）、新的 Dance Practice 可加到 `dance.js`（最前面）。

## 瀏覽統計
- 用 GoatCounter（不用 cookie，只統計頁面瀏覽），統計頁 https://taeyeonwith1.goatcounter.com
- 計數程式在 `index.html`（和 `mv.html`）的 `</body>` 前：`<script data-goatcounter="https://taeyeonwith1.goatcounter.com/count" async src="https://gc.zgo.at/count.js"></script>`，**不要刪掉**。

## 待辦
- 台北場售票時間公布後：填 data.json 的 taipei `ticket`（台北場專區會自動顯示行事曆按鈕），並更新 fly 主題的 `#flyremind` 卡片（日期＋行事曆按鈕）。
- 六場的售票時間公布後：在「重要日期」的提醒卡片加上各場售票的「加入行事曆」按鈕（售票前一天提醒）。
- 官方公布開演時間後，更新倒數的 19:00。
- 使用者可能之後會傳現場影片，做成電腦版的背景影片（手機維持專輯封面）。

## 圖片與字型（加速）
- **WebP**：網頁優先用 `.webp`，jpg 是備援。跑馬燈 `PH` 清單產生 `pNNN.webp` 網址，`<img>` 的 `onerror` 會退回同名 `.jpg`；燈箱 `#lbimg` 也一樣；`poster_2` 用 `<picture><source type="image/webp">`；`cover_2` 背景用 `image-set()`（前面保留一條純 jpg 的宣告當備援）。
- **使用者傳新照片時也要產生同名 webp**（`pip install pillow`；`Image.save(name+".webp","WEBP",quality=80,method=6)`，跑馬燈圖寬度超過 900px 才縮小，不裁切、不改內容），再把寬高加進 `PH`。
- 照片 alt：跑馬燈與燈箱沒有 caption 時是「太妍照片 N」（依顯示順序編號），跑馬燈重複的那一輪 alt=""。
- **Google Fonts 字型清單**（`<head>` 的 link）：Bricolage Grotesque 800（大標題，700 也會用到 800）、Noto Sans TC 400/500/700、Noto Sans KR／JP／Thai 400/700、JetBrains Mono 500、Bodoni Moda 正體 500/700＋斜體 400（`.edw` 等雜誌字標題）。fly 主題的草寫字 **Great Vibes** 只在 fly 時由 `<head>` 主題小腳本動態插入 link。有 preconnect 到 fonts.googleapis.com 與 fonts.gstatic.com。新增字型／字重要記得更新這裡。
