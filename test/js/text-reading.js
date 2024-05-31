function submitQuiz() {
  const resultDiv = document.getElementById('result');

  // Correct answers and explanations
  const correctAnswers = {
    q1: 'b',
    q2: 'b',
    q3: 'a',
    q4: 'c',
    q5: 'd',

    q6: 'a',
    q7: 'c',
    q8: 'a',
    q9: 'b',
    q10: 'd'
  };

  const explanations = {
    q1: 'The answer is B',
    q2: 'The answer is B ',
    q3: 'The answer is A ',
    q4: 'The answer is C ',
    q5: 'The answer is D ',
    q6: 'The answer is A ',
    q7: 'The answer is C ',
    q8: 'The answer is A ',
    q9: 'The answer is B ',
    q10: 'The answer is D '
  };

  // Get user answers
  const userAnswers = {
    q1: document.querySelector('input[name="q1"]:checked'),
    q2: document.querySelector('input[name="q2"]:checked'),
    q3: document.querySelector('input[name="q3"]:checked'),
    q4: document.querySelector('input[name="q4"]:checked'),
    q5: document.querySelector('input[name="q5"]:checked'),
    q6: document.querySelector('input[name="q6"]:checked'),
    q7: document.querySelector('input[name="q7"]:checked'),
    q8: document.querySelector('input[name="q8"]:checked'),
    q9: document.querySelector('input[name="q9"]:checked'),
    q10: document.querySelector('input[name="q10"]:checked')
  };

  // Calculate score and display explanations
  let score = 0;
  for (const [key, value] of Object.entries(userAnswers)) {
    const explanationDiv = document.getElementById(`explanation-${key}`);
    explanationDiv.innerHTML = ''; // Clear previous content
    const explanationBox = document.createElement('div');
    explanationBox.className = 'explanation-box';

    if (value) {
      const selectedAnswer = value.value;
      if (selectedAnswer === correctAnswers[key]) {
        score++;
        explanationBox.innerHTML = `<div class="explanation correct">Correct!<br> ${explanations[key]}</div>`;
      } else {
        explanationBox.innerHTML = `<div class="explanation incorrect">Incorrect. <br>${explanations[key]}</div>`;
      }
    } else {
      explanationBox.innerHTML = `<div class="explanation incorrect">Please select an answer.</div>`;
    }
    explanationDiv.appendChild(explanationBox);
  }

  // Display result
  resultDiv.textContent = `You scored ${score} out of ${Object.keys(correctAnswers).length}`;
}
