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
| `data.json` | 最新消息、巡演場次、提醒（meta / tour / news；`mvs`、`photos` 保持 `[]`） |
| `songs.js` | MV 歌單 `SONGS`（格式見檔案開頭註解） |
| `logs.js` | TAENG LOG 影片清單 `LOGS`（泰妍官方頻道 @taeyeonofficial 的「집 나간 탱log」與「TAENG LOG」系列，格式見檔案開頭註解）。log 系列只放完整版，不放 Teaser／預告片。 |
| `concerts.js` | CONCERT 巡演紀錄 `CONCERTS`（泰妍官方頻道，分頁 `s`：2025 The TENSE、2023 The ODD Of LOVE；`tp:true` 為台北相關，放各分頁最前面並標「台北」） |
| `liveclips.js` | LIVE CLIP 清單 `LIVECLIPS`（泰妍官方頻道的 Live Clip，依專輯由新到舊，不分頁） |
| `mv.html` | 獨立的完整 MV 播放器，有「← 回到應援站」連結 |
| `p001.jpg`–`p136.jpg` | 跑馬燈照片，已依風格排序 |
| `cover_2.jpg` | 背景：《Unspecial》紅色刺繡專輯封面 |
| `poster_2.jpg` | F.L.Y. 巡演宣傳圖（巡演日期下的小卡） |
| `favicon.png`、`apple-touch-icon.png` | 網站圖示：泰妍簽名（白底黑字）。`index.html` 引用時帶 `?v=sig2`，換圖要改版本號 |
| `theme-fly.css` | F.L.Y. 水下主題的全部樣式（只在 `<html data-theme="fly">` 時生效），見下方「主題」 |
| `unspecial.ics` | 11/30《Unspecial》回歸的行事曆提醒（前一天、前一小時） |

## 網站各區塊（由上到下）
1. **開場相簿動畫**（`#bookintro`）：酒紅布面相簿，封面小窗是專輯封面，寫「SONE」與「every day with TAEYEON」；點一下翻開，內頁是拍立得風的宣傳圖。同一個分頁只播一次（sessionStorage `bkseen`）。
2. **城市／語言切換**：首爾 ko、澳門與香港 zh-HK、曼谷 th、台北 zh-TW、東京 ja，再加 EN。
3. **票券區**：標題、headline、最後更新日期；下方橫向倒數「天／時／分／秒」（`cdRun()`）。開演時間官方未公布前暫定當地 19:00（`CDTZ` 為各城市時區）。
4. **重要日期（data-tab=alerts）**（Bodoni 雜誌字標題「Key Dates」＋說明小字）：先是「🔔 回歸提醒」卡片（加入 iPhone 行事曆 `.ics`／Google 日曆），再來是 `meta.alerts`。
5. **every day with TAEYEON**：照片跑馬燈，不顯示任何文字說明、篩選或連結；點照片放大。照片清單是 `index.html` 裡的 `PH` 陣列（寬高），用 `.filter((p,i)=>![...].includes(i))` 隱藏不要的（目前隱藏 p002、p003、p005，有 Sunny Date 浮水印）。
6. **MV 歌單**：嵌入式播放器，播完自動下一首，讀 `songs.js`。
6-1. **LIVE CLIP**（Bodoni 標題，緊接在 MV 歌單後面）：官方 Live Clip（錄音室現場版），讀 `liveclips.js`；外觀與互動同 TAENG LOG（共用 `vidList()`），不分頁。
7. **TAENG LOG**（Bodoni 標題）：泰妍官方頻道的幕後與旅行 vlog，讀 `logs.js`；youtube-nocookie 嵌入播放器＋可捲動清單，用小分頁切換「집 나간 탱log」「TAENG LOG」，預設載入第一支但不自動播放。
7-1. **CONCERT**（Bodoni 標題，緊接在 TAENG LOG 後面）：2023、2025 巡演紀錄，讀 `concerts.js`；小分頁切換巡演，台北相關放最前面並標「台北」。和 LIVE CLIP 是分開的兩個區塊。
8. 巡演場次、時間軸等。

**分頁按鈕**（`#tabbar`，在照片跑馬燈下面）：平常只顯示「最新消息」（含巡演場次、時間軸），重要日期、MV 歌單、LIVE CLIP、TAENG LOG、CONCERT 要按按鈕才出現（`data-tab` 區塊＋`showTab()`）。切走時會停掉影片。網址加 `#alerts`、`#mv`、`#liveclip`、`#taenglog`、`#concert` 可以直接打開該分頁。

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

## 待辦
- 台北場售票時間公布後：更新 fly 主題的 `#flyremind` 卡片（日期＋行事曆按鈕）。
- 六場的售票時間公布後：在「重要日期」的提醒卡片加上各場售票的「加入行事曆」按鈕（售票前一天提醒）。
- 官方公布開演時間後，更新倒數的 19:00。
- 使用者可能之後會傳現場影片，做成電腦版的背景影片（手機維持專輯封面）。
