// Add
function addedBy() {
  num1 = document.getElementById("firstNumber").value;
  num2 = document.getElementById("secondNumber").value;
  document.getElementById("value1").innerHTML = "+";
  document.getElementById("result").innerHTML =
    "= " + (Number(num1) + Number(num2));

  if (document.getElementById("firstNumber").value == "") {
    alert("Please enter a first number");
    window.location.reload();
  }

  if (document.getElementById("secondNumber").value == "") {
    alert("Please enter a second number");
    window.location.reload();
  }
}

// Subtract
function subtractedBy() {
  num1 = document.getElementById("firstNumber").value;
  document.getElementById("value1").innerHTML = "-";
  num2 = document.getElementById("secondNumber").value;
  document.getElementById("result").innerHTML =
    "= " + (Number(num1) - Number(num2));
  if (document.getElementById("firstNumber").value == "") {
    alert("Please enter a first number");
    window.location.reload();
  }

  if (document.getElementById("secondNumber").value == "") {
    alert("Please enter a second number");
    window.location.reload();
  }
}

// Multiply
function multiplyBy() {
  num1 = document.getElementById("firstNumber").value;
  num2 = document.getElementById("secondNumber").value;
  document.getElementById("value1").innerHTML = "X";
  document.getElementById("result").innerHTML = "= " + num1 * num2;

  if (document.getElementById("firstNumber").value == "") {
    alert("Please enter a first number");
    window.location.reload();
  }

  if (document.getElementById("secondNumber").value == "") {
    alert("Please enter a second number");
    window.location.reload();
  }
}

// Division
function divideBy() {
  num1 = document.getElementById("firstNumber").value;
  num2 = document.getElementById("secondNumber").value;
  document.getElementById("value1").innerHTML = "&#xF7;";
  document.getElementById("result").innerHTML = "= " + num1 / num2;

  if (document.getElementById("firstNumber").value == "") {
    alert("Please enter a first number");
    window.location.reload();
  }

  if (document.getElementById("secondNumber").value == "") {
    alert("Please enter a second number");
    window.location.reload();
  }
}

// Squre
function square() {
  num1 = document.getElementById("firstNumber").value;
  document.getElementById("value1").innerHTML = "&#13217;";
  document.getElementById("secondNumber").value = "";
  document.getElementById("result").innerHTML = "= " + num1 * num1;

  if (document.getElementById("firstNumber").value == "") {
    alert("Please enter a first number");
    window.location.reload();
  }
}

// Cube
function cube() {
  num1 = document.getElementById("firstNumber").value;
  document.getElementById("secondNumber").value = "";
  document.getElementById("value1").innerHTML = "&#13221;";
  document.getElementById("result").innerHTML = "= " + num1 * num1 * num1;

  if (document.getElementById("firstNumber").value == "") {
    alert("Please enter a first number");
    window.location.reload();
  }
}

// Percentage
function percent() {
  num1 = document.getElementById("firstNumber").value;
  num2 = document.getElementById("secondNumber").value;
  document.getElementById("value1").innerHTML = "%";
  document.getElementById("result").innerHTML =
    "= " + (num1 / num2) * 100 + "%";

  if (document.getElementById("firstNumber").value == "") {
    alert("Please enter a first number");
    window.location.reload();
  }

  if (document.getElementById("secondNumber").value == "") {
    alert("Please enter a second number");
    window.location.reload();
  }
}

// Square root
function square_root() {
  num1 = document.getElementById("firstNumber").value;
  document.getElementById("secondNumber").value = "";
  document.getElementById("value1").innerHTML = "&radic;";
  document.getElementById("result").innerHTML = "= " + Math.sqrt(num1);

  if (document.getElementById("firstNumber").value == "") {
    alert("Please enter a first number");
    window.location.reload();
  }
}
// Cube root
function cube_root() {
  num1 = document.getElementById("firstNumber").value;
  document.getElementById("secondNumber").value = "";
  document.getElementById("value1").innerHTML = "&#8731;";
  document.getElementById("result").innerHTML = "= " + Math.cbrt(num1);

  if (document.getElementById("firstNumber").value == "") {
    alert("Please enter a first number");
    window.location.reload();
  }
}
// Sin
function sin() {
  num1 = document.getElementById("firstNumber").value;
  document.getElementById("secondNumber").value = "";
  document.getElementById("value1").innerHTML = "sin";
  document.getElementById("result").innerHTML = "= " + Math.sin(num1);

  if (document.getElementById("firstNumber").value == "") {
    alert("Please enter a first number");
    window.location.reload();
  }
}

// Cos
function cos() {
  num1 = document.getElementById("firstNumber").value;
  document.getElementById("secondNumber").value = "";
  document.getElementById("value1").innerHTML = "cos";
  document.getElementById("result").innerHTML = "= " + Math.cos(num1);

  if (document.getElementById("firstNumber").value == "") {
    alert("Please enter a first number");
    window.location.reload();
  }
}

// Tan
function tan() {
  num1 = document.getElementById("firstNumber").value;
  document.getElementById("secondNumber").value = "";
  document.getElementById("value1").innerHTML = "tan";
  document.getElementById("result").innerHTML = "= " + Math.tan(num1);

  if (document.getElementById("firstNumber").value == "") {
    alert("Please enter a first number");
    window.location.reload();
  }
}
// Pi
function pi() {
  num1 = document.getElementById("firstNumber").value;
  document.getElementById("secondNumber").value = "";
  document.getElementById("value1").innerHTML = "&pi;";
  document.getElementById("result").innerHTML = "= " + 3.14159265359 * num1;

  if (document.getElementById("firstNumber").value == "") {
    alert("Please enter a first number");
    window.location.reload();
  }
}

// Clear All
function all_clear() {
  num1 = document.getElementById("firstNumber").value = "";
  num2 = document.getElementById("secondNumber").value = "";
  document.getElementById("value1").innerHTML = "";
  document.getElementById("result").innerHTML = "";
}

// Equal to

function show_ans() {
  document.getElementById("result").style.visibility = "visible";
}
