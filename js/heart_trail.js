const body = document.querySelector("body");
console.log(body)
body.addEventListener("mousemove",
    (event) => {
        const xpos = event.offsetX;
        const ypos = event.offsetY;
        const spanTag = document.createElement("span");
        spanTag.style.left = xpos+"px";
        spanTag.style.top = ypos+"px";
        body.append(spanTag);
        // body.appendChild(spanTag);
    });