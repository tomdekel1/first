import { countries, reset, search as goSearch, } from './countries.js';


let heartIcon;
const search = document.getElementById('search');
const cards = document.getElementById('cards');
// let likedCountries_arr = [];
// let heart_arr;
// let heart = [];
    
search.addEventListener('input', (e) => {
    const word = e.target.value;
    cards.innerHTML = '';
    reset();
    if (word === '' || word === null) {
        cards.innerHTML = '';
        createAllCards();
    }
    goSearch(word);
    createAllCards();
});

const createCard = (country) => {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card shadow rounded m-2 col-md-3 col-sm-10';

    const cardImg = document.createElement('img');
    cardImg.src = country.flags.png;
    cardImg.className = 'card-img-top img border shadow rounded mt-2';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = country.name.common;

    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.textContent = `capital: ${country.capital}`;

    const cardFooter = document.createElement('div');
    cardFooter.className = 'card-footer d-flex justify-content-center';

    heartIcon = document.createElement('i');
    heartIcon.className = 'fa fa-heart text-secondary';
// prints card to html
    cardDiv.appendChild(cardImg);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);

    cardDiv.appendChild(cardBody);
    cardFooter.appendChild(heartIcon);
    cardDiv.appendChild(cardFooter);

    cards.appendChild(cardDiv);
}

const createAllCards = () => {
    countries.forEach((country) => {
        createCard(country);

    });
}

// function eventAdder(){
//     heart = document.querySelectorAll('i');
//     heart_arr = [...heart];
//     heart_arr.forEach( (item) => {
//         item.addEventListener('click', () =>{
//             addToFavorites(item);
//         })
//     }
// )
// }


// function addToFavorites(elem){
//             if (elem.className == 'fa fa-heart text-secondary'){
//                 elem.className = 'fa fa-heart text-danger';
//                 likedCountries_arr.push(elem);
//                 localSave();
                
//             // likedCountries_arr.push(icon);
//             } else {
//                 elem.className = 'fa fa-heart text-secondary';
//                 likedCountries_arr.splice(likedCountries_arr[elem], 1);
//                 localSave();
//                 // likedCountries_arr.splice(likedCountries_arr[icon], 1);
//             }
            
//     }
  


    // function savePage() {
    //     localStorage.setItem("lastname", "Smith");
    //     // localStorage.likedCountries = likedCountries_arr;
        
    // }


export { createAllCards};