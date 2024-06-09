import { getDataAsync } from './countries.js';
import { createAllCards } from './dom.js';


let heart_arr;
let heart = [];
let fav_arr = [];
let liked_arr = [];

function eventAdder(){
    heart = document.querySelectorAll('i');
    heart_arr = [...heart];
    heart_arr.forEach( (item) => {
        item.addEventListener('click', () =>{
            addToFavorites(item);
            fav_arr.push(item);
        })
    }
)
}


function addToFavorites(elem){
            if (elem.className == 'fa fa-heart text-secondary'){
                elem.className = 'fa fa-heart text-danger';
                saveLocal();
            } else {
                elem.className = 'fa fa-heart text-secondary';
                saveLocal();
            }
            
    }

    function saveLocal(){
        fav_arr.forEach( (heart) => {
            if (heart.classList.contains('text-danger')){
                liked_arr.push(heart);
                localStorage.x = JSON.stringify(heart_arr);
                console.log(liked_arr);
            }
    })

    }

await getDataAsync();
createAllCards();
eventAdder();


// localStorage.clear("x","list","lastName");


// export {  };