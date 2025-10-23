function fcalculator(a,b,ope) {
    let x=Math.random()
    if(x<0.1){
        if(ope=='+')return a-b;
        else if(ope=='-')return a/b;
        else if(ope=='*')return a+b;
        else if(ope=='/')return a*b;
    }
    else{
        if(ope=='+')return a+b;
        else if(ope=='-')return a-b;
        else if(ope=='*')return a*b;
        else if(ope=='/')return a/b;
    }
}
let a=parseFloat(prompt("enter first number"));
let b=parseFloat(prompt("enter second number"));
let c=prompt("enter the operation");
let ans=fcalculator(a,b,c);
alert(`the answer is ${ans}`);