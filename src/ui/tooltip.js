import "./styles/tooltip.css";

class Tooltip{
  constructor(el){
    this.element = el;
    this.content = el.getAttribute("data-content");
  }
  init() {
    const tip = document.createElement("div");
    tip.className = "tip";
    tip.textContent = this.content;
    this.element.appendChild(tip);
    this.element.addEventListener("mouseenter", () => {
      tip.classList.add("active");
    });
    this.element.addEventListener("mouseleave", () => {
      tip.classList.remove("active");
    });
  }
}

export default Tooltip; 