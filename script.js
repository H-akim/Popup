var popup = document.getElementById("popup");

var btn = document.getElementsByClassName("btn");
btn[0].addEventListener("click", ()=>{
    popup.classList.add("open_popup");
})

var btn_close = document.getElementsByClassName("btn_close");
btn_close[0].addEventListener("click", ()=>{
    popup.classList.remove("open_popup");
})







