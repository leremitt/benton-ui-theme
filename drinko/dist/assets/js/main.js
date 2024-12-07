"use strict";
document.addEventListener("DOMContentLoaded", function () {

    /*
===============================================================
=> Reusable Functions Start
===============================================================
  */
// modal toggle function
function modalToggle(modalName,modalBox){

  modalName.addEventListener('click',()=>{

    if(modalBox.classList.contains('modalOpen')){
      modalBox.classList.remove('modalOpen')
      modalBox.classList.add('modalClose')
      document.removeEventListener("click", closeDropdownOutside);
    }else{
      modalBox.classList.add('modalOpen')
      modalBox.classList.remove('modalClose')
      document.addEventListener("click", closeDropdownOutside);
    }

    function closeDropdownOutside(event) {
      const isClickedInsideDropdown = modalBox.contains(event.target);
      const isClickedOnDropdownBtn = modalName.contains(event.target);
      
      if (!isClickedInsideDropdown && !isClickedOnDropdownBtn) {
        modalBox.classList.add("modalClose");
        modalBox.classList.remove("modalOpen");
        document.removeEventListener("click", closeDropdownOutside);
      }
    }
  })
}

// link button animation
  document.querySelectorAll(".move-btn").forEach((btn) => {
    const oneItem = btn.querySelector(".one");
    const twoItem = btn.querySelector(".two");
    btn.addEventListener("mouseover", () => {
      const oneWidth = oneItem.offsetWidth;
      const twoWidth = twoItem.offsetWidth;
      oneItem.style.transform = `translateX(${twoWidth}px)`;
      twoItem.style.transform = `translateX(${-oneWidth}px)`;
    });
    btn.addEventListener("mouseout", () => {
      oneItem.style.transform = "none";
      twoItem.style.transform = "none";
    });
  });

  // mobiel menu
  const mobileModalbutton = document.querySelector('#mobileModalButton')
const mobileModal = document.querySelector('#mobileMenuModal')

mobileModalbutton && modalToggle(mobileModalbutton,mobileModal)


});
