
window.addEventListener('DOMContentLoaded', (event) => {

  var correctNumber = Math.floor(Math.random() * 10);
  console.log("the correct number is :" + correctNumber)

  let turnLeft = 3;
  let history = [];
  document.getElementById("turnLeftArea").innerHTML = turnLeft;



  let makeBallDisapear = (ballNumber) => {

    let ballList = document.querySelectorAll(".ball")

    for (let i = 0; i < ballList.length; i++) {
      if (ballList[i].getAttribute("data-number") == ballNumber) {
        ballList[i].classList.add("disappear")
      }
    }
  }

  let makeBallNormal = () => {
    let ballList = document.querySelectorAll(".ball")
    for (let i = 0; i < ballList.length; i++) {
      ballList[i].classList.remove("disappear")
      ballList[i].classList.remove("shake")
    }
  }
  let ballHappy = (ballNumber) => {

    let ballList = document.querySelectorAll(".ball")

    for (let i = 0; i < ballList.length; i++) {
      if (ballList[i].getAttribute("data-number") == ballNumber) {
        ballList[i].classList.add("shake")
      }
    }
  }


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
    makeBallNormal();
    timeOut();
    timecounting(15)
  })






  document.getElementById("btn").addEventListener("click", () => {
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
          makeBallDisapear(input);
          document.getElementById("notiArea").innerHTML = `the number is too big`;
        } else if (input < correctNumber) {
          makeBallDisapear(input);
          document.getElementById("notiArea").innerHTML = `the number is too small`;
        } else {

        }
        turnLeft--;
        document.getElementById("input").value = "";
      } else {
        if (input == correctNumber) {
          makeBallDisapear(input);
          alert("OMG U KILLED THE BALLLLLLLLL");
          makeBallNormal();
          turnLeft = 3;
          history = [];
          document.getElementById("historyArea").innerHTML = `History:${history}`;
          document.getElementById("turnLeftArea").innerHTML = turnLeft;
          document.getElementById("notiArea").innerHTML = "";
          document.getElementById("input").value = ""
          correctNumber = Math.floor(Math.random() * 10);
          console.log("the correct number is :" + correctNumber)
          timeOut();
          timecounting(15)
        }
        else {
          document.getElementById("btn").disabled = true
          alert("Out of turn");
          turnLeft = 0;
          ballHappy(correctNumber);
          document.getElementById("resultArea").innerHTML = `The result is:${correctNumber}`;
          correctNumber = Math.floor(Math.random() * 10);
          console.log("the correct number is :" + correctNumber);
          timeOut();
        
        }





      }
    } else {
      alert("pls enter input");

    }
    document.getElementById("historyArea").innerHTML = `History:${history}`;
    document.getElementById("turnLeftArea").innerHTML = turnLeft;
  });

  let myTime;
  function timecounting(time) {
    myTime = setInterval(() => {
      if (time === 0) {
        document.getElementById("btn").disabled = true
        alert("Out of turn");
        turnLeft = 0;
        ballHappy(correctNumber);
        document.getElementById("resultArea").innerHTML = `The result is:${correctNumber}`;
        correctNumber = Math.floor(Math.random() * 10);
        console.log("the correct number is :" + correctNumber)
        timeOut();
        return;
      }
      time -= 1
      document.getElementById('timecount').innerHTML = time
    }, 1000)
  }
  timecounting(15)

  function timeOut() {
    clearInterval(myTime);
  }



});
