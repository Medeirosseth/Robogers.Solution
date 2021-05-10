// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code

function beepboop(slang) {
  let robotSlang = [];
  for (let index = 0; index <= slang; index++) {
    if (index.toString().includes("3")) {
      robotSlang.push("Wont you be my neighbor?");
    } else if (index.toString().includes("2")) {
      robotSlang.push("BOOP");
    } else if (index.toString().includes("1")) {
      robotSlang.push("BEEP!");
    } else {
      robotSlang.push(index.toString());
    }
  }
  return robotSlang;
}

//User Interface
$(document).ready(function () {
  $("#formOne").submit(function (event) {
    event.preventDefault();
    let robotSlang = $("input#translator").val();
    let robotLanguage = beepboop(robotSlang);
    $("#results").text(robotLanguage.toString());
  });
});

function checkWinner(playerOneChoice, playerTwoChoice) {
  $.ajax({
    type: "POST",
    data: {
      playerOneChoice: playerOneChoice,
      playerTwoChoice: playerTwoChoice,
    },
    url: "/Home/RPSCheckWinner",
    success: function (data) {
      console.log(data);
      $(".current-turn").text(data);
    },
  });
}

let playerOneChoice;

$(".choice").on("click", "img", function () {
  console.log($(this)[0].alt);
  if (!playerOneChoice) {
    playerOneChoice = $(this)[0].alt;
    // now update UI to say it's player 2's turn...
    $(".current-turn").text("It's Player 2's Turn");
  } else {
    checkWinner(playerOneChoice, $(this)[0].alt);
    // reset the game and display who wins
  }
});
