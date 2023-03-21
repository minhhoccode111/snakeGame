"use strict";
console.log("Hello world from snake game");

const header = document.querySelector("#header");
const pg = document.querySelector("#playground"); //pg stand for playground
const scoreP1 = document.querySelector(".scoreP1");
class App {
  #point;
  #player;
  #pgSize;
  constructor(point = 0, player = 1, pgSize = 20) {
    this.#point = point; //default app initialize has 0 point
    this.#player = player; //default app initialize has 1 player
    this.#pgSize = pgSize;
  }

  setGridTemplate() {
    pg.style.cssText = `display:grid;
                grid-template-columns: repeat(${this.#pgSize},1fr);
                grid-template-rows: repeat(${this.#pgSize},1fr);`;
    return this;
  }
  createGridDivs() {
    let x = 1; //x stand for row position inside playground
    let y = 1; //y stand for column position inside playground
    for (let i = 1; i <= this.#pgSize ** 2; i++) {
      //for let i in the range of 20*20 pgSize
      const div = document.createElement("div");
      //create a div
      if (x > this.#pgSize) {
        //if x greater than pgSize
        x = 1;
        //restore x to equal 1
        y++;
        //increase y
      }
      div.setAttribute("data-x", x);
      //set its attribute data-x = x
      div.setAttribute("data-y", y);
      //set its attribute data-y = y
      pg.appendChild(div);
      //then append
      x++;
      //increase x
    }
    return this;
    //return this (this object) to easily chain methods
  }
  displayScore() {
    scoreP1.innerHTML = this.#point;
    return this;
  }
}

class Snake {
  #currentDirection;
  #changeDirection = [];
  #body;
  #length;
  #speed;
  constructor(currentDirection = "", speed = 10, body = [0]) {
    this.#currentDirection = currentDirection;
    this.#body = body;
    this.#length = body.length;
    this.#speed = 110 - speed;
  }
  getCurrentD() {
    return this.#currentDirection;
  }
  setCurrentD(newD) {
    this.#currentDirection = newD;
  }
}

const app = new App();
app.setGridTemplate().createGridDivs().displayScore();
const snake = new Snake();
