const prompt=require("prompt-sync")();
const string = prompt('Enter a string: ');
function checkPalindrome(string){
    const len = string.length;
    for(let i=0;i<=len/2;i++){
        if(string[i]!=string[len-1-i]){
            return "its not palindrome"
        }
        else
        return " palindrome"
    }
}
const value = checkPalindrome(string);

console.log(value);