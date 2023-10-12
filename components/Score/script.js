import CreateIcon from "../../constants/CreateIcon.js";

const Punctuation = () => {
  const scoreRoot = document.getElementById("score_root");
  while(scoreRoot.firstChild) {
    scoreRoot.removeChild(scoreRoot.lastChild);
  };
  scoreRoot.appendChild(createComponent());
};

const createComponent = () => {

  const parameter = localStorage.getItem("player_attr") ? JSON.parse(localStorage.getItem("player_attr")) : false;

  const section = document.createElement("section");
  section.className = "score";

  const icon = CreateIcon("fa-sack-dollar");
  const span = document.createElement("span");
  span.textContent = parameter ? parameter.score : "10.000";

  section.append(icon);
  section.append(span);

  return section;
};

Punctuation();

export default Punctuation;