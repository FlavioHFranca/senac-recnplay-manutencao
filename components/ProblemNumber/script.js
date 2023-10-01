import CreateIcon from "../../constants/CreateIcon.js";

const ProblemNumber = (problemNumber) => {
  const problemNumberRoot = document.getElementById("problem_number_root");
  problemNumberRoot.appendChild(createComponent(problemNumber));
};

const createComponent = (parameter) => {
  const section = document.createElement("section");
  section.className = "problem_number";

  const icon = CreateIcon("fa-screwdriver-wrench");
  const span = document.createElement("span");
  span.textContent = parameter ? parameter : "Defeito 1";

  section.append(icon);
  section.append(span);

  return section;
};

ProblemNumber();