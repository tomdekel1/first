const startButton = document.querySelector('#start-btn');
const question = document.querySelector('#questions>h1');
const questionsScreen = document.querySelector('#questions');
const audioDiv = document.querySelector('#audio');
let counter = 0;
let answer1 = document.querySelector("#answer1");
let answer2 = document.querySelector("#answer2");
let answer3 = document.querySelector("#answer3");
let answer4 = document.querySelector("#answer4");
let answerOptions;
const scoreDisplay = document.querySelector("#score");
let score = 0;
let currentLvl = 0;
const lvl_arr = [];

const songsInfo =
{ 
    song1 : {
            src: "./songs/Aerosmith -  I Don't Wanna Miss a Thing Lyrics.m4a#t=00:00:28",
            correctAnswer: "Aerosmith - I Don't Wanna Miss a Thing",
            answers: ["Aerosmith - I Don't Wanna Miss a Thing",
            "Elton John - Rocket Man",
            "Guns N' Roses - November Rain", 
            "Jet - Look what you've done"]
    },

    song2 : {
        src: "./songs/Bryan Adams - Heaven.m4a#t=00:00:04",
        correctAnswer: "Bryan Adams - Heaven",
        answers: ["Guns N' Roses - November Rain",
        "Elton John - Rocket Man",
        "Bryan Adams - Heaven", 
        "Eagles - Hotel California"]
    },

    song3 : {
        src: "./songs/Childish Gambino - Redbone (Official Audio).m4a",
        correctAnswer: "Childish Gambino - Redbone",
        answers: ["Childish Gambino - Redbone",
        "Elton John - Rocket Man",
        "Eagles - Hotel California", 
        "Jet - Look what you've done"]
    },

    song4 : {
        src: "./songs/Eagles - Hotel California (Lyrics).m4a",
        correctAnswer: "Eagles - Hotel California",
        answers: ["Aerosmith - I Don't Wanna Miss a Thing",
        "Elton John - Rocket Man",
        "Guns N' Roses - November Rain", 
        "Eagles - Hotel California"]
    },

    song5 : {
        src: "./songs/Elton John - Rocket Man (Official Music Video).m4a",
        correctAnswer: "Elton John - Rocket Man",
        answers: ["Modjo - Lady (Hear Me Tonight)",
        "Elton John - Rocket Man",
        "Guns N' Roses - November Rain", 
        "Eagles - Hotel California"]
    },
    song6 : {
        src: "./songs/Jason Derulo - Whatcha Say (Video).m4a",
        correctAnswer: "Jason Derulo - Whatcha Say",
        answers: ["Modjo - Lady (Hear Me Tonight)",
        "Radiohead - Creep",
        "Toto - Africa", 
        "Jason Derulo - Whatcha Say"]
    },
    song7 : {
        src: "./songs/Kanye West - Bound 2 (Explicit).m4a",
        correctAnswer: "Kanye West - Bound 2",
        answers: ["Aerosmith - I Don't Wanna Miss a Thing",
        "Kanye West - Bound 2",
        "Guns N' Roses - November Rain", 
        "Eagles - Hotel California"]
    },
    song8 : {
        src: "./songs/Modjo - Lady (Hear Me Tonight) (Official Video).m4a",
        correctAnswer: "Modjo - Lady (Hear Me Tonight)",
        answers: ["Modjo - Lady (Hear Me Tonight)",
        "Radiohead - Creep",
        "Guns N' Roses - November Rain", 
        "Toto - Africa"]
    },
    song9 : {
        src: "./songs/Radiohead - Creep.m4a",
        correctAnswer: "Radiohead - Creep",
        answers: ["Aerosmith - I Don't Wanna Miss a Thing",
        "Elton John - Rocket Man",
        "Guns N' Roses - November Rain", 
        "Radiohead - Creep"]
    },
    song10 : {
        src: "./songs/Toto - Africa (Video).m4a",
        correctAnswer: "Toto - Africa",
        answers: ["Toto - Africa",
        "Elton John - Rocket Man",
        "Guns N' Roses - November Rain", 
        "Eagles - Hotel California"]
    }
}

startButton.addEventListener("click", startGame);

function startGame(){
        startButton.style.display = 'none';
        question.innerText = '';
        setTimeout(() => {
            question.innerText = 'מה שם השיר המתנגן ברקע?';
            scoreDisplay.innerText = `ניקוד: ${score}`;
            displaySongs();
            levelIncrease();
        }, 1000)
    
}

function displaySongs(){
answerOptions = [answer1, answer2, answer3, answer4];

answerOptions.forEach((answer, i) => {
    answer.innerText = songsInfo.song1.answers[i];
})

audioDiv.innerHTML = `<audio controls autoplay>
<source src="${songsInfo.song1.src}">
</audio>`;
if(counter === 0){
answerOptions.forEach((answer) => {
    answer.addEventListener("click", () => {
        checkAnswer(answer);
    
    });
})} else if (counter === -1){
    counter++;
}

}

function checkAnswer(elem){
    if(elem.innerText === songsInfo.song1.correctAnswer) {
        setTimeout(() => {
            question.innerText = '!כל הכבוד תשובה נכונה';
            score += 10;
        }, 50);
        correctAnswer(); }
         else {
        setTimeout(() => {
        question.innerText = 'תשובה לא נכונה!😑';
    }, 50);
        correctAnswer();
    }
        ;
}

function levelIncrease(){
const levels = document.querySelector('#levels');

if (currentLvl == 0){
for(let i = 1; i < 11; i++){
    const newDiv = document.createElement('div');
newDiv.innerHTML += `שלב: ${i}`;
levels.appendChild(newDiv);
lvl_arr.push(newDiv)
}} else if (currentLvl === -1){
    currentLvl = 0;
}
lvl_arr.forEach((lvl) => {
    lvl.classList.remove("current-level");
})
lvl_arr[currentLvl].classList.add("current-level");
currentLvl++;
}

function endGame(){
    setTimeout(() => {
        question.innerText = `הניקוד שלך: ${score}  כל הכבוד!`
        startButton.style.display = 'block';
        startButton.style.marginLeft = '47%';
        startButton.style.marginBottom = '2%';
        scoreDisplay.innerText = `ניקוד: ${score}`;
        score = 0;
        currentLvl = -1;
        counter = -1;
    }, 3000);
    
}

function correctAnswer(){
    
    counter++;
    if(counter === 1){
   songsInfo.song1 = songsInfo.song2;}
   else if(counter === 2){
    songsInfo.song1 = songsInfo.song3;}
    else if(counter === 3){
        songsInfo.song1 = songsInfo.song4;}
        else if(counter === 4){
            songsInfo.song1 = songsInfo.song5;}
        else if(counter === 5){
            songsInfo.song1 = songsInfo.song6;}
        else if(counter === 6){
            songsInfo.song1 = songsInfo.song7;}
        else if(counter === 7){
            songsInfo.song1 = songsInfo.song8;}
        else if(counter === 8){
            songsInfo.song1 = songsInfo.song9;}
        else if(counter === 9){
            songsInfo.song1 = songsInfo.song10;}
        else if(counter === 10){
            songsInfo.song1 = {
                src: "./songs/Aerosmith -  I Don't Wanna Miss a Thing Lyrics.m4a#t=00:00:28",
                correctAnswer: "Aerosmith - I Don't Wanna Miss a Thing",
                answers: ["Aerosmith - I Don't Wanna Miss a Thing",
                "Elton John - Rocket Man",
                "Guns N' Roses - November Rain", 
                "Jet - Look what you've done"]
        };
        
        endGame();
        return;
    }
    setTimeout(startGame, 1500);
}

