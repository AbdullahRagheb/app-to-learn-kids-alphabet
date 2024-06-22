document.addEventListener('DOMContentLoaded', function() {
    // Variables for Level 1
    const inputWordLevel1 = document.getElementById('input-word-level1');
    const submitBtnLevel1 = document.getElementById('submit-level1');
    const correctAudio = new Audio('letters/new-level-142995.mp3'); // Correct answer sound
    const incorrectAudio = new Audio('letters/wrong-answer-126515.mp3'); // Incorrect answer sound
    const expectedLetter = 'a'; // Example: Expecting words that start with 'A'


    const inputWordLevel2 = document.getElementById('input-word-level2');
    const submitBtnLevel2 = document.getElementById('submit-level2');

    const expectedAnswerLevel2 = 'baseball'; 

    // Level 1 Submission Handling
    if (submitBtnLevel1) {
        submitBtnLevel1.addEventListener('click', function() {
            const userAnswer = inputWordLevel1.value.trim().toLowerCase();
            if (userAnswer.startsWith(expectedLetter)) {
                correctAudio.play();
                correctAudio.onended = () => alert('Great! Moving to level 2.');
                //window.location.href = 'writing-level2.html';
            } else {
                incorrectAudio.play();
                incorrectAudio.onended = () => alert('Try again. Remember, the word should start with the letter B.');
            }
        });
    }

    // Level 2 Submission Handling
    if (submitBtnLevel2) {
        submitBtnLevel2.addEventListener('click', function() {
            const userAnswer = inputWordLevel2.value.trim().toLowerCase();
            // For simplicity, expecting a specific answer; adjust logic as necessary
            if (userAnswer === expectedAnswerLevel2) {
                correctAudio.play();
                correctAudio.onended = () => alert('Excellent work! You’ve completed this section.');
                //window.location.href = 'speaking-level1.html';
            } else {
                incorrectAudio.play();
                incorrectAudio.onended = () => alert('Not quite right. Try again.');
            }
        });
    }
});
