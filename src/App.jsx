import React from 'react';
import { QuizProvider } from './contexts/QuizContext';
import QuizApp from './components/QuizeApp';

function App() {
  return (
    <QuizProvider>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <h1 className="text-3xl font-bold text-center mb-6">Quiz App</h1>
          <QuizApp/>
        </div>
      </div>
    </QuizProvider>
  );
}

export default App;