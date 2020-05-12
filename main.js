
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
    var input = document.getElementById("input").value;
    document.getElementById("resultArea").innerHTML = "";
    if (input) {
      history.find(elm => elm === input)
        ? alert("Duplicated input")
        : history.push(input);
      if (turnLeft > 0) {
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
        document.getElementById("btn").disabled = true
        alert("Out of turn");
        turnLeft = 0;
        document.getElementById("resultArea").innerHTML = `The result is:${correctNumber}`;
         correctNumber = Math.floor(Math.random() * 10);
         console.log("the correct number is :" + correctNumber)




      }
    } else {
      alert("pls enter input");

    }
    document.getElementById("historyArea").innerHTML = `History:${history}`;
    document.getElementById("turnLeftArea").innerHTML = turnLeft;
  });
});
