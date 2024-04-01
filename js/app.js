// select ALL 3 inputs: spacing, blur and base-color
const inputs = document.querySelectorAll(".controls input");

// function to handle input updates
function handleUpdate() {
  // console.log(this); // this refers to the name of the input id that has been "changed" = spacing, blur or base
  // dataset refers to the data- that the author created in the HTML
  // the only data- that was created was sizing = dataset.sizing
  // || (or) "" (empty/nothing) so we don't get an undefined when base/color is chosen (it has not dataset / size)
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    // console.log(this.name) ex = spacing
    this.value + suffix
  );

  // console.log(suffix); example = px
  // console.log(this.value); example =  #F89
  // console.log(this.dataset); example = {sizing: 'px'}
}

// could also use: "input" or "mouseover" instead of "change"
inputs.forEach((input) => input.addEventListener("change", handleUpdate));
