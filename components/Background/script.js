document.addEventListener("DOMContentLoaded", () => Background());

const Background = () => {
  const backgroundRoot = document.getElementById("background_root");
  const spanAmount = 8;

  for (let i = 0; i < spanAmount; i++) {
    const span = document.createElement("span");
    span.className = "bg_span";
    backgroundRoot.append(span);
  };

};