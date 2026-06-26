const slides = document.querySelector(".slides");

slides.style.transform = "translateX(0%)";

let currentIndex = 0;

function moveSlide(index){
    currentIndex = index;
    slides.style.transform =
        `translateX(-${index * 100}%)`;
    updateDots();
}

function updateDots(){

    const dots = document.querySelectorAll(".dot");

    dots.forEach(dot=>{
        dot.classList.remove("active");
    });

    dots[currentIndex].classList.add("active");
}

function nextSlide(){

    currentIndex++;

    if(currentIndex > 2){
        currentIndex = 0;
    }

    moveSlide(currentIndex);
}

function prevSlide(){

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = 2;
    }

    moveSlide(currentIndex);
}