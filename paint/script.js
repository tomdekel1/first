const gridScreen = document.querySelector('#grid');
let divs_arr = [];
let newBoard = 
    [  1,  "mine", 2,   1,    1,
       2,    2,    4, "mine", 2,
       2,  "mine", 4, "mine", 2,
       3,  "mine", 3,   2,    2,
     "mine", 2,    3,   1,  "mine"
    
];

function drawGrid(){

    for (let i = 0; i < 25; i++){

        const div = document.createElement('div');
        divs_arr.push(div);
        div.className = 'hide';
    //   newBoard[i] == "mine"? div.className = 'mine' : div.innerText = newBoard[i];

        gridScreen.appendChild(div);
    }

    divs_arr.forEach((slot, i) => {
        addEventListener("click", (ev) =>{
             newBoard[slot] == "mine"? ev.target.className = 'mine' : ev.target.innerText = newBoard[slot];
             console.log(slot);
        })
    })
   
}







// function drawMines(){
// console.log(divs_arr);


// divs_arr.forEach((div) => {
// const randomNum = Math.floor(Math.random() * 10);
// console.log(randomNum);
// if (randomNum === 9){
//     div.classList.add('mine');
//     div.innerText = "blue";
// }
// })


// }