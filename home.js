var button = document.getElementsByClassName("CV")[0];
var email = document.getElementById("email");

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
}



email.addEventListener("click", addToClipBoard);
button.addEventListener("click", openNewPage);

