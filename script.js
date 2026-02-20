let count = 0;
updateDisplay();
function updateDisplay() {
  document.getElementById("count").innerText = count;
}

function increaseCount() {
  count++;
  updateDisplay();
}

function decreaseCount() {
  if (count > 0) {
    count--;
    updateDisplay();
  }
}

function resetCount() {
  count = 0;
  updateDisplay();
}

function saveCount() {
  localStorage.setItem("savedCount", count);
  alert("Count saved!");
}

function loadCount() {
  const saved = localStorage.getItem("savedCount");
  if (saved !== null) {
    count = parseInt(saved);
    updateDisplay();
    alert("Count loaded!");
  } else {
    alert("No saved count found.");
  }
}
