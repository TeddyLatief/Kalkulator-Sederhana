function appendValue(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  let current = document.getElementById("display").value;
  document.getElementById("display").value = current.slice(0, -1);
}

function calculateResult() {
  try {
    document.getElementById("display").value = eval(document.getElementById("display").value);
  } catch (e) {
    alert("Invalid Expression");
  }
}


function calculateResult() {
  try {
    const display = document.getElementById("display");
    const result = eval(display.value);
    addToHistory(display.value + " = " + result);
    display.value = result;
  } catch (e) {
    alert("Invalid Expression");
  }
}

function toggleHistory() {
  const sidebar = document.getElementById("historySidebar");
  const toggleBtn = document.querySelector(".toggle-history-btn");

  if (sidebar.classList.contains("active")) {
    sidebar.classList.remove("active");
    toggleBtn.textContent = "Tampilkan Riwayat";
  } else {
    sidebar.classList.add("active");
    toggleBtn.textContent = "Sembunyikan Riwayat";
  }
}

function addToHistory(entry) {
  const historyList = document.getElementById("history");
  const newItem = document.createElement("li");
  newItem.textContent = entry;
  historyList.prepend(newItem); // ditaruh di atas (riwayat terbaru)
}


function clearHistory() {
  document.getElementById("history").innerHTML = "";
}