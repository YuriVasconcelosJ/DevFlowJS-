"use strict";

// Oq eu devo fazer?
// Eliminar o hidden da classe modal, ao clicar no "show modal 1, 2 e 3"
// Tbm podemos alterar o display: none para block
// Ao clicar no X, add devemos add "hidden" na classe
// OBS.: Clicar no esq tbm deve sair.

// Selecionando elementos
const modalButtons = document.getElementsByClassName("show-modal");
const modalElement = document.querySelector(".modal");
const closeButtons = document.getElementsByClassName("close-modal");

// Função para alterar a visibilidade da modal
function toggleModal(displayStyle) {
  modalElement.style.display = displayStyle;
}

// Exibindo a tela ao clicar nos botões "show-modal"
Array.from(modalBtn).forEach((button) => {
  btn.addEventListener("click", () => {
    toggleModal("block");
  });
});

// Fechando o modal ao clicar nos botões "close-modal"
Array.from(close).forEach((closeButton) => {
  closeBtn.addEventListener("click", () => {
    toggleModal("none");
  });
});

// Fechando o modal ao clicar na tecla "esc do teclado"
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    toggleModal("none");
  }
});
