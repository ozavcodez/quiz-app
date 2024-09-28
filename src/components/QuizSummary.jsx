import React, { useContext } from 'react';
import { QuizContext } from '../contexts/QuizContext';

const QuizSummary = () => {
  const { questions, userAnswers, calculateScore } = useContext(QuizContext);
  const score = calculateScore();

  return (
    <div className="quiz-summary">
      <h2>Quiz Summary</h2>
      <p>Your Score: {score} out of {questions.length}</p>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <p>{question.question}</p>
            <p>Your Answer: {userAnswers[question.id] || 'Not answered'}</p>
            <p>Correct Answer: {question.correctAnswer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizSummary;