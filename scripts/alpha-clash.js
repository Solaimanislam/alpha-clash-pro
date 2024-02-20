// function play() {
//     // step-1: hide the home screen...

//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList);



function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    // console.log('Player Pressed',playerPressed);

    // stop the game if pressed 'Esc'
    if(playerPressed === 'Escape'){
        gameOver();
    }

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed, expectedAlphabet);

    // check matched or not
    if(playerPressed === expectedAlphabet){
        console.log('You get a point');
        // console.log('you have pressed correctly', expectedAlphabet);

        const currentScore = getTextElementValueById('current-score');
        // console.log(currentScore);
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);
        //-----------------------------------
        // update score
        // 1. get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);

        // // 2. increase the score by 1
        // const newScore = currentScore + 1;
        // // 3. show the updated score..
        // currentScoreElement.innerText = newScore;

        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('you missed. you lost a life');

        const currentLife = getTextElementValueById('current-life');
        const newLife = currentLife - 1;
        setTextElementValueById('current-life', newLife);

        if(newLife === 0){
            gameOver();
        }

        //-------------------------------------
        // step-1: get the current life number..
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // // step-2: reduce the life count 
        // const newLife = currentLife - 1;

        // // step-3: display the updated life count..
        // currentLifeElement.innerText = newLife;
    }

}
// capture keyboard key press
document.addEventListener('keyup', handleKeyboardKeyUpEvent);

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
    // hide everything show only the playground...
    hideElementById('home-screen');
    hideElementById('final-score');
    addElementById('play-ground');

    // reset score and life...
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    addElementById('final-score');
    // update final score 
    // 1. get the final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore);

    // clear the last selected alphabet highlight...
    const currentAlphabet = getElementTextById('current-alphabet');

    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}