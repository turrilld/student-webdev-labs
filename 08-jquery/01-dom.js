// Exercise #1:
// When the user clicks the 'copy' button, copy the user input to the output area

$(document).ready(() => {
  $("#copy").on("click", (event) => {
    console.log("Click event", event);
    $("#output1").text($("#userInput1").val());
  });

  // Exercise #2:
  // When the user enters input text, copy the user input to the output area
  $("#userInput2").on("input", (event) => {
    console.log("Input event", event);
    $("#output2").text($("#userInput2").val());
  });
});
