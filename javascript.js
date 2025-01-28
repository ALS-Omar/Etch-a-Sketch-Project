const container=document.getElementById("container");
let clicked=false;
const erase=document.getElementById("Erase");
erase.addEventListener("click",()=>{
    if(clicked==true){
      clicked=false;
       console.log("Clicked is: "+clicked+"And entered if");
    }
    else{
      clicked=!clicked;  
      console.log("clicked is: "+clicked)
    }
    
})

for(let i =0;i<16*16;i++){
const div=document.createElement('div');
div.classList.add("grid-itm");
container.appendChild(div);
console.log("div created");
div.addEventListener("mouseenter",function(e){
    if (clicked==false){
        e.target.style.backgroundColor = 'black';
        console.log(clicked);
    }
    
    else{
       e.target.style.backgroundColor='white'; 
       console.log(clicked);
    }
    
    
})
}
