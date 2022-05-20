var images = [
    '../assets/img/bg_GRIS3.jpg',
    '../assets/img/bg_GRIS11.jpg',
    '../assets/img/bg_GRIS13.jpg',
    '../assets/img/bg_GRIS10.png',
    '../assets/img/bg_GRIS8.jpg',
    '../assets/img/bg_GRIS9.jpg',
];


function trocaBackground(){
    var i = Math.floor(Math.random() * images.length);
    document.getElementById('body_img').style.backgroundImage = "url("+images[i]+")";
    console.log(images[i]);
}

setInterval(trocaBackground, 3000)