const UpdateDatabase = (datas, modalData) => {
  console.log(datas, modalData);
};

const closeModal = (root, container) => {
  const root = document.getElementById("cm_root");
  const modal = document.getElementById("cm_container");

  modal.classList.add("hidden");

  setTimeout(() => {
    modal.style.display = "none";
    root.classList.add("hidden");
  }, 500);

  setTimeout(() => {
    root.style.display = "none";
    while(root.firstChild) {
      root.removeChild(root.lastChild);
    }
  }, 1000);
};

export default UpdateDatabase;