document.addEventListener('DOMContentLoaded', function() {
    function navigateToSection(sectionId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.add('hidden');
        });
        document.getElementById(sectionId).classList.remove('hidden');
    }
    
    function navigateToLevel(levelId) {
        document.querySelectorAll('.level').forEach(level => {
            level.classList.add('hidden');
        });
        document.getElementById(levelId).classList.remove('hidden');
    }
});




    const letterAudio = new Audio('letters/a.mp3'); // Adjust path as necessary
    const sentenceAudio = new Audio('letters/b.mp3'); // Adjust path as necessary

    // Play letter audio for Level 1
    const playLetterBtn = document.getElementById('play-letter');
    if (playLetterBtn) {
        playLetterBtn.addEventListener('click', function() {
            letterAudio.play();
        });
    }

    // When letter audio ends, you could automatically move to the next level, or wait for user action
    letterAudio.onended = function() {
    window.location.href = 'listening-level2.html'
    };

    // Play sentence audio for Level 2
    const playSentenceBtn = document.getElementById('play-sentence');
    if (playSentenceBtn) {
        playSentenceBtn.addEventListener('click', function() {
            sentenceAudio.play();
        });
    }

    // Handling end of sentence audio if needed
    sentenceAudio.onended = function() {
    alert('Did you understand the sentence?');
    };

    // Add any additional interaction logic as needed for your game's flow
