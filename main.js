
window.addEventListener('DOMContentLoaded', (event) => {
  const correctNumber = 54;
  let turnLeft = 3;
  let history = [];
  document.getElementById("turnLeftArea").innerHTML = turnLeft;
  
  document.getElementById("btnRS").addEventListener("click",()=>{
     turnLeft = 3;
     history = [];
     document.getElementById("historyArea").innerHTML = `History:${history}`;
    document.getElementById("turnLeftArea").innerHTML = turnLeft;
    document.getElementById("notiArea").innerHTML = "";
  })
  
  
  document.getElementById("btn").addEventListener("click", () => {
    var input = document.getElementById("input").value;
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
          turnLeft = 3;
          history = [];
          document.getElementById("historyArea").innerHTML = `History:${history}`;
         document.getElementById("turnLeftArea").innerHTML = turnLeft;
         document.getElementById("notiArea").innerHTML = "";
        }
        turnLeft--;
        document.getElementById("input").value = "";
      } else {
        alert("Out of turn");
        history = [];
      }
    } else {
      alert("pls enter input");

    }
    document.getElementById("historyArea").innerHTML = `History:${history}`;
    document.getElementById("turnLeftArea").innerHTML = turnLeft;
  });  
});
