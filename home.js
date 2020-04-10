var button = document.getElementsByClassName("CV")[0];
var email = document.getElementById("email");
var popUp = document.getElementsByClassName("popUp")[0];

const openNewPage = () => {
    window.location="CV.html";
}

const addToClipBoard = () =>{
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = "danieltharding@gmail.com";
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    popUp.className = ("popUpShow");
    setTimeout(()=>{popUp.className="popUp"}, 3000);
    
}



email.addEventListener("click", addToClipBoard);
button.addEventListener("click", openNewPage);

