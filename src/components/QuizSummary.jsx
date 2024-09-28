import React, { useContext } from 'react';
import { QuizContext } from '../contexts/QuizContext';

const QuizSummary = () => {
  const { questions, userAnswers, calculateScore } = useContext(QuizContext);
  const score = calculateScore();

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Quiz Summary</h2>
      <p className="text-lg mb-6">Your Score: {score} out of {questions.length}</p>
      <ul className="space-y-6">
        {questions.map((question) => (
          <li key={question.id} className="border-b pb-4">
            <p className="font-semibold mb-2">{question.question}</p>
            <p className="mb-1">Your Answer: <span className={`font-medium ${userAnswers[question.id] === question.correctAnswer ? 'text-green-600' : 'text-red-600'}`}>{userAnswers[question.id] || 'Not answered'}</span></p>
            <p className="text-green-600">Correct Answer: {question.correctAnswer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizSummary;