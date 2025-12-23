// 1. Pegang element HTML
const darkModeBtn = document.getElementById("darkModeBtn");
const container = document.querySelector(".container");
const dumpBtn = document.getElementById("dumpBtn");
const thoughts = document.getElementById("thoughts");
const message = document.getElementById("message");

// 2. List calming messages
const calmingMessages = [
  "It’s okay to feel this way.",
  "You don’t need all the answers today.",
  "Take a deep breath.",
  "This moment will pass.",
  "You are doing enough.",
  "Let go of what you cannot control.",
  "One step at a time is enough.",
  "Your feelings are valid.",
  "Everything doesn’t need to be perfect.",
  "Breathe in, breathe out, repeat."
];

// 3. Bila button diklik
dumpBtn.addEventListener("click", function () {

  // Check kosong
  if (thoughts.value.trim() === "") {
    message.textContent = "Type something first.";
    return;
  }

  // Random message
  const randomIndex =
    Math.floor(Math.random() * calmingMessages.length);

  message.textContent = calmingMessages[randomIndex];

  // Clear textarea
  thoughts.value = "";
});

darkModeBtn.addEventListener("click", function() {
  container.classList.toggle("dark-mode");
});

