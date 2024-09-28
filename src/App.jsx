import React from 'react';
import { QuizProvider } from './contexts/QuizContext';
import QuizApp from './components/QuizeApp';
// import './App.css';

function App() {
  return (
    <QuizProvider>
      <div className="App">
        <h1>Quiz App</h1>
        <QuizApp />
      </div>
    </QuizProvider>
  );
}

export default App;