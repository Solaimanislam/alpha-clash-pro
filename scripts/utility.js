function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function addElementById(elementBytId){
    const elementId = document.getElementById(elementBytId);
    elementId.classList.remove('hidden');
}