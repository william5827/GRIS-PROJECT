var images = [
    '../assets/img/bg_GRIS2.jpg',
    '../assets/img/bg_GRIS12.jpg',
    '../assets/img/bg_GRIS4.jpg',
    '../assets/img/bg_GRIS5.jpg',
    '../assets/img/bg_GRIS6.jpg',
    '../assets/img/bg_GRIS7.png',
];


function trocaBackground(){
    var i = Math.floor(Math.random() * images.length);
    document.getElementById('body_img').style.backgroundImage = "url("+images[i]+")";
    
    console.log(images[i]);
}

setInterval(trocaBackground, 3000)