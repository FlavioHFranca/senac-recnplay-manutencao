const CreateHeader = (title) => {
  const header = document.createElement("section");
  header.classList.add("fm_header");

  const h3 = document.createElement("h3");
  h3.classList.add("fm_title");
  h3.textContent = title;

  const i = document.createElement("i");
  i.classList.add("fa-solid");
  i.classList.add("fa-circle-check");

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

const CreateFooter = () => {
  const footer = document.createElement("footer");
  footer.classList.add("fm_footer");

  const button = document.createElement("button");
  button.classList.add("fm_footer_btn");
  button.textContent = "Continuar";
  button.onclick = function(){ console.log("fn_btn_click") };

  footer.appendChild(button);

  return footer;
};

const CreateFeedbackModal = (title, description) => {
  try {
    const root = document.getElementById("fm_root");
    root.append(CreateHeader(title));
    root.append(CreateBody(description));
    root.append(CreateFooter());
  } catch(e) {
    console.log(e.message);
  };
};

CreateFeedbackModal("Resolvido com sucesso!", "Muito bom, você conseguiu resolver o problem. É muito comum uma Placa-mãe defeituosa causar esse tipo de problema no seu computador.");

// export default CreateFeedbackModal;