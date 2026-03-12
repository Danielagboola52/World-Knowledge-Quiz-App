import { useState, useCallback } from "react";
import Welcome from "./components/Welcome";
import QuestionCard from "./components/QuestionCard";
import Results from "./components/Results";
import allQuestions from "./data/questions";
import "./App.css";

const STATES = { WELCOME: "welcome", QUIZ: "quiz", RESULTS: "results" };

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function App() {
  const [screen, setScreen]     = useState(STATES.WELCOME);
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent]   = useState(0);
  const [score, setScore]       = useState(0);
  const [answers, setAnswers]   = useState([]);
  const [selected, setSelected] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

  const handleStart = (count) => {
    const picked = shuffle(allQuestions).slice(0, count);
    setQuestions(picked);
    setScreen(STATES.QUIZ);
    setCurrent(0);
    setScore(0);
    setAnswers([]);
    setSelected(null);
  };

  const advance = useCallback(
    (answer) => {
      const correct = answer === questions[current].answer;
      const newAnswers = [...answers, answer];
      let newScore = score;
      if (correct) newScore += 1;
      if (answer === "TIMEOUT") newScore -= 1;

      setAnswers(newAnswers);
      setScore(newScore);
      setSelected(null);

      if (current + 1 >= questions.length) {
        setTimeout(() => setScreen(STATES.RESULTS), answer === "TIMEOUT" ? 0 : 1200);
      } else {
        setTimeout(() => setCurrent((c) => c + 1), answer === "TIMEOUT" ? 0 : 1200);
      }
    },
    [current, answers, score, questions]
  );

  const handleSelect = (option) => {
    setSelected(option);
    advance(option);
  };

  const handleExpire = useCallback(() => {
    if (selected === null) {
      setSelected("TIMEOUT");
      advance("TIMEOUT");
    } else {
      if (current + 1 >= questions.length) {
        setScreen(STATES.RESULTS);
      } else {
        setCurrent((c) => c + 1);
        setSelected(null);
      }
    }
  }, [selected, advance, current, questions]);

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      {screen !== STATES.WELCOME && (
        <button
          className="theme-toggle"
          onClick={() => setDarkMode((d) => !d)}
          aria-label="Toggle theme"
        >
          {darkMode ? "☀︎" : "☽"}
        </button>
      )}

      {screen === STATES.WELCOME && (
        <Welcome
          onStart={handleStart}
          darkMode={darkMode}
          toggleDark={() => setDarkMode((d) => !d)}
        />
      )}
      {screen === STATES.QUIZ && (
        <QuestionCard
          question={questions[current]}
          questionNumber={current + 1}
          total={questions.length}
          selected={selected}
          onSelect={handleSelect}
          onExpire={handleExpire}
        />
      )}
      {screen === STATES.RESULTS && (
        <Results
          score={score}
          total={questions.length}
          answers={answers}
          questions={questions}
          onRestart={() => setScreen(STATES.WELCOME)}
        />
      )}
    </div>
  );
}