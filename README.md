# Challenge - Sports clubz (스포츠 클럽즈)
> **"Sport community app for all sports for everyone"**  
> Multilingual Sports Social, Competitive Ladder, Interactive Map & Payment Platform  
> Supported Languages: **English, 한국어, 日本語, 简体中文, 繁體中文, Français, Deutsch**

Connected Google Sheet Database: [challenger - sports clubz](https://docs.google.com/spreadsheets/d/13rrInmHDEEx0vfDC2w8ghNF7DfIRdDtaebz0GxEJb3I/edit)

---

## 🚀 Complete Feature Checklist & Architecture (Items 1-22)

| # | Requirement | Implementation & Technical Architecture |
|---|---|---|
| **1** | **Personal Data** | User profile model (`USR-7729-KR`), 6 sports interests, match history, win/loss stats, score, rank, and contact. |
| **2** | **Access to Local Teams** | Directory of local clubs/teams with detailed rosters, training schedules, session venues, and entry requirements. |
| **3** | **Local Ranking** | Multi-tier ranking matrix per sport category across City, Regional, National, and Global scopes for both individuals and clubs. |
| **4** | **Payment System** | Secure multi-gateway checkout (KakaoPay, Apple Pay, Google Pay, Credit Card, PayPal) for club dues, team court fees, and tournament entry. |
| **5** | **Integrated Map** | Real-time interactive map showing nearby sports clubs, active players broadcasting location, and official competitions. |
| **6** | **Club & Team Management** | Comprehensive club card interface with member counts, session schedules, joining requirements, and registration wizard. |
| **7** | **Challenge & Consent System** | Lower rankers challenge higher rankers; match records require mutual confirmation and dual-party consent before rank update. |
| **8** | **Information Security** | Adherence to GDPR, ISO 27001, Korean PIPA (개인정보보호법), and Location Information Protection Act. |
| **9** | **User Confirmation & Consent** | Mandatory onboarding and privacy modal requiring explicit user agreement before location exposure or ranking calculation. |
| **10** | **Real-Time Google Map** | Interactive geospatial mapping engine with geocoded pins, filtering, custom badges, and live location broadcasting. |
| **11** | **Category & Regional Rankings** | Dynamically filtered leaderboards by sport category (Badminton, Tennis, Freediving, Climbing, Underwater Hockey, Football) and region. |
| **12** | **'Challenge' Engine (2~3 Ranks Above)** | Challenge engine strictly filtering opponents to 2~3 ranks above user's current standing in the same sport; rookie baseline rank = 999. |
| **13** | **Clubs Live Preview** | Map-linked preview pins with venue address, schedule, contact, monthly dues, and instant "Participate" action. |
| **14** | **AI Matching Hub** | Top-bar AI generator: 1) Random partner selection, 2) Random sport suggestion, 3) Random destination club joining (for travel). |
| **15** | **Discover Live Map Search** | Shows active clubs and nearby individuals who consented to broadcast their live location for immediate 1:1 sports meetings. |
| **16** | **Top Language Selection (7 Languages)** | Comprehensive i18n support across 7 languages: **English, 한국어, 日本語, 简体中文, 繁體中文, Français, Deutsch**. |
| **17** | **Freediving & Climbing Mockup Data** | Enriched sample database and Google Sheet with Freediving (*Deep Blue Freediving, Jeju Bluehole Divers*) and Climbing (*The Climb Boulders, Peak Hunters*). |
| **18** | **All Sport Categories & Top User Selected Display** | Comprehensive sport catalog (Water, Climbing, Racket, Ball/Team, Martial Arts, Fitness) with interactive chips on top bar showing user's selected sports. |
| **19** | **Calendar with Nearest Clubs Sessions & Payments** | Interactive schedule view showing nearest club training sessions (e.g. Mapo 6.8km, Dongdaemun 1.2km) with exact court/guest fee and one-click booking payment. |
| **20** | **Discover Chat, Partner Ping, Group Chat & Club Rooms** | Small chat table on Discover for selected partners, partner ping with acceptance requirement, group chat initiation, member invitations, and dedicated club chatrooms. |
| **21** | **App Title Casing** | Formally standardized app name as **'Challenge - Sports clubz'** across all views, metadata, and documentations. |
| **22** | **Project Group Publish Package** | Fully bundled standalone HTML, CSS, modular JS, schema, and ZIP archive prepared for internal publishing and staging. |

---

## 📁 Source Code & Directory Layout

- `index.html`: Main responsive Single Page Application UI structure.
- `app.js`: Core reactive state, i18n localization engine, map controller, challenge rules, chat engine, calendar, and AI algorithms.
- `styles.css`: Visual styling, modern dark mode, and custom map marker design.
- `challenge_sport_clubz_standalone.html`: Single-file bundle ready to open in any web browser without local server setup.
- `database_schema.json`: JSON structure matching the Google Sheets tabs (`Users`, `Clubz`, `Record`, `Ranking`).

---

## 🛠 Deployment & Publishing Guide (for Project Group)

1. **Direct Web Browser Execution**:
   - Double-click `challenge_sport_clubz_standalone.html` in Chrome, Safari, Edge, or Firefox.
2. **Web Hosting (Vercel / GitHub Pages / Firebase)**:
   - Deploy the contents of the `sport_clubz_app_bundle.zip` directly to any static web hosting service.
3. **Google Drive Storage & Collaboration**:
   - All code, archives, and documentation are stored in the project group's shared Google Drive folder `App - dev.`.

---

## 📱 Mobile Trials (Android & Apple iOS)
For complete instructions on running mobile trials on Android and iPhone for GitHub user `edcat0`, see [`MOBILE_TRIAL_GUIDE.md`](./MOBILE_TRIAL_GUIDE.md).
- **Android**: Installable WebAPK via Chrome or automated APK via GitHub Actions.
- **Apple iOS**: Full-screen standalone PWA via Safari "Add to Home Screen" or Capacitor Xcode archive.
