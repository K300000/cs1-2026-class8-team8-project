const slides = document.querySelector(".slides");

slides.style.transform = "translateX(0%)";

function moveSlide(index){
    slides.style.transform =
        `translateX(-${index * 100}%)`;
}