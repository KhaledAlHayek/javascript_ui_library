import "./styles/snackbars.css"

class Snackbars{
  constructor() {
    this.snackbar = document.createElement("div");
  }
  init() {
    this.snackbar.classList.add("snackbar");
    document.querySelector("body").appendChild(this.snackbar);
  }
  show(msg) {
    this.snackbar.textContent = msg;
    this.snackbar.classList.add("active");
    setTimeout(() => {
      this.snackbar.classList.remove("active");
    }, 3000);
  }
}

export { Snackbars as default }