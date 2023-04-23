const dog = {
  name: "Bingo",
  age: 5,
  breed: "Dalmatian",
};

function printName(animal: { name: string; age: number; breed: string }): void {
  console.log(animal.name);
}

printName(dog);
