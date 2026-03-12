export default function Welcome({ onStart, darkMode, toggleDark }) {
    return (
      <div className="welcome-screen">
        <button className="theme-toggle" onClick={toggleDark} aria-label="Toggle theme">
          {darkMode ? "☀︎" : "☽"}
        </button>
  
        <div className="welcome-card">
          <div className="globe">🌍</div>
          <h1>World Geography Quiz</h1>
          <p className="welcome-desc">
            Test your knowledge of world capitals, rivers, countries and more!
          </p>
  
          <ul className="quiz-info">
            <li>⏱️ 60 seconds per question</li>
            <li>✅ Instant answer feedback</li>
            <li>⚠️ Unanswered questions deduct 1 point</li>
            <li>🔀 Questions shuffle every round</li>
          </ul>
  
          <p className="pick-label">How many questions?</p>
          <div className="count-options">
            {[10, 20, 50].map((n) => (
              <button key={n} className="start-btn count-btn" onClick={() => onStart(n)}>
                {n} Questions
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }