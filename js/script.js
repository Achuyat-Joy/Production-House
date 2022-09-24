// toggle for menu 

const toggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    showcase.classList.toggle('active');
})


//scroll vanishing menu

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toggle.classList.remove('active');
    showcase.classList.remove('active');
  } 
}


//slide for team member

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {

    var w = document.documentElement.clientWidth || window.innerWidth;

    if(w > 568){
        let i;
        let slides = document.getElementsByClassName("slides");
        if (n > slides.length){
            slideIndex = 1
            }    
        if (n < 1){
            slideIndex = slides.length
            }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slides[slideIndex-1].style.display = "flex";  
    }
    else if(w < 569){
        let i;
        let slides = document.getElementsByClassName("mobSlides");
        if (n > slides.length){
            slideIndex = 1
            }    
        if (n < 1){
            slideIndex = slides.length
            }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slides[slideIndex-1].style.display = "flex";  
    }
}