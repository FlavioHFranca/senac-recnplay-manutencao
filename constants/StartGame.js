import GetProblems from "./Problems.js";
import ProblemSection from "../components/ProblemDescription/script.js";
import AdditionalInformation from "../components/AdditionalInformation/script.js";

const ProblemDatabase = "problem_database";
const CurrentProblem = "current_problem";
const playerDatas = "player_datas";

document.addEventListener("DOMContentLoaded", startGame());

async function getProblemDatabase() {
  return JSON.parse(localStorage.getItem(ProblemDatabase));
};

async function getCurrentProblem() {
  return JSON.parse(localStorage.getItem(CurrentProblem));
}

async function getPlayerDatas() {
  return JSON.parse(localStorage.getItem(playerDatas));
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

  console.log(listProblem);
  console.log(currentProblem);

  ProblemSection(currentProblem.problem_datas.description);
  AdditionalInformation(currentProblem.problem_datas.additional_information);

  return true;
};

export default startGame;