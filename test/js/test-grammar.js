function submitQuiz() {
  const resultDiv = document.getElementById('result');

  // Correct answers and explanations
  const correctAnswers = {
    q1: 'c',
    q2: 'c',
    q3: 'd',
    q4: 'b',
    q5: 'a',
    q6: 'c',
    q7: 'b',
    q8: 'c',
    q9: 'd',
    q10: 'a'
  };

  const explanations = {
    q1: 'The answer is C because "to have been nominated" correctly uses the perfect infinitive to indicate that the action of being nominated occurred in the past before the main verb "became."',
    q2: 'The answer is C because "to meet" effectively communicates the purpose of the engineers actions in response to the demands of aerospace, medicine, and agriculture.',
    q3: 'The answer is D because The phrase "Written by" correctly attributes the authorship of the song "Carry Me Back to Old Virginny" to James A. Bland, maintaining proper grammatical structure in the sentence.',
    q4: 'The answer is B because "who believed," is correct because it introduces the clause "believed" to describe Margaret F. Washburn is stance as a dualist. This maintains proper grammatical structure in the sentence.',
    q5: 'The answer is A because "were," is the correct choice because it correctly indicates the past tense of the verb "to be" and fits grammatically in the sentence. The sentence describes a past condition, indicating that lions were common in many parts of the world.',
    q6: 'The answer is C because The error in the original sentence is the verb form "consist." It should be "consists" to agree with the singular subject "one fossil forest." Additionally, the adverb "nearly" should come before the number "a hundred" to modify it correctly. The word "scattered" is the correct verb form to describe the large stumps in the fossil forest, indicating that they are spread out irregularly.',
    q7: 'The answer is B because The error in the original sentence is the phrase "visible remains." It should be "remains visible" to maintain correct word order and syntax. This phrase correctly describes the Sun being visible continuously in the sky, which is the essence of the phenomenon of the midnight sun."',
    q8: 'The answer is C because Some countries names are written using the word "the". For example, The Soviet Union, The United Kingdom, The United states, The United Arab Emirates, and so on.',
    q9: 'The answer is D because The meaning of "time" needed in this sentence is time (uncountable) so it cannot be written in plural form.',
    q10: 'The answer is A because the word "depend" can only be followed by the preposition "on"."'
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
