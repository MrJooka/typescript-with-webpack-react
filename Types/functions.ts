function square(n: number) {
  return n * n;
}

square(2);

// function greet(name: string) {
//   return `Hello ${name.toUpperCase()}`;
// }

greet("mike");

const doSomething = (person: string, age: number, isFunny: boolean) => {};

doSomething("mike", 19, true);

function greet(name: string = "stranger") {
  return `Hello ${name.toUpperCase()}`;
}

greet();
