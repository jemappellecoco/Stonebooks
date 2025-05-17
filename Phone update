

# 📱 手機 GitHub 網頁開發完整流程指南（Termux + Acode）

最後更新：2025-05-17

---

## ✅ 環境需求

- Termux（從 Google Play 下載）
- Acode（從 Google Play 下載）
- GitHub 帳號
- 已建好的 repo（例如 `Stonebooks`）

---

## 🔧 第一次設定流程（只做一次）

### 1. 安裝 Git 和 SSH 金鑰
```bash
pkg update && pkg install git openssh -y
ssh-keygen -t ed25519 -C "你的 GitHub 信箱"
cat ~/.ssh/id_ed25519.pub

2. 把顯示的金鑰內容貼到 GitHub

> GitHub → Settings → SSH and GPG keys → New SSH Key




---

🚀 平常操作流程（手機編輯 + 推送）

1. 打開 Termux，clone repo（第一次用）

git clone git@github.com:jemappellecoco/Stonebooks.git
cd Stonebooks

2. 用 Acode 打開資料夾

路徑為：/data/data/com.termux/files/home/Stonebooks



---

3. 修改完檔案後，回 Termux：

git add .
git commit -m "update 說明"
git push


---

🌀 將手機分支合併進 main（讓網站更新）

如果你是在其他分支（如 coco_phone）開發，請執行以下其中一種方式：

✅ GitHub 網頁操作（推薦）

1. 前往 GitHub repo


2. 點「Compare & pull request」


3. 建立並合併 PR



✅ Termux 指令操作

git checkout main
git pull
git merge coco_phone
git push


---

🌐 本地預覽網站（像 Live Server）

安裝：

pkg install nodejs
npm install -g http-server

預覽：

cd Stonebooks
http-server .

然後在手機瀏覽器輸入：

http://localhost:8080/頁面檔案.html


---

📝 小技巧指令速查表

功能	指令

建立新分支	git checkout -b 分支名
查看目前分支	git branch
設定遠端為 SSH	git remote set-url origin git@...
檢查遠端網址	git remote -v
快速預覽網站	alias serve="cd ~/Stonebooks && http-server ."


