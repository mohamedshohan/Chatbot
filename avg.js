const prompt=require("prompt-sync")();
var num=[];

for(let i=0;i<5;i++){
    num[i]=prompt("enter the number   ");
}
for(let i=0;i<5;i++){
    console.log(num[i]);
}
