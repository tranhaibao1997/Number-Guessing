
window.addEventListener('DOMContentLoaded', (event) => {

  var correctNumber = Math.floor(Math.random() * 10);
  console.log("the correct number is :" + correctNumber)

  let turnLeft = 3;
  let history = ["NOT GUESS", "NOT GUESS", "NOT GUESS"];
  let pastGuesses = [];
  let thisGuess = ["NOT GUESS", "NOT GUESS", "NOT GUESS", "", "",""]



  document.getElementById("turnLeftArea").innerHTML = turnLeft;

  //control balls
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
  //control balls




  // RESET BUTTON
  document.getElementById("btnRS").addEventListener("click", () => {
    turnLeft = 3;
    history = ["NOT GUESS", "NOT GUESS", "NOT GUESS"];
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
    timecounting(15);
    thisGuess = ["", "", "", "", ""]
  })
  // RESET BUTTON

  

  
  //GUESS BTN

  document.getElementById("btn").addEventListener("click", () => {
    var input = document.getElementById("input").value;
    document.getElementById("resultArea").innerHTML = "";
    

    if (history.find(elm => elm === input)) {
      alert("Duplicated input");
      return;
    }
    switch(turnLeft)
    {
      case 3:history[0]=input
      break;
      case 2:history[1]=input
      break;
      case 1:history[2]=input
      default:

    }

    if (turnLeft !== 0) {
      //Còn Turn
      if (input > correctNumber) {
        makeBallDisapear(input);
        document.getElementById("notiArea").innerHTML = `the number is too big`;
        turnLeft--;
      } else if (input < correctNumber) {
        makeBallDisapear(input);
        document.getElementById("notiArea").innerHTML = `the number is too small`;
      
        turnLeft--;
      }
      else if (input == correctNumber) {
        thisGuess[0] = history[0]
        thisGuess[1] = history[1]
        thisGuess[2] = history[2]
        thisGuess[3] = correctNumber;
        thisGuess[4] = 'WON'
        thisGuess[5]=myTime
        makeBallDisapear(input);
        alert("OMG U KILLED THE BALLLLLLLLL");
        timeOut();
        document.getElementById("btn").disabled = true;
        showtoBoard();
        console.log(myTime)

      }
      
    }
    else {
      //Hết Turn
      thisGuess[0] = history[0]
      thisGuess[1] = history[1]
      thisGuess[2] = history[2]
      thisGuess[3] = correctNumber;
      thisGuess[4] = 'LOSE';
      thisGuess[5]=myTime
      document.getElementById("btn").disabled = true
      alert("Out of turn");
      // turnLeft = 0;
      ballHappy(correctNumber);
      document.getElementById("resultArea").innerHTML = `The result is:${correctNumber}`;
      correctNumber = Math.floor(Math.random() * 10);
      console.log("the correct number is :" + correctNumber);
      timeOut();
      showtoBoard();
      console.log(myTime)
     
    }
    document.getElementById("historyArea").innerHTML = `History:${history}`;
    document.getElementById("turnLeftArea").innerHTML = turnLeft;
    document.getElementById("input").value=""
    console.log(thisGuess)

  })


//GUESS BTN
  //TIME COUNTER
  function timeOut() {
    clearInterval(myTime);
  }

  let myTime;
  function timecounting(time) {
    myTime = setInterval(() => {
      if (time === 0) {
        //Out Of Time
      thisGuess[0] = history[0]
      thisGuess[1] = history[1]
      thisGuess[2] = history[2]
      thisGuess[3] = correctNumber;
      thisGuess[4] = 'LOSE';
      thisGuess[5]=0
      document.getElementById("btn").disabled = true
      alert("TIME UP !!!!!");
      // turnLeft = 0;
      ballHappy(correctNumber);
      document.getElementById("resultArea").innerHTML = `The result is:${correctNumber}`;
      correctNumber = Math.floor(Math.random() * 10);
      console.log("the correct number is :" + correctNumber);
      timeOut();
      showtoBoard();
      console.log(myTime)
        return;
      }
      time -= 1
      document.getElementById('timecount').innerHTML = time
    }, 1000)
  }
  timecounting(15)
  //TIME COUNTER


  //ADD TO BOARD
  showtoBoard = () => {
    let node = document.createElement("tr");                 // Create a <li> node
    let turn1node = document.createElement("td")
    let turn2node = document.createElement("td")
    let turn3node = document.createElement("td")
    let winNumbernode = document.createElement("td")
    let resultnode = document.createElement("td")
    let timenode = document.createElement("td")
    let turn1 = document.createTextNode(thisGuess[0]);
    let turn2 = document.createTextNode(thisGuess[1]);
    let turn3 = document.createTextNode(thisGuess[2]);
    let winNumber = document.createTextNode(thisGuess[3]);
    let result = document.createTextNode(thisGuess[4]); 
    let time = document.createTextNode(thisGuess[5]);      // Create a text node
    turn1node.appendChild(turn1)
    turn2node.appendChild(turn2)
    turn3node.appendChild(turn3)
    winNumbernode.appendChild(winNumber)
    resultnode.appendChild(result)
    timenode.appendChild(time)
    node.appendChild(turn1node);
    node.appendChild(turn2node);
    node.appendChild(turn3node);
    node.appendChild(winNumbernode);
    node.appendChild(resultnode);
    node.appendChild(timenode);
    // Append the text to <li>
    document.getElementById("board-area").appendChild(node);
  }
  // Append <li> to <ul> with id="myList"

  //ADD TO BOARD







});

