import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const questions = [
  {
    id: 1,
    question: "What's your ideal climate?",
    options: ["Tropical", "Mediterranean", "Alpine", "Desert"]
  },
  {
    id: 2,
    question: "What type of activities do you enjoy most?",
    options: ["Beach & Water Sports", "Cultural & Historical", "Adventure & Hiking", "Urban Exploration"]
  },
  {
    id: 3,
    question: "What's your budget range?",
    options: ["Budget-friendly", "Mid-range", "Luxury", "Money is no object"]
  },
  {
    id: 4,
    question: "How long do you plan to travel?",
    options: ["Weekend getaway", "1-2 weeks", "2-4 weeks", "Extended travel"]
  }
];

const destinations = {
  "Tropical-Beach & Water Sports-Budget-friendly-Weekend getaway": "Bali, Indonesia",
  "Mediterranean-Cultural & Historical-Mid-range-1-2 weeks": "Greece",
  "Alpine-Adventure & Hiking-Luxury-2-4 weeks": "Switzerland",
  // Add more combinations as needed
};

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState("");

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Simple algorithm to determine destination
      const key = newAnswers.join("-");
      setResult(destinations[key] || "Thailand"); // Default to Thailand if no exact match
      setShowResult(true);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {!showResult ? (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-8">
            <div className="flex justify-between mb-4">
              <span className="text-sm text-gray-500">Question {currentQuestion + 1} of {questions.length}</span>
              <span className="text-sm text-blue-600">{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 rounded-full h-2 transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-6">{questions[currentQuestion].question}</h2>
          
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="w-full p-4 text-left rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  <ArrowRight className="h-5 w-5 text-gray-400" />
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Your Perfect Destination</h2>
          <p className="text-2xl text-blue-600 mb-6">{result}</p>
          <button
            onClick={() => {
              setCurrentQuestion(0);
              setAnswers([]);
              setShowResult(false);
            }}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Take Quiz Again
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;