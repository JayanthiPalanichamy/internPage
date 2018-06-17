const buttons = document.getElementsByClassName("button");
function addingClick(buttons) {
  for (let button of buttons) {
  button.addEventListener('click', welcomeMessage);
}
}
function welcomeMessage() {
  document.write("Welcome "+ this.parentNode.parentNode.childNodes[1].childNodes[1].innerHTML);

}
addingClick(buttons)


