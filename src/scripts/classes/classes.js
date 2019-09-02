function Person(name) {
    this.name = name;
};

Person.prototype.sayHello = function () {
    console.log(`Hello ${this.name}`);
};

//class Person{
//    constructor(name){
//        this.name = name;
//    }

//    sayHello(){
//        console.log(`Hello ${this.name}`);
//    }
//}

module.exports = Person;

