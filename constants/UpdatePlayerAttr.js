import ProblemNumber from "../components/ProblemNumber/script.js";
import Punctuation from "../components/Score/script.js";

const UpdatePlayerAttr = async () => {

  let playerAttributes = localStorage.getItem("player_attr") ? JSON.parse(localStorage.getItem("player_attr")) : false;

  if (playerAttributes) {
    playerAttributes.current_defect = playerAttributes.current_defect + 1;
    playerAttributes.score = playerAttributes.score + 100;

    localStorage.setItem("player_attr", JSON.stringify(playerAttributes));
  };

  ProblemNumber();
  Punctuation();

  console.log(playerAttributes);

  return true;
};

export default UpdatePlayerAttr;