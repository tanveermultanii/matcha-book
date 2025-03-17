import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const questions = [
    {
        question: "What's your reading mood today?",
        options: ["Cozy & Relaxed", "Adventurous", "Emotional", "Thought-Provoking"],
    },
    {
        question: "What genres do you enjoy?",
        options: ["Fiction", "Non-fiction", "Fantasy", "Mystery", "Romance", "Sci-Fi"],
    },
    {
        question: "Do you prefer shorter books or long sagas?",
        options: ["Short & Sweet", "Epic & Long"],
    },
];

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const navigate = useNavigate();

    const handleAnswerClick = (option) => {
        if (currentQuestion < questions.length - 1) {
            // For all questions except the last one, just save answer and move to next question
            setAnswers((prev) => [...prev, option]);
            setCurrentQuestion((prev) => prev + 1);
        } else {
            // For the LAST question, save the final answer and navigate
            const finalAnswers = [...answers, option];
            navigate('/recommendations', { state: { answers: finalAnswers } });
        }
    };
    

    const { question, options } = questions[currentQuestion];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-matcha-dark dark:text-night-text p-6">
          <h2 className="text-3xl font-bold mb-4">Your MatchaBook Pairing Quiz</h2>
          <p className="text-lg mb-6">{question}</p>
          <div className="grid grid-cols-2 gap-4 max-w-lg">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswerClick(option)}
                className="bg-matcha-dark dark:bg-night-library text-white py-2 px-4 rounded-lg shadow-md hover:bg-matcha-light 
                           hover:text-matcha-dark border border-matcha-dark"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      );      
}

export default Quiz;
