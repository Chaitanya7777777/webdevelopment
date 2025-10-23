let first,second,third;
let a=Math.random();
if(a<0.33){
    first="crazy";
}
else if(a<0.66){
    first="amazing";
}
else{
    first="fire";
}
let b=Math.random();
if(b<0.33){
    second="engine";
}
else if(b<0.66){
    second="food";
}
else{
    second="garment";
}
let c=Math.random();
if(c<0.33){
    third="bros";
}
else if(c<0.66){
    third="limited";
}
else{
    third="hub";
}
console.log(`${first} ${second} ${third}`);