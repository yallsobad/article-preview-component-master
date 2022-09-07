const shareButton = document.querySelector(".share");
const shareBubble = document.querySelector(".share-links");

shareButton.addEventListener("click", () =>
  shareBubble.classList.toggle("active")
);
