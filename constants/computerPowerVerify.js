const computerPowerVerify = async () => {
  const pbBtn = document.getElementById("pb_btn");
  if (pbBtn.classList.contains("on")) {
    return true;
  } else if (pbBtn.classList.contains("off")) {
    return false;
  }
};

export default computerPowerVerify;