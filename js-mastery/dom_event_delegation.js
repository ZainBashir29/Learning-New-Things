document.getElementById("products").addEventListener("click", (e) => {
  const addBtn = e.target.closest(".add");
  const removeBtn = e.target.closest(".remove");

  if (addBtn) {
    const card = addBtn.closest(".card");
    console.log(card.dataset.id, addBtn.textContent);
  }

  if (removeBtn) {
    const card = removeBtn.closest(".card");
    console.log(card.dataset.id, removeBtn.textContent);
  }
});
