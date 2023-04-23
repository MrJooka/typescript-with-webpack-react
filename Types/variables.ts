let movieTitle: string = "The Godfather";
movieTitle = "The Godfather II";
movieTitle = 9;
movieTitle.toUpperCase();

let numCatLives: number = 9;
numCatLives += 1;

let gameOver: boolean = false;
gameOver = true;
gameOver = "true";

let nothing: null = null;
let notDefined: undefined = undefined;

// Type inference
let tvShow = "Game of Thrones";
tvShow = "Breaking Bad";
tvShow = 9;

let isFunny = true;
isFunny = "true";

// the any type
let whatever: any = "hello";
whatever = 9;
whatever = true;
whatever = null;
whatever.toUpperCase();
