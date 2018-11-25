class Person {
    constructor(name) {
        this.name = name;
    }

    greet(){
        return this.name +  ' say hello.';
    }
}

console.log(new Person('Ganesh').greet());