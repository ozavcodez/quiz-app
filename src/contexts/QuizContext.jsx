import React, { createContext, useState, useEffect } from 'react';

export const QuizContext = createContext();

const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: "Paris"
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Jupiter", "Venus", "Saturn"],
    correctAnswer: "Mars"
  },
  // Add more questions here
];

const QUIZ_TIME = 600; // 10 minutes in seconds

export const QuizProvider = ({ children }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizEnded, setQuizEnded] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(QUIZ_TIME);

  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem('quizState'));
    if (savedState) {
      setCurrentQuestion(savedState.currentQuestion);
      setUserAnswers(savedState.userAnswers);
      setQuizStarted(savedState.quizStarted);
      setQuizEnded(savedState.quizEnded);
      setTimeRemaining(savedState.timeRemaining);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('quizState', JSON.stringify({
      currentQuestion,
      userAnswers,
      quizStarted,
      quizEnded,
      timeRemaining
    }));
  }, [currentQuestion, userAnswers, quizStarted, quizEnded, timeRemaining]);

  useEffect(() => {
    let timer;
    if (quizStarted && !quizEnded) {
      timer = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            setQuizEnded(true);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [quizStarted, quizEnded]);

  const startQuiz = () => {
    setQuizStarted(true);
    setTimeRemaining(QUIZ_TIME);
  };

  const endQuiz = () => {
    setQuizEnded(true);
  };

  const handleAnswerSelect = (questionId, answer) => {
    setUserAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const calculateScore = () => {
    return questions.reduce((score, question) => {
      return score + (userAnswers[question.id] === question.correctAnswer ? 1 : 0);
    }, 0);
  };

  return (
    <QuizContext.Provider value={{
      questions,
      currentQuestion,
      setCurrentQuestion,
      userAnswers,
      handleAnswerSelect,
      quizStarted,
      startQuiz,
      quizEnded,
      endQuiz,
      timeRemaining,
      calculateScore
    }}>
      {children}
    </QuizContext.Provider>
  );
};