"use strict";
//selecting elements
const player0el = document.querySelector(".player--0");
const player1el = document.querySelector(".player--1");
const score0el = document.querySelector("#score--0");
const score1el = document.getElementById("score--1"); // two way to show elements
const current0el = document.getElementById("current--0");
const current1el = document.getElementById("current--1");
const diceel = document.querySelector(".dice");
const btnnew = document.querySelector(".btn--new");
const btnroll = document.querySelector(".btn--roll");
const btnhold = document.querySelector(".btn--hold");

let currentscore, scores, activeplayer, playing;

const init = function () {
  scores = [0, 0];
  currentscore = 0;
  activeplayer = 0;
  playing = true;

  score0el.textContent = 0;
  score1el.textContent = 0;
  current0el.textContent = 0;
  current1el.textContent = 0;

  diceel.classList.add("hidden");
  player0el.classList.remove("player--winner");
  player1el.classList.remove("player--winner");
  player0el.classList.add("player--active");
  player1el.classList.remove("player--active");
};

init();

const switch_player = function () {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  currentscore = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  player0el.classList.toggle("player--active");
  player1el.classList.toggle("player--active");
};

//rolling dice functionality
btnroll.addEventListener("click", function () {
  if (playing) {
    //1.generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2.display dice
    diceel.classList.remove("hidden");
    diceel.src = `dice-${dice}.png`;

    //3.check for rolled 1: if switch to nex player
    if (dice !== 1) {
      currentscore += dice;
      document.getElementById(`current--${activeplayer}`).textContent =
        currentscore;
    } else switch_player();
  }
});

btnhold.addEventListener("click", function () {
  if (playing) {
    //1.add current score to active players scores
    scores[activeplayer] += currentscore;
    document.getElementById(`score--${activeplayer}`).textContent =
      scores[activeplayer];
    //2. check if players score is <= 100
    if (scores[activeplayer] >= 20) {
      //3.finish the game
      playing = false;
      diceel.classList.add("hidden");
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove("player--active");
    } else {
      switch_player();
    } //4.switch to the next player
  }
});

btnnew.addEventListener("click", init);
