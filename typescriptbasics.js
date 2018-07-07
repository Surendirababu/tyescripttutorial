var fn = function () {
    'Hello World';
};
var a;
var b;
var c;
a = 10;
b = "babu";
c = true;
//Array
var arr;
arr = [1, 2, 3, 4, 5];
//tuple can contain like an array of different data type elements
var mytup;
mytup = [1, false, 'test'];
console.log(mytup);
//optionl argument in function should not use in the code.
function add(a, b, c, d) {
    return a + b + c;
}
console.log("Optional : " + add(1, 2, 3));
console.log("Optional with passing parameters : " + add(1, 2, 3, 5));
//default argument in function can be used in code.
function mul(a, b, c) {
    if (c === void 0) { c = 0; }
    return a + b + c;
}
console.log("defaul : t" + mul(1, 2, 3));
console.log("default witout passing third arg :" + mul(1, 2));
