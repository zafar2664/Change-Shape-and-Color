const colorContainer=document.querySelector(".container");
const svgContainer = document.querySelector(".svg-container");
const colorBtn = document.querySelector(".cBtn");
const shapeBtn = document.querySelector(".sBtn");


function getRandomColor(){
    let letter = '0123456789ABCDEF';
    let color = '#';
    for(let i=0;i<6;i++){
        color += letter[Math.floor(Math.random() * 16)];
    }
     return setColor(color);
}

function setColor(color){
    colorContainer.style.backgroundColor = color;
}

let index=1;
let currShape=1;
function getShape(){
    console.log(svgContainer.children.length)
    console.log(index +" "+currShape)
    if(index === currShape){
        for(let i=0;i<svgContainer.children.length;i++){
            if(i === index){
                svgContainer.children[i].style.display="block"
            }else{
                svgContainer.children[i].style.display="none";
            }
        }
    }
    index++;
    currShape++;
    if(index >= svgContainer.children.length && currShape >= svgContainer.children.length){
        index=0;
        currShape=0;
    }

}



colorBtn.addEventListener("click",getRandomColor)
shapeBtn.addEventListener("click",getShape)