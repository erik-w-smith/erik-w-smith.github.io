const screenWidth = window.innerWidth;
const innerHeight = window.innerHeight;


function myFunction() {
    if (screenWidth <= 650 && document.body.scrollTop <= 200) {
        document.getElementById("nav-logo").innerText = "";
        document.getElementById("nav-logo").className = "";

    } else if(screenWidth > 650 && document.body.scrollTop <= 400) {
        document.getElementById("nav-logo").innerText = "";
        document.getElementById("nav-logo").className = "";

    } else {
        document.getElementById("nav-logo").innerText = "Best Esthetics";
        document.getElementById("nav-logo").className = "company_name";
    }
}
window.onscroll = function() {myFunction()};
window.addEventListener('resize', myFunction());


function toggleNav() {

    const navLinks = document.querySelector(".nav-items");
    if(navLinks.className === "nav-items") {
    navLinks.className += " show-mobile-nav";
    } else {
        navLinks.className = "nav-items";
    }
}




function comingSoon(x) {
    x.children[0].src = "/images/coming_soon.png";
}
function skinCareImg(x){
    x.children[0].src="/images/white_bottles_sm.jpg";
}
function lashImg(x){
    x.children[0].src="/images/eyelash.jpg";
}
function waxingImg(x){
    x.children[0].src="/images/legs.jpeg";
}
function surgaringImg(x){
    x.children[0].src="/images/surgaring.jpg";
}
function tintImg(x){
    x.children[0].src="/images/tinting.jpg";
}
function scrubImg(x){
    x.children[0].src="/images/scrubs.png";
}
function oilsImg(x){
    x.children[0].src="/images/oils.jpg";
}
function maskImg(x){
    x.children[0].src="/images/mask_2.jpg";
}