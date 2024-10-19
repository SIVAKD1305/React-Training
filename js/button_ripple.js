const button = document.querySelector(".btn");
button.addEventListener("mousemove",(event)=>{
    const x = event.pageX-button.offsetLeft;
    const y = event.pageY-button.offsetTop;
    button.style.setProperty("--left",x+"px");
    button.style.setProperty("--top",y+"px");
});