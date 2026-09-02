let num1=prompt("Enter first number")
let num2=prompt("Enter second number")
let operation=prompt("Enter operation")
let random=Math.random()
let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}
if (random>0.1){
    success(`The result is ${eval(`${num1} ${operation} ${num2}`)}`)
}else{
    operation=obj[operation]
    warning(`The result is ${eval(`${num1} ${operation} ${num2}`)}`);
}