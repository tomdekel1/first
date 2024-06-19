cardsContainer = document.querySelector(".container");
window.onload = addCards();
let counter = 0;

const smartQuotes = [
  "work hard in silence, let your success be your noise.",
  "The grass is greener where you water it.",
  "It is not the mountain we conquer but ourselves.",
  "Keep your face always toward the sunshine, and shadows will fall behind you.",
  "Fear does not stop death, it stops life.",
  "Straight roads do not make skilful drivers.",
  "Never be limited by other people's limited imaginations.",
];

function addCards() {
  const selectBox = document.querySelector("#selectBox");
  const landingPageTitles = [
    "<h3>תן לנו להוביל אותך קדימה</h3>",
    "<h3>כאן ועכשיו</h3>",
    "<h3>קפה טוב לבוקר טוב</h3>",
    "<h3>תן לנו להוביל אותך קדימה</h3>",
    "<h3>גלריית תמונות</h3>",
    "<h3>ייעוץ טלפוני חינם</h3>",
  ];
  const jsProjectsTitles = [
    {
      name: "snake",
      pic: "./pictures/snake-pic.png",
      title: "snake retro game",
      preview:
        "/first/tomDekelProject-main/projects/snake/projectpreview-snake.html",
    },
    {
      name: "songGame",
      pic: "./pictures/songGame-pic.png",
      title: "song guessing game",
      preview:
        "/first/tomDekelProject-main/projects/song_guessing_game/projectpreview-songGame.html",
    },
    {
      name: "tic-tac-toe",
      pic: "./pictures/tictactoe-pic.png",
      title: "old fashioned tic tac toe",
      preview:
        "/first/tomDekelProject-main/projects/ticTacToe/projectpreview-tic-tac-toe.html",
    },
    {
      name: "countriesAPI",
      pic: "./pictures/countriesAPI-pic.png",
      title: "countries API",
      preview:
        "/first/tomDekelProject-main/projects/countriesApi/projectpreview-countriesAPI.html",
    },
    {
      name: "math-game",
      pic: "./pictures/mathGame-pic.png",
      title: "Math learning game",
      preview:
        "/first/tomDekelProject-main/projects/mathGame/projectpreview-mathGame.html",
    },
    {
      name: "Clock Designer",
      pic: "./pictures/clockProject-pic.png",
      title: "javaScript rendered clock",
      preview:
        "/first/tomDekelProject-main/projects/analog-clock/projectpreview-clockDesigner.html",
    },
  ];

  if (selectBox.value == "Landing Pages") {
    cardsContainer.innerHTML = "";
    for (let i = 1; i < 7; i++) {
      cardsContainer.innerHTML += `<div class="card">
            <div class="img-div"><img src="./pictures/option${i}.PNG" alt="option ${i} img"></div>
            ${landingPageTitles[i - 1]}
            <p>דף נחיתה מספר ${i}</p>
            <button><a href="./projects/option${i}/projectpreview${i}.html">לעמוד הפרויקט</a></button>
        </div>`;
    }
  } else if (selectBox.value == "javaScript Projects") {
    cardsContainer.innerHTML = "";
    jsProjectsTitles.forEach((item, i) => {
      cardsContainer.innerHTML += `<div class="card">
            <div class="img-div"><img src=${item.pic} alt="option  img"></div>
            ${item.title}
            <p>פרויקט מספר ${i + 1}</p>
            <button><a href=${item.preview}>לעמוד הפרויקט</a></button>
        </div>`;
    });
  }
  setTimeout(moveNote, 500);
  setInterval(moveNote, 6000);
}

function moveNote() {
  const note = document.querySelector(".note");
  const noteText = document.querySelector(".card-content");
  let randomNum1;
  let randomNum2;
  setTimeout(() => {
    note.style.display = "block";
    randomNum1 = Math.floor(Math.random() * 75 + 3);
    randomNum2 = Math.floor(Math.random() * 45 + 9);
    console.log(randomNum1, randomNum2);
    note.style.left = `${randomNum1}%`;
    note.style.top = `${randomNum2}%`;
    note.classList.add("animation");
    noteText.innerHTML = `${smartQuotes[counter]}`;
    counter++;
  }, 1000);
  note.style.display = "none";

  if (counter == smartQuotes.length) {
    counter = 0;
  }
}
