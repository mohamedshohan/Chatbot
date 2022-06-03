const prompt=require("prompt-sync")();
const count = prompt('Enter a string: ');
function countVowel(str) { 
    const exp = /[aeiou]/gi;


    const string = str.match(exp).length;

  
    return string;
}



const result = countVowel(count);

console.log(result);