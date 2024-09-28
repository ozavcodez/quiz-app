import React, { useContext } from 'react';
import { QuizContext } from '../contexts/QuizContext';

const QuestionDisplay = () => {
  const { 
    questions, 
    currentQuestion, 
    setCurrentQuestion, 
    userAnswers, 
    handleAnswerSelect 
  } = useContext(QuizContext);
  const question = questions[currentQuestion];

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className="question-display">
      <h2>Question {currentQuestion + 1}</h2>
      <p>{question.question}</p>
      <div className="options">
        {question.options.map((option) => (
          <button
            key={option}
            className={userAnswers[question.id] === option ? 'selected' : ''}
            onClick={() => handleAnswerSelect(question.id, option)}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="navigation-buttons">
        <button onClick={handlePrevious} disabled={currentQuestion === 0}>
          Previous
        </button>
        <button onClick={handleNext} disabled={currentQuestion === questions.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default QuestionDisplay;