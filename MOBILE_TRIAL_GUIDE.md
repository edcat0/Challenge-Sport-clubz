# Mobile Trials & GitHub Deployment Guide for `edcat0`
**App Title**: Challenge - Sports clubz  
**Target Platforms**: Android (Mobile WebAPK / APK) & Apple iOS (Safari PWA / TestFlight)  
**GitHub Account**: `edcat0`  
**Target Repository**: `https://github.com/edcat0/challenge-sports-clubz`

---

## ⚡ Option 1: Instant 30-Second Mobile Trial (No Installation Required!)

Once uploaded to GitHub, GitHub Pages will automatically host the app at:
👉 **`https://edcat0.github.io/challenge-sports-clubz/`**

### 📱 1. Testing on Android:
1. Open the URL in **Google Chrome** on your Android smartphone.
2. Tap the **"..." (More options)** menu in Chrome or the pop-up banner at the bottom: **"Add Challenge to Home screen"** / **"Install App"**.
3. Tap **Install**.
4. The app will install as a native **WebAPK** with full-screen experience, custom icon, splash screen, and offline capabilities!

### 🍏 2. Testing on Apple (iPhone & iPad):
1. Open the URL in **Safari** on your iPhone or iPad.
2. Tap the **Share button** (the square with an arrow pointing upward ⎋).
3. Scroll down and tap **"Add to Home Screen" (홈 화면에 추가)**.
4. Name it **Sport Clubz** and tap **Add**.
5. Launch the app directly from your iOS Home Screen! It runs in standalone full-screen mode without Safari navigation bars.

---

## 🛠 Option 2: Uploading the Files to GitHub (`edcat0`)

You have two easy ways to push these files to your GitHub account:

### Method A: Web Drag-and-Drop (Easiest - 1 Minute)
1. Go to [https://github.com/new](https://github.com/new) and log in as `edcat0`.
2. Repository name: `challenge-sports-clubz`.
3. Set to **Public** and leave "Initialize with README" unchecked, then click **Create repository**.
4. On the next screen, click **"uploading an existing file"**.
5. Drag and drop all files from the extracted `challenge_sports_clubz_github_repo_v1.3.zip` (available on your Google Drive).
6. Click **Commit changes**.
7. Go to **Settings > Pages > Build and deployment > Source**, select **GitHub Actions** (or Deploy from branch: `main`).

### Method B: Git Command Line
```bash
# In your local project directory:
git init
git add .
git commit -m "feat: complete Challenge - Sports clubz app v1.3 with PWA & mobile trials"
git branch -M main
git remote add origin https://github.com/edcat0/challenge-sports-clubz.git
git push -u origin main
```

---

## 📦 Option 3: Native Android APK & iOS IPA (Capacitor)

The repository includes `capacitor.config.json` and `.github/workflows/android-build.yml`.

### Android APK via GitHub Actions (Zero Local Setup):
1. In your GitHub repository, click the **Actions** tab.
2. Click **"Build Android Mobile APK"** on the left sidebar.
3. Click **Run workflow**.
4. After ~2 minutes, download the generated `app-debug.apk` directly from the workflow summary and install it on any Android phone!

### Local Capacitor Commands:
```bash
npm install
npx cap add android    # Generates Android Studio native project
npx cap add ios        # Generates Xcode iOS native project
npx cap sync
```
