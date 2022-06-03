/*const prompt=require("prompt-sync")();
var c = prompt("enter the num");
var b= prompt("enter the num two");

if(c%2==0){
    console.log("number is even");

}
else
console.log("number is odd"); */
const prompt=require("prompt-sync")();

var a = parseInt(prompt("Enter First Number: "));
var b = parseInt(prompt("Enter Second Number: "));
var c = parseInt(prompt("Enter Third Number: "));
var e = parseInt(prompt("Enter Fourth Number: "));
var f = parseInt(prompt("Enter fifth Number: "));

var average=(a + b + c + e + f) / 5;

console.log("the average is  " + average);
