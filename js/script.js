document.addEventListener("DOMContentLoaded", function () {
  let anoAtual = new Date().getFullYear();

  document.getElementById("anoAtual").innerText = anoAtual;

  const textContainer = document.querySelector(".perfil__nome");
  const text = "Carolina Sanches";

  for (let i = 0; i < text.length; i++) {
    const span = document.createElement("span");
    span.textContent = text[i];
    textContainer.appendChild(span);
    span.style.animation = `fadeIn 0.5s ${i * 0.1}s forwards`;
  }
  const visualizarPageOnePiece = document.getElementById(
    "visualizarPageOnePiece"
  );

  visualizarPageOnePiece.addEventListener("click", function () {
    window.location.href =
      "https://carolinasanches24.github.io/ProjetoOnePiece/";
  });
  const visualizarPageMari = document.getElementById("visualizarPageMari");

  visualizarPageMari.addEventListener("click", function () {
    window.location.href =
      "https://carolinasanches24.github.io/Mari_Lima_Artesanato/";
  });

  const visualizarPageBurguer = document.getElementById(
    "visualizarPageBurguer"
  );

  visualizarPageBurguer.addEventListener("click", function () {
    window.location.href = "https://carolinasanches24.github.io/Hamburgueria/";
  });
});
