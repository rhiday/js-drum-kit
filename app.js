function playSound(e) {

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!audio) return alert("Please press the correct key!");
    audio.currentTime = 0;
    audio.play();

    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

const allKeys = document.querySelectorAll('.key');

allKeys.forEach((key) => {
    key.addEventListener('transitionend', removeTransition);

    window.addEventListener('keydown', playSound); //Why element.addEventListener doesn't work with keydown? 

});

