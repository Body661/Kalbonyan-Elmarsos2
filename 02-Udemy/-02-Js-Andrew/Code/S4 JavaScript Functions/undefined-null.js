let name;
if (name === undefined) {
  console.log("please provide a name");
} else {
  console.log(name);
}

let square = function (num) {
  console.log(num);
};
let result = square();
console.log(result);

let age = 16;
age = undefined;
console.log(age);
