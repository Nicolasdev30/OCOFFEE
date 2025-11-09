const articlesContainer = document.getElementById("articles-list");
const displayAllProductsButton = document.getElementById(
  "see-all-products-button"
);

displayAllProductsButton.addEventListener("click", () => {
  if (!articlesContainer.classList.toggle("only-display-3-articles")) {
    displayAllProductsButton.textContent = "Masquer tous les produits";
  } else {
    displayAllProductsButton.textContent = "Voir tous les produits";
  }
});
