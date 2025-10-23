let arr=[1,93,5,6,88];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element);
// }
// arr.forEach((element,index,arr) => {
//     console.log(element,index,arr);
// });
let obj={
    a:1,
    b:2,
    c:3
}
// for (const key in obj) {
//     if (!Object.hasOwn(obj, key)) continue;
    
//     const element = obj[key];
//     console.log(key,element);
// }
for (const element of obj) {
    console.log(element);
}