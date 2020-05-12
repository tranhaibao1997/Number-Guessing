
window.addEventListener('DOMContentLoaded', (event) => {

  var correctNumber = Math.floor(Math.random() * 10);
  console.log("the correct number is :" + correctNumber)

  let turnLeft = 3;
  let history = [];
  document.getElementById("turnLeftArea").innerHTML = turnLeft;

  document.getElementById("btnRS").addEventListener("click", () => {
    turnLeft = 3;
    history = [];
    document.getElementById("historyArea").innerHTML = `History:${history}`;
    document.getElementById("turnLeftArea").innerHTML = turnLeft;
    document.getElementById("notiArea").innerHTML = "";
    document.getElementById("btn").disabled = false
    document.getElementById("input").value = ""
    correctNumber = Math.floor(Math.random() * 10);
    console.log("the correct number is :" + correctNumber)
    document.getElementById("resultArea").innerHTML = "";
  })






  document.getElementById("btn").addEventListener("click", () => {
    console.log(turnLeft)
    var input = document.getElementById("input").value;
    document.getElementById("resultArea").innerHTML = "";
    if (input) {
      if (isNaN(input) === true) {
        alert("Please enter number");
        return;
      }
      if (history.find(elm => elm === input)) {
        alert("Duplicated input");
        return;
      }
      else {
        history.push(input);
      }
      if (turnLeft > 1) {
        if (input > correctNumber) {
          document.getElementById("notiArea").innerHTML = `the number is too big`;
        } else if (input < correctNumber) {
          document.getElementById(
            "notiArea"
          ).innerHTML = `the number is too small`;
        } else {
          alert("correct ^^");
          turnLeft = 4;
          history = [];
          document.getElementById("historyArea").innerHTML = `History:${history}`;
          document.getElementById("turnLeftArea").innerHTML = turnLeft;
          document.getElementById("notiArea").innerHTML = "";
          document.getElementById("input").value = ""
          correctNumber = Math.floor(Math.random() * 10);
          console.log("the correct number is :" + correctNumber)
        }
        turnLeft--;
        document.getElementById("input").value = "";
      } else {
        console.log(input,correctNumber)
        if (input ==correctNumber) {
      
          alert("correct ^^");
          turnLeft = 4;
          history = [];
          document.getElementById("historyArea").innerHTML = `History:${history}`;
          document.getElementById("turnLeftArea").innerHTML = turnLeft;
          document.getElementById("notiArea").innerHTML = "";
          document.getElementById("input").value = ""
          correctNumber = Math.floor(Math.random() * 10);
          console.log("the correct number is :" + correctNumber)
        }
        else {
          document.getElementById("btn").disabled = true
          alert("Out of turn");
          turnLeft = 0;
          document.getElementById("resultArea").innerHTML = `The result is:${correctNumber}`;
          correctNumber = Math.floor(Math.random() * 10);
          console.log("the correct number is :" + correctNumber)
        }





      }
    } else {
      alert("pls enter input");

    }
    document.getElementById("historyArea").innerHTML = `History:${history}`;
    document.getElementById("turnLeftArea").innerHTML = turnLeft;
  });
});
