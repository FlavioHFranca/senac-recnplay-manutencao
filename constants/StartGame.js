import GetProblems from "./Problems.js";

const ProblemDatabase = "problem_database";
const CurrentProblem = "current_problem";

document.addEventListener("DOMContentLoaded", startGame());

async function getProblemDatabase() {
  return JSON.parse(localStorage.getItem(ProblemDatabase));
};

async function getCurrentProblem() {
  return JSON.parse(localStorage.getItem(CurrentProblem));
}

function randomNumber(arraySize) {
  return parseInt(Math.random() * arraySize);
};

async function startGame() {

  let listProblem = await getProblemDatabase();

  if (!listProblem) {
    localStorage.setItem(ProblemDatabase, JSON.stringify(GetProblems()));
    listProblem = await getProblemDatabase();
  };

  let currentProblem = await getCurrentProblem();

  if (!currentProblem) {
    currentProblem = listProblem[randomNumber(listProblem.length)];

    do {
      currentProblem = listProblem[randomNumber(listProblem.length)];
    } while (currentProblem.resolved == true);

    const currentProblemObj = {
      id: 1,
      problem_datas: currentProblem
    };

    localStorage.setItem(CurrentProblem, JSON.stringify(currentProblemObj));
    currentProblem = await getCurrentProblem();
  };

  // console.log(listProblem);
  // console.log(currentProblem);

  // Add currentProblem in component;

};