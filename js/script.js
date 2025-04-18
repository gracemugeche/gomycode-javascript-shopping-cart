//js/main.js

document.addEventListener("DOMContentLoaded", () => {
//selecting elements
  const cards = document.querySelectorAll(".card");
  const totalPriceElement = document.querySelector(".total");

  // Function to calculate total price
  function updateTotal() {
    let total = 0;

    document.querySelectorAll(".card").forEach((card) => {
      const priceText = card.querySelector(".unit-price").textContent;
      const price = parseFloat(priceText.replace("$", "").trim());
      const quantity = parseInt(card.querySelector(".quantity").textContent);
      total += price * quantity;
    });

    totalPriceElement.textContent = `${total} $`;
  }

  cards.forEach((card) => {
    const plusBtn = card.querySelector(".fa-plus-circle");
    const minusBtn = card.querySelector(".fa-minus-circle");
    const quantityEl = card.querySelector(".quantity");
    const trashBtn = card.querySelector(".fa-trash-alt");
    const heartBtn = card.querySelector(".fa-heart");

    // Handle plus click
    plusBtn.addEventListener("click", () => {
      let qty = parseInt(quantityEl.textContent);
      quantityEl.textContent = qty + 1;
      updateTotal();
    });

    // Handle minus click
    minusBtn.addEventListener("click", () => {
      let qty = parseInt(quantityEl.textContent);
      if (qty > 0) {
        quantityEl.textContent = qty - 1;
        updateTotal();
      }
    });

    // Handle trash/delete
    trashBtn.addEventListener("click", () => {
      card.parentElement.remove(); // remove the .card-body div
      updateTotal();
    });

    // Handle like toggle
    heartBtn.addEventListener("click", () => {
      heartBtn.classList.toggle("liked");
    });
  });

  // Initial total setup
  updateTotal();
});


