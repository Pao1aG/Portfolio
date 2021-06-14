//Event listeners for Contact Me Section----------------
var email = document.querySelector("#email"); 
email.addEventListener("click", function(event) {
    window.open('mailto:paolaagonzalezm@email.arizona.edu','_blank');
});

var github = document.querySelector("#github");
github.addEventListener("click", function(event) {
    event.preventDefault();

    window.open('https://www.github.com/Pao1aG/','_blank');
});

var linkedin = document.querySelector("#linkedin");
linkedin.addEventListener("click", function(event) {
    event.preventDefault();
    window.open('https://www.linkedin.com/in/paola-gonzalez-martinez-14b641117/','_blank');
});

//Event listeners for Cards----------------------
//large card will be project1
// var largeCard = document.querySelector("#large-card");
// largeCard.addEventListener("click", function(event) {
//     window.open('', '_blank');
// });

//CARD2
var card2 = document.querySelector("#card2");
card2.addEventListener("click", function(event) {
    event.preventDefault();
    window.open('https://github.com/Pao1aG/Weather-Dashboard', '_blank');
});

//CARD3
var card3 = document.querySelector("#card3");
card3.addEventListener("click", function(event) {
    event.preventDefault();
    window.open('https://github.com/Pao1aG/Password-Generator', '_blank');
});

//CARD4
var card4 = document.querySelector("#card4");
card4.addEventListener("click", function(event) {
    event.preventDefault();
    window.open('https://github.com/Pao1aG/Workday-Scheduler', '_blank');
});

//CARD5
var card5 = document.querySelector("#card5");
card5.addEventListener("click", function(event) {
    event.preventDefault();
    window.open('https://github.com/Pao1aG/Code-Quiz', '_blank');
})



