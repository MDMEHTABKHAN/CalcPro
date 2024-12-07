let displayElement = document.getElementById("display");

function appendToDisplay(value) {
  if (displayElement.innerText === "0") {
    displayElement.innerText = value === '()' ? "()" : value;
  } else {
    displayElement.innerText += value;
  }
}

function clearDisplay() {
  displayElement.innerText = "0";
}

function deleteLast() {
  let currentText = displayElement.innerText;
  if (currentText.length === 1) {
    displayElement.innerText = "0";
  } else {
    displayElement.innerText = currentText.slice(0, -1);
  }
}

function calculateResult() {
  try {
    displayElement.innerText = eval(displayElement.innerText.replace("×", "*").replace("÷", "/"));
  } catch {
    displayElement.innerText = "Error";
  }
}
