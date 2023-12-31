// *** forma para renderizar con JSON, 
// lo siguiente es para renderizar solo una caja
// con la foto y los estilos ***

// const photosConcert =[
// '../concerts/gallery4/amorphis.jpg', 
// '../concerts/gallery4/haggard.jpeg', 
// '../concerts/gallery4/halloween.jpg' 
// ];

// const sectionTarget = document.getElementById('concert');
// const target = document.getElementById('photo-concert');
// const photo= '../concerts/gallery4/amorphis.jpg';

// function crearparrafo(){
//     const divPhoto = document.createElement('img');
//     divPhoto.classList.add("concert-box");
//     divPhoto.src = photo;
//     const information = document.createElement('p');
//     information.classList.add("info-concert-box");
//     information.innerText = 'Amorphis Concert - this photo i had been take in the big festival in germany';
    
//     target.appendChild(divPhoto);
//     target.appendChild(information);
// }

// crearparrafo();

// *** el siguiente codigo es para renderizar usando objetos
// esto con el fin de agilizar y asi no tener que escribir 
// dentro de la funcion lo que se va a renderizar textualmente,
// es decir escribir parrafos, titulos etc dentro de la funcion. ***

const cards = [
    {
        photo: '../concerts/gallery4/amorphis.jpg',
        information: "Amorphis Concert - I took this photo in  a  big festival in germany",
        location: "Wacken, germany",
    },
    {
        photo: '../concerts/gallery4/haggard.jpeg',
        information: "Haggard Concert - I took this photo in a big festival in germany",
        location: "Bogota, colombia",
    },
    {
        photo: '../concerts/gallery4/halloween.jpg',
        information: "Helloween Concert - I took this photo in a big festival in a contrysite near to bogota",
        location: "Bogota, colombia",
    },
    {
        photo: '../concerts/gallery4/harry-potter.jpg',
        information: "Harry Potter symphony - I took this photo in bogota when i visited movistar arena for first time ",
        location: "Bogota, colombia - Movistar Arena",
    },
    {
        photo: '../concerts/gallery4/iron-maiden.jpg',
        information: "Iron Maiden - I took this photo when i saw the best band in the world, dream fullfilled",
        location: "Wacken, germany",
    },
    {
        photo: '../concerts/gallery4/krombakers.jpg',
        information: "Krombakers - I took this photo in wacken in the principal stage",
        location: "Wacken, germany",
    },
    {
        photo: '../concerts/gallery4/megadeath.jpeg',
        information: "Megadeath - I took this photo when i was waiting for the band to come out ",
        location: "Wacken, germany",
    },
];

const photosContainerElem = document.getElementById('photos-container');


function designTarget(photoObj, index){
    const cardDiv = document.createElement('div');
    const divImg = document.createElement('div');
    const divInfo = document.createElement('div');
    
    const img = document.createElement('img');
    const location = document.createElement('p');
    const description = document.createElement('p');
    const like = document.createElement('button');
    const spanBtn = document.createElement('span');
    const spanIcon = document.createElement('span');

    img.src = photoObj.photo;
    spanIcon.innerHTML ='<i class="fa-regular fa-heart"></i>';
    location.textContent = photoObj.location;
    description.textContent = photoObj.information;
    spanBtn.innerText = 0 ;

    spanIcon.id = 'icon';
    spanIcon.classList.add('span-icon');
    spanBtn.id = 'count-' + index;
    spanBtn.classList.add('span-btn');
    cardDiv.classList.add('photo-concert');
    divImg.classList.add('concert-box');
    divInfo.classList.add('info-concert-box');
    like.classList.add('button-like');
    location.classList.add('location-style');
    description.classList.add('description');
    img.classList.add('img')
    
    divImg.appendChild(img);
    cardDiv.appendChild(divImg);
    cardDiv.appendChild(divInfo);
    divInfo.appendChild(description);
    divInfo.appendChild(location);
    divInfo.appendChild(like);
    like.appendChild(spanBtn);
    like.appendChild(spanIcon);
    photosContainerElem.appendChild(cardDiv);

    

like.addEventListener("click", () => {
    let clicked = true;
    if(clicked){
        spanIcon.innerHTML = '<i class="fa-regular fa-heart"></i>';
        spanBtn.textContent++;
    }else{
        spanIcon.innerHTML = '<i class="fa-regular fa-heart"></i>';
        spanBtn.textContent--;
    }
});

}

cards.forEach(designTarget);

var input = document.getElementById('searchingNow');
function searching (){
    const photosContainer = document.getElementById('photos-container');
    
    var answers = cards.filter(info => info.location.toLowerCase().includes(input.value));
    answers.forEach(designTarget) 
}

function viewSearch (search){
    var showSearch = document.getElementById('photos-container');
    showSearch.innerHTML = '';
}

input.addEventListener('keypress', () => {
    viewSearch()  
    searching()
})


// let clicked = true;

// like.addEventListener("click", () => {
//     if(!clicked){
//         clicked=true;
//         spanIcon.innerHTML = '<i class="fa-regular fa-heart"></i>';
//         spanBtn.textContent++
//     }else{
//         clicked=false;
//         spanIcon.innerHTML = '<i class="fa-regular fa-heart"></i>';
//         spanBtn.textContent--;
//     }
// });
