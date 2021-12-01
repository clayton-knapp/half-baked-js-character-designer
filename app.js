// import functions and grab DOM elements
import { makeStatsString } from './utils.js';
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');

const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');

const reportEl = document.getElementById('report');

const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

// set state for how many times the user changes the head, middle, and bottom
let statsReport = 0;
let headChangeCount = 0;
let middleChangeCount = 0;
let bottomChangeCount = 0;
// set state for all of the character's catchphrases
let catchphraseArray = [];

headDropdown.addEventListener('change', () => {
    // get the value of the head dropdown
    const headSelected = headDropdown.value;
    // console.log(headSelected);

    // increment the head change count state
    headChangeCount++;
    // console.log(headChangeCount);

    // update the dom for the head
    headEl.src = `./assets/${headSelected}-head.png`;
    // update the stats to show the new count
    reportEl.textContent = '';
    reportEl.append(`You've changed the head ${headChangeCount} times. You've changed the middle ${middleChangeCount} time. You've changed the bottom ${bottomChangeCount} times.`);
});


middleDropdown.addEventListener('change', () => {
    // get the value of the middle dropdown
    const middleSelected = middleDropdown.value;
    // increment the middle change count state
    middleChangeCount++;
    // update the dom for the middle
    middleEl.src = `./assets/${middleSelected}-middle.png`;
    // update the stats to show the new count
    reportEl.textContent = '';
    reportEl.append(`You've changed the head ${headChangeCount} times. You've changed the middle ${middleChangeCount} time. You've changed the bottom ${bottomChangeCount} times.`);
});


bottomDropdown.addEventListener('change', () => {
    // get the value of the bottom dropdown
    const bottomSelected = bottomDropdown.value;
    // increment the bottom change count state
    bottomChangeCount++;
    // update the dom for the bottom
    bottomEl.src = `./assets/${bottomSelected}-pants.png`;
    // update the stats to show the new count
    reportEl.textContent = '';
    reportEl.append(`You've changed the head ${headChangeCount} times. You've changed the middle ${middleChangeCount} time. You've changed the bottom ${bottomChangeCount} times.`);
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    const userCatchphrase = catchphraseInput.value;
    
    // push the new catchphrase to the catchphrase array in state
    catchphraseArray.push(userCatchphrase);

    // update the dom for the bottom (?????????????????????????????????????????)

    // clear out the form input's value so it's empty to the user
    catchphraseInput.value = '';

    // update the dom to show the new catchphrases (call a function to do this work)
    displayCatchphrases();
});

function displayStats() {
    // change the text contentof the reportEl to tell the user how many times they've changed each piece of the state
    const statsString = makeStatsString(); // call this function with the correct arguments
}

function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases
    catchphrasesEl.textContent = '';

    // loop through each catchphrase in state
    // and for each catchphrase
    // create an HTML element with the catchphrase as its text content
    // and append that HTML element to the cleared-out DOM
    for (let catchphrase of catchphraseArray) {
        const p = document.createElement('p');
        p.textContent = catchphrase;
        catchphrasesEl.append(p);
    }
}
