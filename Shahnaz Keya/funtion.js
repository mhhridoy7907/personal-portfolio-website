
const text = "Learning is the rhythm that guides us through life’s dance";
let i = 0;

function typingEffect(){
    if(i < text.length){
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typingEffect, 80);
    }
}

typingEffect();
