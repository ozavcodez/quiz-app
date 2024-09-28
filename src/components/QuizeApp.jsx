import React, { useContext } from 'react';
import { QuizContext } from '../contexts/QuizContext';
// import Sidebar from './Sidebar';
import QuestionDisplay from './QuestionDisplay';
import Sidebar from './Sidebar';
import QuizSummary from './QuizSummary';
import Timer from './Timer';


const QuizApp = () => {
  const { quizStarted, startQuiz, quizEnded } = useContext(QuizContext);

  if (!quizStarted) {
    return <button onClick={startQuiz}>Start Quiz</button>;
  }

  if (quizEnded) {
    return <QuizSummary />;
  }

  return (
    <div className="quiz-container">
      <Sidebar/>
      <div className="main-content">
        <Timer />
        <QuestionDisplay />
      </div>
    </div>
  );
};

export default QuizApp;