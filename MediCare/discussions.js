import React, { useState, useEffect } from 'react';
import axios from 'axios';

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get('/api/questions')
      .then(res => setQuestions(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Question List</h1>
      <ul>
        {questions.map(question => (
          <li key={question.id}>
            {question.title} - {question.author} - {question.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionList;
