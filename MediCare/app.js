const questionList = document.getElementById('question-list');

// Simulated data
const questions = [
  { id: 1, title: 'What is JavaScript?', author: 'Abhay Pandey' },
  { id: 2, title: 'How do I learn React?', author: 'Abhinav Pandey' },
  { id: 3, title: 'How to fetch API using Node.js?', author: 'Bob Johnson' },
];

// Display questions on the page
questions.forEach(question => {
  const questionItem = document.createElement('li');
  questionItem.classList.add('question');
  questionItem.innerHTML = `
    <h3>${question.title}</h3>
    <p>Asked by ${question.author}</p>
  `;
  questionList.appendChild(questionItem);
});
