document.addEventListener('DOMContentLoaded', function() {
    const startRecordingBtn = document.getElementById('start-recording');
    let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = function(event) {
        const speechResult = event.results[0][0].transcript.toLowerCase();
        console.log('Result received: ' + speechResult);
        const expectedLetter = document.getElementById('expected-letter').textContent.toLowerCase();
        const correctAudio = new Audio('letters/new-level-142995.mp3');
        const incorrectAudio = new Audio('letters/wrong-answer-126515.mp3');

        if (speechResult.includes(expectedLetter)) {
            correctAudio.play();
            correctAudio.onended = function() {
                alert('Good! Now try the next level.');
                window.location.href = 'finish.html'; 
            };
        } else {
            incorrectAudio.play();
            alert('Try again! Make sure to pronounce the letter correctly.');
        }
    };

    if (startRecordingBtn) {
        startRecordingBtn.addEventListener('click', function() {
            recognition.start();
        });
    }
});
