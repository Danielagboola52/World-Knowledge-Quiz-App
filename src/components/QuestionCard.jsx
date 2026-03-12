import Timer from "./Timer";

export default function QuestionCard({
  question,
  questionNumber,
  total,
  selected,
  onSelect,
  onExpire,
}) {
  const answered = selected !== null;

  return (
    <div className="quiz-screen">
      <div className="quiz-top">
        <span className="question-count">
          Question {questionNumber} of {total}
        </span>
        <Timer onExpire={onExpire} questionIndex={questionNumber} />
      </div>

      <div className="question-card">
        <h2 className="question-text">{question.question}</h2>

        <div className="options-grid">
          {question.options.map((option) => {
            let cls = "option-btn";
            if (answered) {
              if (option === question.answer) cls += " correct";
              else if (option === selected) cls += " wrong";
              else cls += " dimmed";
            }
            return (
              <button
                key={option}
                className={cls}
                onClick={() => !answered && onSelect(option)}
                disabled={answered}
                aria-label={option}
              >
                {option}
              </button>
            );
          })}
        </div>

        {answered && (
          <p className="feedback">
            {selected === question.answer
              ? "✅ Correct!"
              : selected === "TIMEOUT"
              ? `⏰ Time's up! The answer was ${question.answer}`
              : `❌ Wrong! The correct answer is ${question.answer}`}
          </p>
        )}

        {answered && (
          <button className="next-btn" onClick={onExpire}>
            {questionNumber === total ? "See Results" : "Next Question →"}
          </button>
        )}
      </div>
    </div>
  );
}