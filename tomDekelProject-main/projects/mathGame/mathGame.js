const exerciseAction = document.querySelector("#MP");
let actionPut = exerciseAction.innerText;
const exercise = document.getElementById("exercise");
const res = document.querySelector("#result");
let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
const addToTable = document.querySelector("tbody");
const randomNum = Math.random();
const randomNum2 = Math.random();
let numSize = document.querySelector("#numsize");
const answer = document.querySelector("input");
const speechBubble = document.querySelector('#teacher-speech');
const teacherSpeech = document.querySelector('#teacher-speech>div');

document.querySelector('#answer').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    resultCheck();
    document.querySelector('#answer').value = "";
  }
});

function numGenerate(option) {
  // const selectedOption = document.getElementById("numSize");
  // let option = selectedOption.value;


  if (option == "ten") {
    num1.innerText = Math.floor(Math.random() * 10 + 1);
    num2.innerText = Math.floor(Math.random() * 10 + 1);
  } else if (option == "hundred") {
    num1.innerText = Math.floor(Math.random() * 100 + 1);
    num2.innerText = Math.floor(Math.random() * 100 + 1);
  } else if (option == "thousand") {
    num1.innerText = Math.floor(Math.random() * 1000 + 1);
    num2.innerText = Math.floor(Math.random() * 1000 + 1);
  }
  console.log(exerciseAction);
}

function actionGenerate(action) {
  const actionOption = document.getElementById("action");
  if (action == "plus") {
    actionPut = "+";
    exerciseAction.innerText = "+";
  } else if (action == "minus") {
    actionPut = "-";
    exerciseAction.innerText = "-";
  } else if (action == "multi") {
    actionPut = "*";
    exerciseAction.innerText = "*";
  } else if (action == "divide") {
    actionPut = "/";
    exerciseAction.innerText = "/";
  }
  console.log(action);
}

function resultCheck() {
  
  const answerCheck = eval(`${+num1.innerText} ${actionPut} ${+num2.innerText}`);
  if (answer.value == answerCheck) {
    addToTable.innerHTML += `<tr>
            <td>${+num1.innerText} ${actionPut} ${+num2.innerText}</td>
            <td>${answerCheck}</td>
            <td>${answer.value}</td>
            <td>10</td>
          </tr>`
    num1.innerText = Math.floor(Math.random() * 10 + 1);
    num2.innerText = Math.floor(Math.random() * 10 + 1);
    document.querySelector('#answer').value = "";
    speechBubble.style.visibility = "visible";
    teacherSpeech.innerText = "good job!";
    setTimeout( () => {
      speechBubble.style.visibility = "hidden";
    }, 3500)
  } else {
    addToTable.innerHTML += `<tr>
            <td>${+num1.innerText} ${actionPut} ${+num2.innerText}</td>
            <td>${answerCheck}</td>
            <td>${answer.value}</td>
            <td>0</td>
          </tr>`
    num1.innerText = Math.floor(Math.random() * 10 + 1);
    num2.innerText = Math.floor(Math.random() * 10 + 1);
    document.querySelector('#answer').value = "";
    speechBubble.style.visibility = "visible";
    teacherSpeech.innerText = "shameful..";
    setTimeout( () => {
      speechBubble.style.visibility = "hidden";
    }, 3500)
  }


  // res.innerText = eval(`${+num1.innerText} ${actionPut} ${+num2.innerText}`);
  // console.log(eval(`${+num1.innerText} ${actionPut} ${+num2.innerText}`));
  // console.log(res);
}