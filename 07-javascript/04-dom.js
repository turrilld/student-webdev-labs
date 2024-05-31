// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
let userInput = document.querySelector("#userInput1");
let copy = document.querySelector("#copy");
let output = document.querySelector(".output"); //this needs to be a class, not a ID based on the HTML.  Offcial answer does not work

// add an event listener on the target element
copy.addEventListener("click", handleClick);

// callback function to handle event
function handleClick(event) {
  console.log("output", userInput.value);
  output.textContent = userInput.value;
}

// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
let userInput2 = document.querySelector("#userInput2");

// add an event listener on the target element
userInput2.addEventListener("input", handleInput);

let element = document.createElement("div");
element.setAttribute("class", "output");
document.querySelector("#inputEventExample").append(element);

// callback function to handle event
function handleInput(event) {
  console.log("click event", event);
  element.textContent = userInput2.value;
}
