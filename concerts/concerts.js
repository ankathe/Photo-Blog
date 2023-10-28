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

const photosContainer = [
    {
        photo: '../concert/gallery4/amorphis.jpg',
        Information: "Amorphis Concert - I took this photo in  a  big festival in germany",
        location: "Wacken, germany",
    },
    {
        photo: '../concert/gallery4/haggard.jpeg',
        Information: "Haggard Concert - I took this photo in a big festival in germany",
        location: "Bogota, colombia",
    },
    {
        photo: '../concert/gallery4/halloween.jpg',
        Information: "Halloween Concert - I took this photo in a big festival in a contrysite near to bogota",
        location: "Bogota, colombia",
    },
    {
        photo: '../concert/gallery4/harry-potter.jpg',
        Information: "Harry Potter symphony - I took this photo in bogota when i visited movistar arena for first time ",
        location: "Bogota, colombia - Movistar Arena",
    },
    {
        photo: '../concert/gallery4/iron-maiden.jpg',
        Information: "Iron Maiden - I took this photo when i saw the best band in the world, dream fullfilled",
        location: "Wacken, germany",
    },
    {
        photo: '../concert/gallery4/krombakers.jpg',
        Information: "Krombakers - I took this photo in wacken in the principal stage",
        location: "Wacken, germany",
    },
    {
        photo: '../concert/gallery4/megadeath.jpeg',
        Information: "Megadeath - I took this photo when i was waiting for the band to come out ",
        location: "Wacken, germany",
    },
];

const photosContainer = document.getElementById('photos-container');
const photoBox = document.getElementById('photo-box');


function crearTargeta(){
    
}
