(function() {
  //Initialize wins and losses
  var wins = 0;
  var losses = 0;

  function game() {
    var points = 0;
    var randomNumberToGuess = Math.floor(Math.random() * (200 - 19) + 19);
    console.log(points);
    $("#random-number-to-guess").text(
      "Achieve this number: " + randomNumberToGuess
    );
    $("#wins").text("Your wins: " + wins);
    $("#losses").text("Your losses: " + losses);

    $("#image-one").removeAttr("value");
    $("#image-two").removeAttr("value");
    $("#image-three").removeAttr("value");
    $("#image-four").removeAttr("value");

    $("#image-one").attr("value", Math.floor(Math.random() * 12) + 1);
    $("#image-two").attr("value", Math.floor(Math.random() * 12) + 1);
    $("#image-three").attr("value", Math.floor(Math.random() * 12) + 1);
    $("#image-four").attr("value", Math.floor(Math.random() * 12) + 1);

    $("img").off();
    $("img").on("click", function(event) {
      var element = event.target;

      points = +points + +element.getAttribute("value");
      alert(+points);
      if (points === randomNumberToGuess) {
        alert("You Win!!");
        wins = wins + 1;
        game();
      }
      if (randomNumberToGuess < points) {
        alert("You Lose!!");
        losses = losses + 1;
        game();
      }
    });
  }
  game();
})();
