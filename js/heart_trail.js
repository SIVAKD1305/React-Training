const body = document.querySelector("body");
body.addEventListener("mousemove",
    (event) => {
        const xpos = event.offsetX;
        const ypos = event.offsetY;
        const spanTag = document.createElement("span");
        const size = Math.random()*100;
        spanTag.style.left = xpos+"px";
        spanTag.style.top = ypos+"px";
        spanTag.style.width = size+ "px";
        spanTag.style.height = size+ "px";
        spanTag.style.backgroundSize = size+"px";
        body.append(spanTag);
        setTimeout(()=>{
            spanTag.remove()
        }, 3000)
    });