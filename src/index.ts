interface Human {
    name: string,
    age: number,
    gender: string
}

const person = {
    name: "jcloud",
    age: 30,
    gender: "male"
}

const sayHello = (person: Human): string =>{
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
}

const data = sayHello(person);

console.log(data);

export {};