import "./styles/tabs.css";

class Tabs{
  constructor(container) {
    this.container = container;
    this.tabs = container.querySelectorAll("ul .trigger");
  }
  init() {
    this.tabs.forEach(tab => {
      tab.addEventListener("click", e => {
        this.toggleTabs(e);
        this.toggleContent(e);
      });
    });
  }
  toggleTabs(e) {
    this.tabs.forEach(tab => tab.classList.remove("active"));
    e.target.classList.add("active");
  }
  toggleContent(e) {
    const content = this.container.querySelectorAll(".content");
    content.forEach(box => box.classList.remove("active"));
    const selector = e.target.dataset.target;
    const contentBox = this.container.querySelector(`#${selector}`);
    contentBox.classList.add("active");
  }
}

export { Tabs as default}