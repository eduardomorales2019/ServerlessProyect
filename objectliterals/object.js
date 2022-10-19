// object  Contructor.with arroy function.

const { text } = require("stream/consumers");

let Winston = function (nickname, age, x, y) {
  this.nickname = nickname;
  this.age = `${age} years old`;
  this.x = x;
  this.y = y;
};
// Crete new Instances.

let Wistonteen = new Winston("Winsteen", 14, 100, 200);
let WintonSr = new Winston("WinstonMan", 34, 100, 100);

let drawWinston = (winston) => {
  //   fill(255, 0, 0);
  //   let img = getImage("creattures/Winston");
  //   Image(img, winston.x, winston.y);
  let txt = winston.nickname + ", " + winston.age;
  console.log(txt);
};

drawWinston(Wistonteen);
