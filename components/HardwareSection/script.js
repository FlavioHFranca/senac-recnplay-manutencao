import GetImages from "../../constants/GetImages.js";
import CreateIcon from "../../constants/CreateIcon.js";
import InfoButton from "../../components/InfoButton/script.js";
import CreateModalInfo from "../InfoModal/script.js";
import CreateFeedbackModal from "../FeedbackModal/script.js";

const INFO_MODAL_ROOT = "info_modal_root";

document.addEventListener("DOMContentLoaded", createHardwareSection());

function createHardwareSection() {
  const hardwareContainer = document.createElement("section");
  hardwareContainer.id = "hardware_container";
  hardwareContainer.classList.add("hardware_container");

  hardwareContainer.append(hardwareHeader());
  hardwareContainer.append(imgContainer());

  const hardwareSectionRoot = document.getElementById("hardware_section_root");
  hardwareSectionRoot.append(hardwareContainer);
};

function hardwareHeader() {
  const icon = CreateIcon("fa-memory");

  const headerTitle = document.createElement("h3");
  headerTitle.textContent = "Hardware";
  const infoButton = InfoButton("Peças e equipamentos físicos do computador.");

  const titleWrapper = document.createElement("section");
  titleWrapper.classList.add("title_wrapper");
  titleWrapper.append(icon);
  titleWrapper.append(headerTitle);

  const iconWrapper = document.createElement("section");
  iconWrapper.classList.add("icon_wrapper");
  iconWrapper.append(infoButton);

  const hardwareHeader = document.createElement("section");
  hardwareHeader.classList.add("hardware_header");
  hardwareHeader.append(titleWrapper);
  hardwareHeader.append(iconWrapper);

  return hardwareHeader;
};

function imgContainer() {
  const getImages = new GetImages();
  const imgsArray = getImages.getHardwareImages();

  const container = document.createElement("section");
  container.classList.add("hardware_img_container");

  imgsArray.forEach(item => {
    const figure = document.createElement("figure");
    figure.id = "hardware_figure";
    figure.classList.add("hardware_figure");

    const img = document.createElement("img");
    img.src = `./assets/imgs/hardware/section/${item.name}`;
    img.alt = `${item.alt}`;

    const imgObj = {
      imageSrc: `./assets/imgs/hardware/tooltip/${item.info.name}`,
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
    CreateFeedbackModal("Resolvido com sucesso!", `Muito bom, você conseguiu resolver o problema. É muito comum uma ${imgObj.title} causar esse tipo de problema no seu computador.`);
  } else {
    CreateFeedbackModal("O defeito continua...!", `Não é muito comum ${imgObj.title} causar esse tipo de problema no seu computador. Tente outra peça.`);
  };

};