import React, { useContext } from 'react';
import { QuizContext } from '../contexts/QuizContext';

const Timer = () => {
  const { timeRemaining, endQuiz } = useContext(QuizContext);

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  if (timeRemaining <= 0) {
    endQuiz();
  }

  return (
    <div className="bg-gray-200 rounded-lg p-4 mb-4 text-center">
      <span className="font-bold text-lg">
        Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </span>
    </div>
  );
};

export default Timer;