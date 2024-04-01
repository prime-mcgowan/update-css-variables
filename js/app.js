// select ALL 3 inputs: spacing, blur and base-color
const inputs = document.querySelectorAll(".controls input");

// function to handle input updtes
function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
  // console.log(suffix);
  // console.log(this.value);
}

// could also use: "input" or "mouseover" instead of "change"
inputs.forEach((input) => input.addEventListener("change", handleUpdate));
