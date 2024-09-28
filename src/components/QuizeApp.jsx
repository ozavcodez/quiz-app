import React, { useContext } from 'react';
import { QuizContext } from '../contexts/QuizContext';
import QuestionDisplay from './QuestionDisplay';
import Sidebar from './Sidebar';
import QuizSummary from './QuizSummary';
import Timer from './Timer';

const QuizApp = () => {
  const { quizStarted, startQuiz, quizEnded } = useContext(QuizContext);

  if (!quizStarted) {
    return (
      <div className="flex justify-center items-center h-screen">
        <button
          onClick={startQuiz}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Start Quiz
        </button>
      </div>
    );
  }

  if (quizEnded) {
    return <QuizSummary />;
  }

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      <Sidebar className="w-full md:w-1/4 bg-gray-200 p-4" />
      <div className="w-full md:w-3/4 p-4">
        <Timer />
        <QuestionDisplay />
      </div>
    </div>
  );
};

export default QuizApp;