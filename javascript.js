const container=document.getElementById("container");
let clicked=false;
let RainbowClicked=false;
let greyClicked=false;
const erase=document.getElementById("Erase");
const rainbow=document.getElementById("randomCol");
const black=document.getElementById("blackCol");
const grid=document.getElementById("grid");
const greyscale=document.getElementById("grey");

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
        greyClicked=false;
    }
})

rainbow.addEventListener("click",()=>{
    if(RainbowClicked==false){
        RainbowClicked=true;
        clicked=false;
        greyClicked=false;
    }
})
black.addEventListener("click",()=>{
    if(RainbowClicked==true||clicked==true||greyClicked==true){
        greyClicked=false;
        RainbowClicked=false;
        clicked=false;
    }
})

greyscale.addEventListener("click",()=>{
    if(greyClicked==false){
        console.log("HEY");
        greyClicked=true;
        RainbowClicked=false;
        clicked=false;
    }
})

grid.addEventListener("click",()=>{
    let value=0;
    do{
        value=prompt("Enter the value for your grid(Between 0 and 100)");
    }while(value<0||value>100);
    
    
    let widthval=600/value-2;
    widthval=widthval+"px";
    while(container.firstChild)
    container.removeChild(container.firstChild);
for(let i =0;i<value;i++){
    for(let j=0;j<value;j++){
        const div=document.createElement("div");
div.classList.add("grid-row");
div.style.width=widthval;
div.style.height=widthval;
console.log(div.style.width);
container.appendChild(div);
console.log("div created"); 

 div.addEventListener("mouseenter",function(e){
    if (clicked==false && RainbowClicked==false && greyClicked==false){
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
    else if (greyClicked==true){
        if(e.target.style.backgroundColor!='black'){
            e.target.style.backgroundColor='black';
            e.target.style.opacity=0.1;
        }
        else{
            console.log(e.target.style.opacity);
            opacity=parseFloat(e.target.style.opacity);
            opacity+=0.1;
            console.log(opacity);
            e.target.style.opacity=opacity;
            console.log(e.target.style.opacity+"Is");
        }
       
    }
    else{
       e.target.style.backgroundColor='white'; 
       console.log(clicked);
    }   
})

}
    }

})



function getRandomRGBColor() {
    const r = Math.floor(Math.random() * 256); // Random red value between 0 and 255
    const g = Math.floor(Math.random() * 256); // Random green value between 0 and 255
    const b = Math.floor(Math.random() * 256); // Random blue value between 0 and 255
    
    return `rgb(${r}, ${g}, ${b})`;
  }
