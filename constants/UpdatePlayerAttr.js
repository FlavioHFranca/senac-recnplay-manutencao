const UpdatePlayerAttr = async () => {
  let playerAttributes = localStorage.getItem("player_attr") ? JSON.parse(localStorage.getItem("player_attr")) : false;

  if (playerAttributes) {
    playerAttributes.currentDefect + 1;
    playerAttributes.score + 100;
  } else {
    playerAttributes = {
      current_defect: 1,
      score: 10000
    };
  };

  localStorage.setItem("player_attr", JSON.stringify(playerAttributes));
};

export default UpdatePlayerAttr;