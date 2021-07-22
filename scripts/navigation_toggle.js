document.addEventListener('DOMContentLoaded', init, false);
function init(){

  const button = document.getElementById('hamburger_button');
  if(button){
      button.addEventListener('click', toggleHamburger, false);
  };

  function toggleHamburger() {
    const hamburger = document.getElementById("hamburger");

    if (hamburger.classList.contains('close')) {
      document.getElementById("hamburger").classList.remove("close");
      document.getElementById("hamburger").classList.add("open");
    } else {
      hamburger.classList.remove("open");
      hamburger.classList.add("close");
    }
  }
};
