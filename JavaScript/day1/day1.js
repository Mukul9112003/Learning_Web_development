/*let   → block scoped
const → block scoped
var   → function scoped 
*/
/*A const variable must be initialized when declared.*/
var x = 10;

if (true) {
  let x = 20;
  const y = 30;
  var z = 40;

  console.log(x);
}

console.log(x);
console.log(z);
console.log(y);