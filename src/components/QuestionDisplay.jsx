import React, { useContext } from 'react';
import { QuizContext } from '../contexts/QuizContext';

const QuestionDisplay = () => {
  const { 
    questions, 
    currentQuestion, 
    setCurrentQuestion, 
    userAnswers, 
    handleAnswerSelect,
    endQuiz
  } = useContext(QuizContext);

  if (questions.length === 0) {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">No Questions Available</h2>
        <p className="text-lg mb-6">There are currently no questions in this quiz.</p>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;

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

  const handleSubmit = () => {
    endQuiz();
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Question {currentQuestion + 1}</h2>
      <p className="text-lg mb-6">{question.question}</p>
      <div className="space-y-4 mb-6">
        {question.options.map((option) => (
          <button
            key={option}
            className={`w-full py-2 px-4 rounded-md text-left transition-colors ${
              userAnswers[question.id] === option
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
            onClick={() => handleAnswerSelect(question.id, option)}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        {isLastQuestion ? (
          <button
            onClick={handleSubmit}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r"
          >
            Submit Quiz
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default QuestionDisplay;