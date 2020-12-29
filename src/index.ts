class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string){
        this.name = name;
        this.age = age;
        this.gender = gender
    }
}

const jcloud = new Human("jCloud", 30, "male");

const sayHello = (person: Human): string =>{
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
}

const data = sayHello(jcloud);

console.log(data);

export {};