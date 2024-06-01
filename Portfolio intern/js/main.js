// Header Scroll

let nav= document.querySelector(".navbar"); 
window.onscroll=function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}

// how to hide nav when it scroll

let navbar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })
})  



// How to loop in progress bar
const progressBar = document.querySelectorAll(".progress-bar");
var progressBarContainer = document.querySelector(".show-on-scroll");

let start;

document.onscroll=function(){
    if(isElementInViewport(progressBarContainer)){
        if(!start){
            window.requestAnimationFrame(loop);
        }
    }else{
        start=null;
    }
};

const animationTime = 1000;

function loop(timestamp){
    if(!start){
        start = timestamp;
    }
    const elapsed = timestamp - start;
    const progress = elapsed / animationTime;

    progressBar.forEach((bar) => {
        const progressComplete =bar.getAttribute("data-complete");
        const width = progress < 1 ? Math.ceil(progress * 100 ): progressComplete; 

        if (width <= progressComplete) {
            bar.style.width = width + "%";
            bar.innerHTML = width + "%";
        }
    });
    if(progress <= 1){
        window.requestAnimationFrame(loop);
    }
}


function isElementInViewport(element){
    var rectangle = element.getBoundingClientRect();
    var height = window.innerHeight || document.documentElement.clientHeight;
    var top = rectangle.top;
    var bottom = rectangle.bottom;

    return(
        (top <= 0 && bottom >=0) ||
        (bottom >= height && top <= height) ||
        (top >= 0 && bottom <=height)
    );
}
