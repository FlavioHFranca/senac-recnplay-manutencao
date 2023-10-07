import GetImages from "../../constants/GetImages.js";
import CreateIcon from "../../constants/CreateIcon.js";
import InfoButton from "../InfoButton/script.js";
import CreateModalInfo from "../InfoModal/script.js";
import CreateFeedbackModal from "../FeedbackModal/script.js";

const INFO_MODAL_ROOT = "info_modal_root";

document.addEventListener("DOMContentLoaded", createSoftwareSection());

function createSoftwareSection() {
  const softwareContainer = document.createElement("section");
  softwareContainer.id = "software_container";
  softwareContainer.classList.add("software_container");

  softwareContainer.append(softwareHeader());
  softwareContainer.append(imgContainer());

  const softwareSectionRoot = document.getElementById("software_section_root");
  softwareSectionRoot.append(softwareContainer);
};

function softwareHeader() {
  const icon = CreateIcon("fa-computer");

  const headerTitle = document.createElement("h3");
  headerTitle.textContent = "Sofware";
  const infoButton = InfoButton("Programas e aplicatvios instalados no seu computador.");

  const titleWrapper = document.createElement("section");
  titleWrapper.classList.add("title_wrapper");
  titleWrapper.append(icon);
  titleWrapper.append(headerTitle);

  const iconWrapper = document.createElement("section");
  iconWrapper.classList.add("icon_wrapper");
  iconWrapper.append(infoButton);

  const softwareHeader = document.createElement("section");
  softwareHeader.classList.add("software_header");
  softwareHeader.append(titleWrapper);
  softwareHeader.append(iconWrapper);

  return softwareHeader;
};

function imgContainer() {
  const getImages = new GetImages();
  const imgsArray = getImages.getSoftwareImages();

  const container = document.createElement("section");
  container.classList.add("software_img_container");

  imgsArray.forEach(item => {
    const figure = document.createElement("figure");
    figure.id = "software_figure";
    figure.classList.add("software_figure");

    const img = document.createElement("img");
    img.src = `./assets/imgs/software/section/${item.name}`;
    img.alt = `${item.alt}`;

    const imgObj = {
      imageSrc: `./assets/imgs/software/tooltip/${item.info.name}`,
      imageTitle: item.title,
      imageDescription: item.info.description,
      imageComplement: item.info.complement,
      imageCode: item.code
    };

    img.onmouseover = () => CreateModalInfo(imgObj, true, INFO_MODAL_ROOT, { top: figure.offsetTop - 220, left: figure.offsetLeft });
    img.onmouseout = () => CreateModalInfo(imgObj, false, INFO_MODAL_ROOT, { top: figure.offsetTop - 220, left: figure.offsetLeft });

    img.onclick = () => showFeedbackModal(imgObj);

    figure.append(img);
    container.append(figure);
  });

  return container;
};

async function getCurrentProblem() {
  return JSON.parse(localStorage.getItem("current_problem"));
}

const showFeedbackModal = async (imgObj) => {
  const currentProblem = await getCurrentProblem();

  if (imgObj.imageCode == currentProblem.problem_datas.resolve_code) {
    CreateFeedbackModal("Resolvido com sucesso!", `Muito bom, você conseguiu resolver o problema. É muito comum uma ${imgObj.title} causar esse tipo de problema no seu computador.`, "success");
  } else {
    CreateFeedbackModal("O defeito continua...!", `Não é muito comum ${imgObj.title} causar esse tipo de problema no seu computador. Tente outra peça.`, "fail");
  };

};