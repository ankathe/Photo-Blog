// class Photo {
//     constructor(title, description, url) {
//       this.title = alto;
//       this.description = description;
//     }
// }

// const photosConcertObjects = [
//     new Photo('amorphis', 'en ale', '../concerts/gallery4/amorphis.jpg'),
//     new Photo(),
// ]



const photosConcert =[
'../concerts/gallery4/amorphis.jpg', 
'../concerts/gallery4/haggard.jpeg', 
'../concerts/gallery4/halloween.jpg' 
];


// let galleryConcerts = document.getElementById("concert");
// galleryConcerts.classList.add("photos-container");

// photosConcertObjects.forEach(photo => {
//     const photoConcert = document.createElement("img");
//     photoConcert.src = photo;
//     photoConcert.classList.add("photo-concert");
//     galleryConcerts.appendChild(photoConcert);
// });

const sectionTarget = document.getElementById('concert');
const target = document.getElementById('photo-concert');
const photo= '../concerts/gallery4/amorphis.jpg';

function crearparrafo(){
    const divPhoto = document.createElement('img');
    divPhoto.classList.add("concert-box");
    divPhoto.src = photo;
    const information = document.createElement('p');
    information.classList.add("info-concert-box");
    information.innerText = 'Amorphis Concert - this photo i had been take in the big festival in germany';
    
    target.appendChild(divPhoto);
    target.appendChild(information);
}

crearparrafo();







