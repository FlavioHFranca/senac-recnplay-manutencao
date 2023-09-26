function CreateButton(id, className, content, funct) {
  const primaryButton = document.createElement("button");

  primaryButton.id = id;
  primaryButton.classList.add(className);
  primaryButton.textContent = content;
  primaryButton.onclick = () => funct();

  const primaryButtonRoot = document.getElementById("primary_button_root");
  primaryButtonRoot.appendChild(primaryButton);
}

// CreateButton("primary_button", "primary_button", "Primary", () => {console.log("Meu Botão...")});

export default CreateButton;