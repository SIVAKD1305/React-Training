const body = document.querySelector("body");
careers = ["FE-DEVELOPER", "EDUCATOR", "TEAM_LEADER", "BE-DEVEVELOPER"];
let careerIndex = 0, charIndex = -1;
const updateTxt = () => {
    if(charIndex === careers[careerIndex].length){
        careerIndex++;
        charIndex = -1;
    }
    if(careerIndex == careers.length){
        careerIndex = 0;
    }
    charIndex++;
    body.innerHTML = `<h1> I AM 
    ${careers[careerIndex].charAt(0)==="A" ? "AN" :
        careers[careerIndex].charAt(0)==="E" ? "AN" : 
        careers[careerIndex].charAt(0)==="I" ? "AN" :
        careers[careerIndex].charAt(0)==="O" ? "AN" :
        careers[careerIndex].charAt(0)==="U" ? "AN": "A"} 
    ${careers[careerIndex].slice(0,charIndex)}</h1>`
    setTimeout(updateTxt,300);
};
updateTxt();
