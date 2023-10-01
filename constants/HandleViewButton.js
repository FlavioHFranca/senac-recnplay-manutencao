const HandleViewButton = (parameter) => {
  if (parameter == "display") {
    const cabinetButton = document.getElementById("vc_btn");
    cabinetButton.classList.remove("active");
  } else if (parameter == "case") {
    const displayButton = document.getElementById("vd_btn");
    displayButton.classList.remove("active");
  };
};

export default HandleViewButton;