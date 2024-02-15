// function play() {
//     // step-1: hide the home screen...

//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList);

//     // step-2: show the playground......

//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
//     // console.log(playGroundSection.classList);

// }

function continueGame(){
    // step-1: generate a random alphabet 
    const alphabet = getARandomAlphabet();

    console.log('Your alphabet:',alphabet);

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet')
    currentAlphabetElement.innerText = alphabet;

    // set background color 
    setBackgroundColorById(alphabet);


}

function play(){
    hideElementById('home-screen');
    addElementById('play-ground');
    continueGame();
}