export default function Results({ score, total, answers, questions, onRestart }) {
    const pct = Math.round((score / total) * 100);
    const emoji = pct >= 80 ? "🏆" : pct >= 50 ? "👏" : "📚";
  
    return (
      <div className="results-screen">
        <div className="results-card">
          <div className="results-hero">
            <span className="results-emoji">{emoji}</span>
            <h2>Quiz Complete!</h2>
            <p className="results-score">
              {score} / {total}
            </p>
            <p className="results-pct">{pct}% correct</p>
          </div>
  
          <div className="results-list">
            {questions.map((q, i) => {
              const userAnswer = answers[i];
              const correct = userAnswer === q.answer;
              const timeout = userAnswer === "TIMEOUT";
              return (
                <div key={q.id} className={`result-item ${correct ? "r-correct" : "r-wrong"}`}>
                  <p className="r-question">{q.question}</p>
                  <p className="r-answer">
                    {correct
                      ? `✅ ${userAnswer}`
                      : timeout
                      ? `⏰ Timed out — Answer: ${q.answer}`
                      : `❌ You said: ${userAnswer} — Answer: ${q.answer}`}
                  </p>
                </div>
              );
            })}
          </div>
  
          <button className="start-btn" onClick={onRestart}>
            Restart Quiz
          </button>
        </div>
      </div>
    );
  }