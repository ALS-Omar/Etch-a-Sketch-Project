const container=document.getElementById("container");
let clicked=false;
let RainbowClicked=false;
const erase=document.getElementById("Erase");
const rainbow=document.getElementById("randomCol");
const black=document.getElementById("blackCol");
const grid=document.getElementById("grid");

// erase.addEventListener("click",()=>{
//     if(clicked==true){
//       clicked=false;
//        console.log("Clicked is: "+clicked+"And entered if");
//     }
//     else{
//       clicked=!clicked;  
//       console.log("clicked is: "+clicked)
//     }
    
// })


erase.addEventListener("click",()=>{
    if(clicked==false){
        clicked=true;
        RainbowClicked=false;
    }
})

rainbow.addEventListener("click",()=>{
    if(RainbowClicked==false){
        RainbowClicked=true;
        clicked=false;
    }
})
black.addEventListener("click",()=>{
    if(RainbowClicked==true||clicked==true){
    
        RainbowClicked=false;
        clicked=false;
    }
})

grid.addEventListener("click",()=>{
    prompt("Enter the value for your grid(Between 0 and 100)")
})



for(let i =0;i<16*16;i++){
const div=document.createElement("div");
div.classList.add("grid-itm");
container.appendChild(div);
console.log("div created"); 
 div.addEventListener("mouseenter",function(e){
    if (clicked==false && RainbowClicked==false){
        e.target.style.backgroundColor = 'black';
        console.log(clicked);
        console.log(RainbowClicked);
    }
    else if(RainbowClicked==true){
        const r = Math.floor(Math.random() * 256); // Random red value between 0 and 255
        const g = Math.floor(Math.random() * 256); // Random green value between 0 and 255
        const b = Math.floor(Math.random() * 256); // Random blue value between 0 and 255
        e.target.style.backgroundColor=`rgb(${r},${g},${b})`;
        console.log("Clciked is:"+clicked+"And rainbow is: "+RainbowClicked);
    }
    else{
       e.target.style.backgroundColor='white'; 
       console.log(clicked);
    }   
})
}

function getRandomRGBColor() {
    const r = Math.floor(Math.random() * 256); // Random red value between 0 and 255
    const g = Math.floor(Math.random() * 256); // Random green value between 0 and 255
    const b = Math.floor(Math.random() * 256); // Random blue value between 0 and 255
    
    return `rgb(${r}, ${g}, ${b})`;
  }
