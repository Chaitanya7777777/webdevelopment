// let boxes=document.getElementsByClassName("box");
let boxes=document.querySelector(".container").children;
Array.from(boxes).forEach(e => {
    e.style.backgroundColor=getrandomcolor();
    e.style.color=getrandomcolor();
});
function getrandomcolor(){
    let a=Math.ceil((Math.random())*255);
    let b=Math.ceil((Math.random())*255);
    let c=Math.ceil((Math.random())*255);
    return `rgb(${a} ${b} ${c})`;
}