import Tooltip from "./ui/tooltip";
import Dropdown from "./ui/dropdown";
import Tabs from "./ui/tabs";
import Snackbars from "./ui/snackbars";

// create a tooltip
const tooltip = new Tooltip(document.querySelector(".tooltip"));
tooltip.init();

// create dropdowns
const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach(dropdown => {
  const instance = new Dropdown(dropdown);
  instance.init();
});

//create tab
const tabs = new Tabs(document.querySelector(".tabs"));
tabs.init();

// create a snackbar
const snackbar = new Snackbars();
snackbar.init();
const btn = document.querySelector(".snackbar-trigger");
btn.addEventListener("click", e => {
  snackbar.show("You clicked me!!");  
});