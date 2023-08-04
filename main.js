const slide = document.querySelector(".news-container");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const closeButton = document.querySelector(".close");
const createProfileButton = document.querySelector(".createProfileButton");
let marg = 0
let window_width = Math.floor(document.documentElement.clientWidth * 33 / 100)
let maxSize = window_width * 3;
const nextNew = () => {
    marg+= window_width

    slide.style.transform = `translateX(-${marg}px)`;

    if(marg > maxSize){

        marg = maxSize
    }
}
const prewNew = () => {
    marg -= window_width

    slide.style.transform = `translateX(-${marg}px)`;
    if(marg < 0){
        marg = 0
        slide.style.transform = `translateX(-${marg}px)`;
    }
}

const openModal = () => {
    const modalProfile = document.querySelector(".CreateProfileMenu");

    modalProfile.style.display = "flex"
}

const closeModal = () => {
    const modalProfile = document.querySelector(".CreateProfileMenu");

    modalProfile.style.display = "none"

}
createProfileButton.addEventListener("click",openModal);
closeButton.addEventListener("click",closeModal);
prev.addEventListener("click", prewNew);
next.addEventListener("click", nextNew);