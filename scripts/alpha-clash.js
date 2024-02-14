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

function play(){
    hideElementById('home-screen');
    addElementById('play-ground');
}