const sayHello = (name: string, age: number, gender: string): string =>{
    return `Hello ${name}, you are ${age}, you are a ${gender}`;
}

const data = sayHello("jCloud", 30, "male");

console.log(data);

export {};