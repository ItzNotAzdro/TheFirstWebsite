// select the text
const text = document.querySelector('.text');
// get the text content
const strText = text.textContent;
// split the text into letters
const splitText = strText.split('');
// clear the text
text.textContent = '';

// loop through the letters
for (let i = 0; i < splitText.length; i++) {
    // add span for each letter
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

// set the counter to 0
let char = 0;
// set the timer to 50ms
let timer = setInterval(onTick, 50);

// function to add the class
function onTick() {
    // select the span
    const span = text.querySelectorAll('span')[char];
    // add the class
    span.classList.add('fade');
    // increment the counter
    char++;
    // if the counter is equal to the length of the text
    if (char === splitText.length) {
        // call the complete function
        complete();
        return;
    }
}

// function to clear the timer
function complete() {
    clearInterval(timer);
    timer = null;
}