import CreateIcon from "../../constants/CreateIcon.js";

function ProblemSection(description) {
  try {

    const problemSectionContainer = document.createElement("section");
    problemSectionContainer.id = "problem_section_container";
    problemSectionContainer.classList.add("problem_section_container");

    const headerTitle = document.createElement("h3");
    headerTitle.textContent = "Sintomas";

    const header = document.createElement("header");
    header.classList.add("ps_header");
    header.append(CreateIcon("fa-circle-exclamation"));
    header.append(headerTitle);

    const pDescription = document.createElement("p");
    pDescription.textContent = description;
  
    const problemDescription = document.createElement("section");
    problemDescription.id = "problem_description";
    problemDescription.classList.add("problem_description");
    problemDescription.appendChild(pDescription);

    problemSectionContainer.append(header);
    problemSectionContainer.append(problemDescription);

    const problemSectionRoot = document.getElementById("problem_section_root");
    problemSectionRoot.appendChild(problemSectionContainer);

  } catch(e) { console.log(`Problem section: ${e.message}`); };
};

ProblemSection("O computador está muito lento, tanto para ler ou gravar arquivos quanto para executar programas, digitar textos, acessar a Internet, etc. Alguns arquivos do usuário sumiram. Às vezes trava.")

export default ProblemSection;