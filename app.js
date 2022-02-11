
/******** Sticky menu re-size on scroll */

const imgContainer = document.getElementById('image-container');
const menuContainer = document.getElementById('menu-container');
const header = document.getElementById('header');
/*
window.onscroll = function() {scrollFunction()};    

function scrollFunction() {
    if (window.innerWidth > 700) {
        if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
            imgContainer.style.height = "3.5rem";
            menuContainer.style.height = "2.5rem";
        }   else {
            imgContainer.style.height = "10rem";
            menuContainer.style.height = "6rem";
        }
    }
}   */


window.addEventListener('scroll', () => {
    if (window.innerWidth > 700) {
        if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
          /*  imgContainer.style.height = "3.5rem";
            menuContainer.style.height = "2.5rem";  */
            imgContainer.style.display = "flex";
        }   else {
          /*  imgContainer.style.height = "10rem";
            menuContainer.style.height = "6rem";    */
            imgContainer.style.display = "none";
        }
    }
})          


/******** hidden nav bar on scroll */

let newScrollPosition = 0;
let lastScrollPosition = 0;
// Header already been declared as 'header'

window.addEventListener('scroll', e => {
    lastScrollPosition = window.scrollY;

    if (newScrollPosition < lastScrollPosition && lastScrollPosition > 50) {
        header.classList.remove('slide-down');
        header.classList.add('slide-up');
        header.style.transition = "all .5s";
    }   else if (newScrollPosition > lastScrollPosition) {
        header.classList.remove('slide-up');
        header.classList.add('slide-down');
        header.style.transition = "all .5s";
    }

    newScrollPosition = lastScrollPosition;
});

/******** Responsive Menu Toggle */

const menuToggleBtn = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const homePic = document.querySelectorAll('.home-pic');

const navLinks = Array.from(document.querySelectorAll('.nav-link'));
const body = document.body;

menuToggleBtn.addEventListener('click', () => {
    menuToggleBtn.classList.toggle('active');           // toggle the hamburger menu animaiton
    menu.classList.toggle('active');  
    body.classList.toggle('active');                  // toggle the menu 
  /*  for (let i = 0; i < homePic.length; i += 1) {       // selecting all images to toggle filter greyscale, 
        homePic.item(i).classList.toggle('active');       // z-index has decided to work so this code is unrequired
    }   */

    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', () => {
            menuToggleBtn.classList.remove('active');
            menu.classList.remove('active');
            body.classList.remove('active');   
        })
    }
})


/******** About Me - show more / less */

const dots = document.getElementById('dots');
const moreTxt = document.getElementById('more-text');
const moreTxtBtn = document.getElementById('more-text-button');

moreTxtBtn.addEventListener('click', () => {
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        moreTxtBtn.innerHTML = "Show More";
        moreTxt.style.display = "none";
    }   else {
        dots.style.display = "none";
        moreTxtBtn.innerHTML = "Show Less";
        moreTxt.style.display = "inline";
    };
});


/******** Play / Pause audio */

const playPauseBtns = document.getElementsByClassName('play-pause-buttons');
for (let i = 0; i < playPauseBtns.length; i++) {        // selecting the play buttons individualy
    const playPauseBtn = playPauseBtns[i];              

    playPauseBtn.addEventListener('click', (e) => {
        console.log('test');
        let playPauseBtn = e.target;                                        // <- selecting the clicked button as an event to..
        const audioOption = playPauseBtn.parentElement.parentElement;       //<- ..then selection the parent element..
        console.log(playPauseBtn.parentElement.parentElement);
        const demo = audioOption.getElementsByClassName('demo')[0];         //<- ..to then select the child within the parent element

        function playPause(e) {
            if (demo.paused) {
                demo.play();
              /*  playPauseBtn.src='images/play/pause.png'; */
                playPauseBtn.src="images/play/pause-button (1).png";
            }   else {
                demo.pause();
              /*  playPauseBtn.src='images/play/play 2.png';    */
                playPauseBtn.src="images/play/play-button (1).png";
            }
        }
        playPause();
        demo.addEventListener('ended', () => {
          /*  playPauseBtn.src="images/play/play 2.png";    */
            playPauseBtn.src="images/play/play-button (1).png";
        })
    })
}   



/******** Reviews Slides */

const reviewSlide = document.getElementsByClassName('review-slide');

let reviewSlideIndex = 1;
showReviewSlides(reviewSlideIndex);

function plusSlides(n) {
    showReviewSlides(reviewSlideIndex += n);
}

function currentReviewSlide(n) {
    showReviewSlides(reviewSlideIndex = n);
}

function showReviewSlides(n) {
    let i;
    if (n > reviewSlide.length) {reviewSlideIndex = 1}
    if (n < 1) {reviewSlideIndex = reviewSlide.length}
    for (i = 0; i < reviewSlide.length; i++) {
        reviewSlide[i].style.display = "none";
    }
    reviewSlide[reviewSlideIndex-1].style.display = "flex";
}

/******** Company Logo Slideshow */

const logoSlides = document.getElementsByClassName('logo-slides');

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    for (i =0; i < logoSlides.length; i++) {
        logoSlides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > logoSlides.length) {
        slideIndex = 1;
    }
    logoSlides[slideIndex-1].style.display = "flex";
    setTimeout(showSlides, 6000);

};

