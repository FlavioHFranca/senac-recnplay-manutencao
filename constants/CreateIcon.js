const CreateIcon = (iconName, method = null) => {
  const i = document.createElement("i");

  i.classList.add("fa-solid");
  i.classList.add(iconName);

  if (method) i.onclick = method;

  return i;
};

export default CreateIcon;