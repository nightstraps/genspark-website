// JavaScript source code
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

var topButton = document.getElementById("topButton");

window.onscroll = () => { checkScroll();};
topButton.addEventListener("click", () => { window.scrollTo({ top: 0, behavior: "smooth" });});

function checkScroll()
{
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        topButton.style.right = "20px";
    }
    else
    {
        navbar.classList.remove("sticky");
        topButton.style.right = "-80px";
    }
}