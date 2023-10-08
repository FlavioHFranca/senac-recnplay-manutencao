import CreateIcon from "../../constants/CreateIcon.js";

const ProblemNumber = async () => {
  try {
    const problemNumberRoot = document.getElementById("problem_number_root");
    while(problemNumberRoot.firstChild) {
      problemNumberRoot.removeChild(problemNumberRoot.lastChild);
    };
    const componentSection = await createComponent();
    problemNumberRoot.appendChild(componentSection);
  } catch (e) {
    console.log(`Error: ${e.message}`);
  }
};

const createComponent = async () => {
  const section = document.createElement("section");
  section.className = "problem_number";

  const icon = CreateIcon("fa-screwdriver-wrench");
  const span = document.createElement("span");

  const playerAttr = await getPlayerAttr();
  span.textContent = `Defeito ${playerAttr.current_defect}`;

  section.append(icon);
  section.append(span);

  return section;
};

const getPlayerAttr = async () => {
  return JSON.parse(localStorage.getItem("player_attr"));
};

ProblemNumber();

export default ProblemNumber;