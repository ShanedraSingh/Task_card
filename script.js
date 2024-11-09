function updateTotal(price, pairCount, discount) {
  const total = price * (1 - discount / 100);
  document.getElementById("totalText").innerText = `Total: DKK ${total.toFixed(
    2
  )}`;

  // Display size and color selectors for 3 Pair only
  const sizeColorSelect = document.getElementById("sizeColorSelect");
  sizeColorSelect.style.display = pairCount === 3 ? "block" : "none";
}
