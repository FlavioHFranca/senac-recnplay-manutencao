import CreateIcon from "../../constants/CreateIcon.js";

const Punctuation = (points) => {
  const scoreRoot = document.getElementById("score_root");
  scoreRoot.appendChild(createComponent(points));
};

const createComponent = (parameter) => {
  const section = document.createElement("section");
  section.className = "score";

  const icon = CreateIcon("fa-sack-dollar");
  const span = document.createElement("span");
  span.textContent = parameter ? parameter : "10.000";

  section.append(icon);
  section.append(span);

  return section;
};

Punctuation();