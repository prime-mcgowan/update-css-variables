const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
  // console.log(suffix);
  // console.log(this.value);
}

inputs.forEach((input) => input.addEventListener("input", handleUpdate));
