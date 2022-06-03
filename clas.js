class car{
    constructor(name,color){
        this.name=name;
        this.color=color;

    }

    age(day){
        console.log(day + "sunday");

    }
}
let b=new car();
console.log(b.age("monday"));
