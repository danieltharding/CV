const button = document.getElementById("button");
const home = document.getElementById("home");
const email = document.getElementById("email");

const goHome = () =>{
    window.location = "index.html";
}

const emailLink = () => {
    
}

const doc = () => {
    window.open("CV.pdf");
}
email.addEventListener('click', emailLink)
home.addEventListener("click", goHome)
button.addEventListener("click", doc);