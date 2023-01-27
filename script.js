var display = document.getElementById("display");
var numbers = document.getElementById("numbers");
var operations = document.getElementById("operations");

// Add event listeners to number buttons
for (var i = 0; i < numbers.children.length; i++) {
  numbers.children[i].addEventListener("click", function() {
    display.value += this.innerHTML;
  });
}

// Add event listeners to operation buttons
for (var i = 0; i < operations.children.length; i++) {
  operations.children[i].addEventListener("click", function() {
    if (this.id == "clear") {
      display.value = "";
} else if (this.id == "equals") {
display.value = eval(display.value);
} else {
display.value += this.innerHTML;
}
});
}

