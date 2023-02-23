const image=document.querySelector(".bg-image");


window.addEventListener("scroll",()=>{
console.log(window.scrollY,160-window.scrollY/10,window.scrollY/12)
Updateeffect();
})

function Updateeffect(){

    image.style.opacity=1-window.scrollY/900;
    image.style.backgroundSize=160-window.scrollY/10+"%";
}