import CreateIcon from "../../constants/CreateIcon.js";

function AdditionalInformation(info) {
  try {
    const AddInfoContainer = document.createElement("section");
    AddInfoContainer.id = "add_info_container";
    AddInfoContainer.classList.add("add_info_container");

    const headerTitle = document.createElement("h3");
    headerTitle.textContent = "Informações Adicionais";

    const header = document.createElement("header");
    header.classList.add("add_info_header");
    header.append(CreateIcon("fa-circle-info"));
    header.append(headerTitle);

    const pDescription = document.createElement("p");
    pDescription.textContent = info;

    const description = document.createElement("section");
    description.classList.add("add_info_description");
    description.appendChild(pDescription);

    AddInfoContainer.append(header);
    AddInfoContainer.append(description);

    const AddInfoRoot = document.getElementById("additional_info_root");
    while(AddInfoRoot.firstChild) {
      AddInfoRoot.removeChild(AddInfoRoot.lastChild)
    };
    AddInfoRoot.appendChild(AddInfoContainer);

  } catch(e) {
    console.log(`Erro: ${e.message}`);
  };
};

export default AdditionalInformation;