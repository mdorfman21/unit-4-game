//Initialize wins and losses

var wins = 0;
var losses = 0;

//Function for initializing
function initialize() {
  $("#random-number-to-guess").text(
    "Achieve this number: " + randomNumberToGuess()
  );
  $("#wins").text("Your wins: " + wins);
  $("#losses").text("Your losses: " + losses);
}

function randomNumberToGuess() {
  return Math.floor(Math.random() * (200 - 19) + 19);
}

function game() {
  var points = 0;
  initialize();

  var imageOne = {
    value: Math.floor(Math.random() * 12) + 1
  };
  var imageOneValue = Math.floor(Math.random() * 12) + 1;
  console.log("image one value: " + imageOneValue);
  var imageTwoValue = Math.floor(Math.random() * 12) + 1;
  console.log("image two value: " + imageTwoValue);
  var imageThreeValue = Math.floor(Math.random() * 12) + 1;
  console.log("image three value: " + imageThreeValue);
  var imageFourValue = Math.floor(Math.random() * 12) + 1;
  console.log("image four value: " + imageFourValue);

  $("img").on("click", function() {
    // alert(this);
    // console.log($(this).val());
    console.log(this.value);
    // alert("You clicked " + this.value);
  });
}

// function wins() {
//   return (wins = 0);
// }

// function losses() {
//   return (losses = 0);
// }

game();
