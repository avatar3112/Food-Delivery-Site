let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click",function(){
    navbar.classlist.toggle("active");
});

window.onscroll=()=>{
    navbar.classList.remove('active');
}