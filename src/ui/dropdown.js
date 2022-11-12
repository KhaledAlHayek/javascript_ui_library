import "./styles/dropdown.css"

class Dropdown{
  constructor(el){
    this.element = el;
    this.trigger = el.querySelector(".trigger");
    this.content = el.querySelector(".content");
  }
  init() {
    this.trigger.addEventListener("click", e => {
      this.trigger.classList.toggle("active");
      this.content.classList.toggle("active");
    });
  }
}

export { Dropdown as default}