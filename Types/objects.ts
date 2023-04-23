const dog = {
  name: "Bingo",
  age: 5,
  breed: "Dalmatian",
};

function printName(animal: { name: string; age: number; breed: string }): void {
  console.log(animal.name);
}

printName(dog);

let coordinate: { x: number; y: number } = { x: 10, y: 20 };

function printCoordinate1(): { x: number; y: number } {
  return { y: 12, x: 14 };
}

function printCoordinate2(): typeof coordinate {
  return { y: 12, x: 14 };
}
