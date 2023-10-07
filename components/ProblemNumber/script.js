import CreateIcon from "../../constants/CreateIcon.js";

const ProblemNumber = async () => {
  try {
    const problemNumberRoot = document.getElementById("problem_number_root");
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

  const currentProblem = await getCurrentProblem();
  span.textContent = `Defeito ${currentProblem.id}`;

  section.append(icon);
  section.append(span);

  return section;
};

const getCurrentProblem = async () => {
  return JSON.parse(localStorage.getItem("current_problem"));
};

ProblemNumber();