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
    <div className="timer">
      Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
};

export default Timer;