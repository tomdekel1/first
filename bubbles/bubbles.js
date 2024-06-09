const board = document.querySelector('#board');
let width = 20;
let height = 20;
let divs = [];
let cannon = [389, 369, 349, 329, 309];
let chamber = cannon[4];
let underChamber = cannon[3];
let x = chamber - 20;
let interval;

function createBoard() {

  for (let i = 0; i < width * height; i++) {
    const div = document.createElement('div');
    board.appendChild(div);
    div.innerText = i;
    divs.push(div)
  }


  bubbles();
createCannon();

}

function bubbles() {

  for (let i = 0; i < width * 2; i++) {
    const bubble = Math.floor(Math.random() * 3 + 1);
    if (bubble == 1) {
      divs[i].classList.add("red");
    }
    if (bubble == 2) {
      divs[i].classList.add("green");
    }
    if (bubble == 3) {
      divs[i].classList.add("blue");
    }
    console.log(bubble);
  }
}

function createCannon() {
  for (let i = 300; i < width * height; i++) {
    divs[i].style.backgroundColor = "";
  }

  cannon.forEach((x) => {
    divs[x].style.backgroundColor = "blue";

  });

}

function shoot() {
  console.log(divs[x]);
  clearInterval(interval);
  interval = setInterval(() => {
    shoot();
  }, 50);

  if (divs[x].classList == "red" ||
    divs[x].classList == "blue" ||
    divs[x].classList == "green") {
    clearInterval(interval);
    x = chamber - 20;
    return;
  };

  let ball = chamber - width;
  for (let i = ball; i > 0; i--) {
    divs[i].classList.remove("ball");
    i = i - width + 1;

  };

  if (divs[x].classList == "") {
    divs[x].classList.add("ball");
    console.log(divs[x]);
  }

  x = x - 20;
  console.log("hi");
}


function move(dir) {
  if (dir === "right") {
    for (let i = 0; i < cannon.length; i++) {
      cannon[i] += 1
    }
    createCannon();
    chamber = cannon[4];

  }
  if (dir === "left") {
    for (let i = 0; i < cannon.length; i++) {
      cannon[i] -= 1
    }
    createCannon();
    chamber = cannon[4];

  }
  if (dir === "up") {
    if (chamber + 19 === underChamber) {
      return;
    }
    for (let i = 1; i < cannon.length; i++) {
      cannon[i] += i;
    }
    chamber = cannon[4];
    underChamber = cannon[3];
    createCannon();
  }

  if (dir === "down") {
    if (chamber + 21 === underChamber) {
      return;
    }
    for (let i = 1; i < cannon.length; i++) {
      cannon[i] -= i;
    };
    chamber = cannon[4];
    underChamber = cannon[3];
    createCannon();

  }
}



window.addEventListener("keydown", ev => {
  // מבטל את פעול ברירת המחדל של המקשים
  // (במקרה שלנו זה מבטל את הגלילה של הדף באמצעות החצים)
  ev.preventDefault();

  switch (ev.key) {
    case "ArrowUp": move("up"); break;
    case "ArrowRight": move("right"); break;
    case "ArrowDown": move("down"); break;
    case "ArrowLeft": move("left"); break;
    case " ": shoot(); break;
  };
  console.log(ev);
});