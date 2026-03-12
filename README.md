# 🌍 World Geography Quiz App

A fast, responsive, browser-based quiz app to test your World Geography knowledge — built with **React + Vite**.

🔗 **Live Project URL:** https://danielagboola52.github.io/World-Knowledge-Quiz-App

---

## 📸 Preview

A sleek quiz experience with instant answer feedback, a countdown timer, session tracking, and full dark/light mode support.

---

## ✨ Features

- 🗺️ **50 World Geography questions** covering capitals, rivers, mountains, countries and more
- 🔢 **Choose your quiz length** — 10, 20, or 50 questions
- ⏱️ **60-second countdown timer** per question
- ✅ **Instant feedback** — answer buttons turn green or red after selection
- ❌ **Unanswered questions** skip automatically and deduct 1 point
- 🔀 **Shuffled questions** on every new round — never the same quiz twice
- 🏆 **Final results screen** showing score, percentage and all answers reviewed
- 🌙 **Dark & Light mode** toggle
- 📱 **Fully responsive** — works on mobile and desktop

---

## 🛠️ Built With

- **React 18** — Component-based UI
- **Vite** — Fast development and build tooling
- **CSS3** — Custom properties, animations, transitions
- **GitHub Pages** — Free static hosting via `gh-pages`

---

## 📁 Project Structure

```
World-Knowledge-Quiz-App/
├── public/
├── src/
│   ├── components/
│   │   ├── Welcome.jsx          # Start screen with question count selector
│   │   ├── QuestionCard.jsx     # Question display + answer buttons
│   │   ├── Timer.jsx            # 60s countdown progress bar
│   │   └── Results.jsx          # Final score + answer review
│   ├── data/
│   │   └── questions.js         # 50 World Geography questions
│   ├── App.jsx                  # Main state management + routing
│   ├── App.css                  # All styles + dark/light theming
│   └── main.jsx                 # React entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/Danielagboola52/World-Knowledge-Quiz-App.git
   ```

2. Navigate into the folder:
   ```bash
   cd World-Knowledge-Quiz-App
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser at `http://localhost:5173`

---

## 🚢 Deployment

This app is deployed on **GitHub Pages** using the `gh-pages` package.

To redeploy after changes:
```bash
npm run deploy
```

---

## 📋 Requirements Met

- [x] User is presented with a start screen and quiz details
- [x] User can choose 10, 20, or 50 questions
- [x] Questions are displayed as cards with multiple choice buttons
- [x] Answer buttons turn green (correct) or red (incorrect) after selection
- [x] Correct answers are always revealed after selection
- [x] Score is incremented for correct answers
- [x] Final score and all results are shown at the end
- [x] 60-second timer per question — skips and deducts 1 point on timeout
- [x] Questions are shuffled on every new round
- [x] Light and Dark mode toggle
- [x] Responsive on desktop and mobile

---

## Live Project Link 
https://danielagboola52.github.io/World-Knowledge-Quiz-App/

## Project Page URL
https://roadmap.sh/projects/quiz-app

## 👤 Author

**Daniel Agboola**  
GitHub: [@Danielagboola52](https://github.com/Danielagboola52)