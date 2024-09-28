import React, { useContext } from 'react';
import { QuizContext } from '../contexts/QuizContext';

const Sidebar = () => {
  const { questions, currentQuestion, setCurrentQuestion, userAnswers } = useContext(QuizContext);

  return (
    <div className="sidebar">
      <h2>Questions</h2>
      <ul>
        {questions.map((question, index) => (
          <li
            key={question.id}
            className={`
              ${index === currentQuestion ? 'active' : ''}
              ${userAnswers[question.id] ? 'answered' : ''}
            `}
            onClick={() => setCurrentQuestion(index)}
          >
            Question {index + 1}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;