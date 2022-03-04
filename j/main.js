//start by making the "make boxes" button active
let myButton = document.querySelector(".make-boxes");
myButton.addEventListener("click", renderBoxes);

// Initialising the counter
let counter = 0;
let boxCountEl = document.querySelector(".count");

// Display function to track njumber of boxes clicked
function countDisplay() {
  if (counter == 1) {
    boxCountEl.innerHTML = (`${counter} box clicked`);
  } else {
    boxCountEl.innerHTML = (`${counter} boxes clicked`);
  }

}

//get the number of boxes to make from user
function getNumBoxes() {
  var numBoxes = Number(prompt("how many boxes?"));

  if (numBoxes <= 0 || Number.isNaN(numBoxes)) {
    return 0;
  }
  return numBoxes;
}


//Makes boxes based on user input.
//We use tempHolder to build the boxes in memory only.
function makeBoxes() {
  const numBoxes = getNumBoxes();
  const tempHolder = document.createDocumentFragment();

  // Repeat Loop
  for (let i = 1; i <= numBoxes; i++) {

    let box = document.createElement("DIV");
    let txt = document.createTextNode("Box #" + i);
    box.className = "box";

    /* write event listener here */

    box.addEventListener('click', (e) => {
      e.target.classList.toggle('spin');
      box.innerHTML = "Clicked";
      counter++;
      countDisplay();

    });
    
    box.appendChild(txt);
    tempHolder.appendChild(box);

  } //end loop

  return tempHolder;
}

// actually put the boxes we get from makeBoxes on the page
function renderBoxes(e) {
  //get the data-holder attribute value from the button
  const containerName = e.target.dataset.holder;
  const container = document.querySelector(containerName);
  const boxes = makeBoxes();

  if (boxes.children.length === 0) {
    container.innerHTML = "Try Again. Please type a positive whole number";
  } else {
    // clearout previous stuff before adding new boxes
    container.innerHTML = "";
    container.appendChild(boxes);
  }
}