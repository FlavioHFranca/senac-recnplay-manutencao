import CongratulationModal from "../CongratulationModal/script.js";

const CreateHeader = (title, modalStatus) => {
  const header = document.createElement("section");
  header.classList.add("fm_header");

  const h3 = document.createElement("h3");
  h3.classList.add("fm_title");
  h3.textContent = title;

  const i = document.createElement("i");
  i.classList.add("fa-solid");

  if (modalStatus == "success") {
    i.classList.add("fa-circle-check");
  } else if (modalStatus == "fail") {
    i.classList.add("fa-circle-exclamation");
  };

  header.append(i);
  header.append(h3);

  return header;
};

const CreateBody = (description) => {
  const body = document.createElement("seciton");
  body.classList.add("fm_body");

  const p = document.createElement("p");
  p.classList.add("fm_description");
  p.textContent = description;

  body.appendChild(p);

  return body;
};

const CreateFooter = (modaStatus) => {
  const footer = document.createElement("footer");
  footer.classList.add("fm_footer");

  const button = document.createElement("button");
  button.classList.add("fm_footer_btn");
  button.textContent = "Continuar";
  button.onclick = function () { closeModal(modaStatus) };

  footer.appendChild(button);

  return footer;
};

const CreateFeedbackModal = (title, description, modalStatus) => {
  try {

    const root = document.getElementById("fm_root");
    const container = document.createElement("section");

    container.id = "fm_container";
    container.className = "fm_container";

    while (container.firstChild) {
      container.removeChild(root.lastChild);
    }

    container.append(CreateHeader(title, modalStatus));
    container.append(CreateBody(description));
    container.append(CreateFooter(modalStatus));

    root.appendChild(container);

    root.style.display = "flex";
    root.classList.add("show");

    setTimeout(() => {
      container.style.display = "flex";
      container.classList.add("show");
    }, 500);

  } catch (e) {
    console.log(e.message);
  };
};

const closeModal = (modaStatus) => {

  const root = document.getElementById("fm_root");
  const container = document.getElementById("fm_container");

  container.classList.add("hidden");

  setTimeout(() => {
    container.style.display = "none";
    container.classList.remove("hidden");
    container.classList.remove("show");

    root.classList.add("hidden");
  }, 700);

  setTimeout(() => {
    root.style.display = "none";
    root.classList.remove("hidden");
    root.classList.remove("show");

    while(root.firstChild) {
      root.removeChild(root.lastChild);
    };
  }, 1200);

  if (modaStatus) {
    CongratulationModal("Parabéns! Você ganhou uma peça.", { src: "./assets/imgs/congratulation/ram_congrat.png", alt: "Memória ram de 8gb." }, "Você ganhou uma memória RAM de 8 GB por ter resolvido o defeito desse computador.");
  };
};

export default CreateFeedbackModal;