document.addEventListener('DOMContentLoaded', function() {
    // This controls the button for the c note.
    // This variable calls the cNote audio element in the HTML.
    const cNote = document.getElementById('cAudio');
    // This turns our <div id="c"> into a button that plays our audio file when the box is pressed.
    const cTrigger = document.querySelector('#c');
    cTrigger.addEventListener('click', function () {
        // This is a property that scrubs the audio file back to its start.
        cNote.currentTime = 0;

        // This plays the audio file.
        cNote.play();
    });

    // This controls the button for the d note.
    const dNote = document.getElementById('dAudio');
    const dTrigger = document.querySelector('#d');
    dTrigger.addEventListener('click', function () {
        dNote.currentTime = 0;
        dNote.play();
    });

    // This controls the button for the e note.
    const eNote = document.getElementById('eAudio');
    const eTrigger = document.querySelector('#e');
    eTrigger.addEventListener('click', function () {
        eNote.currentTime = 0;
        eNote.play();
    });

    // This controls the button for the f note.
    const fNote = document.getElementById('fAudio');
    const fTrigger = document.querySelector('#f');
    fTrigger.addEventListener('click', function () {
        fNote.currentTime = 0;
        fNote.play();
    });

    // This controls the button for the g note.
    const gNote = document.getElementById('gAudio');
    const gTrigger = document.querySelector('#g');

    gTrigger.addEventListener('click', function () {
        gNote.currentTime = 0;
        gNote.play();
    });

    // This controls the button for the a note.
    const aNote = document.getElementById('aAudio');
    const aTrigger = document.querySelector('#a');
    aTrigger.addEventListener('click', function () {
        aNote.currentTime = 0;
        aNote.play();
    });

    // This controls the button for the b note.

    const bNote = document.getElementById('bAudio');
    const bTrigger = document.querySelector('#b');
    bTrigger.addEventListener('click', function () {
        bNote.currentTime = 0;
        bNote.play();
    });
});
