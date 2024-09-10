import React, { useState } from "react";
import { questions } from "../data/questions";

const TestForm = ({ onSubmit }) => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(answers);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-gray-100 rounded shadow-md mb-5">
      {questions.map((q, index) => {
        return (
          <div key={q.id} className="w-full shadow-md bg-white border rounded-lg p-3">
            <div>{q.question}</div>
            {q.options.map((option, i) => (
              <label key={i} className="block">
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  checked={answers[index] === option}
                  onChange={() => handleChange(index, option)}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
        );
      })}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        제출하기
      </button>
    </form>
  );
};

export default TestForm;
