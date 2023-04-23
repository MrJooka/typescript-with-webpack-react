// function square(n: number) {
//   return n * n;
// }

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

function square(n: number): number {
  return n * n;
}

const add = (a: number, b: number): number => a + b;

function random(num: number) {
  if (Math.random() > 0.5) {
    return num.toString();
  }
  return num;
}

const colors = ["red", "green", "blue"];
colors.map((color) => color.toUpperCase());

// void는 엄밀히 말하면 undefined를 반환하는 함수를 의미한다.
function printTwice(message: string): void {
  console.log(message);
  console.log(message);
  // return null;
}

// never는 절대 반환하지 않는 함수를 의미한다.
function makeError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}
