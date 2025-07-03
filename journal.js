// Greet a user by name
function greet(name) {
  return "Hello, " + name + "!";
}

//add two numbers
function add(a,b) {
  return a+b;
}
console.log(`2+3 =`, add(2,3));

//Check if a number is even
function iseven(num) {
  return num % 2 == 0;
}
console.log(`is 6 even?`, iseven(4));

//Check if a number is odd
function isodd(odd) {
  return num % 2 != 0;
}
console.log(`is 5 odd?`, isodd(4));

//Find max in an arrAY
function findmax(arr) {
  return Math.max(...arr);
}
console.log(`Max of [1,4,5,8,6] is`, findmax([1,4,5,8,6]));


