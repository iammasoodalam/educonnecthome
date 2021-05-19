const hamburger = document.querySelector(".hamburger"),
      navigationLinks = document.querySelector("#navigation-links"),
      mainSection = document.querySelector("main"),
      overlay = document.querySelector(".overlay")

var hamburgerFn = () => {
    if(hamburger.classList.contains("active")){
        hamburger.classList.remove("active")
        navigationLinks.style.visibility = "hidden"
        navigationLinks.style.opacity = "0"
        overlay.style.visibility = "hidden"
        overlay.style.opacity = "0"
    }
}
hamburger.addEventListener("click", () => {
    if(hamburger.classList.contains("active")){
        hamburger.classList.remove("active")
        navigationLinks.style.visibility = "hidden"
        navigationLinks.style.opacity = "0"
        overlay.style.visibility = "hidden"
        overlay.style.opacity = "0"
        
    } else {
        hamburger.classList.add("active")
        navigationLinks.style.visibility = "visible"
        navigationLinks.style.opacity = "1"
        overlay.style.visibility = "visible"
        overlay.style.opacity = "1"
    }
})
overlay.addEventListener("click", hamburgerFn)
window.addEventListener("scroll", hamburgerFn)
