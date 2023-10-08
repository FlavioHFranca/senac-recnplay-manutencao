import StartGame from "./StartGame.js";
import UpdatePlayerAttr from "./UpdatePlayerAttr.js";

const UpdateDatabase = async () => {
  const currentProblem = localStorage.getItem("current_problem") ? JSON.parse(localStorage.getItem("current_problem")) : false;
  const listProblem = localStorage.getItem("problem_database") ? JSON.parse(localStorage.getItem("problem_database")) : false;

  listProblem.forEach(problem => {
    if (problem.id == currentProblem.problem_datas.id) {
      problem.resolved = true;
      return true;
    };
  });

  localStorage.setItem("problem_database", JSON.stringify(listProblem));
  localStorage.removeItem("current_problem");

  const updatePlayerAttr = await UpdatePlayerAttr();
  const startedGame = await StartGame();

  if (updatePlayerAttr && startedGame) {

    const cmRoot = document.getElementById("cm_root");
    const cmContainer = document.getElementById("cm_container");

    cmContainer.classList.add("hidden");

    setTimeout(() => {
      cmContainer.style.display = "none";
      cmContainer.classList.remove("show");
      cmContainer.classList.remove("hidden");
      cmRoot.classList.add("hidden");
    }, 500);

    setTimeout(() => {
      cmRoot.style.display = "none";
      cmRoot.classList.remove("show");
      cmRoot.classList.remove("hidden");
    }, 1000);

    return true;
  };
};

export default UpdateDatabase;