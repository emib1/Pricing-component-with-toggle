const month = document.querySelectorAll(".month"),
  year = document.querySelectorAll(".year"),
  checkInput = document.querySelector(".switch-div input"); 

year.forEach(yearEl => {
    yearEl.classList.add("hide");
});

checkInput.addEventListener("click", ()=>{
    year.forEach(yearEl => {
    yearEl.classList.toggle("hide");
    });
    month.forEach(monthEl => {
          monthEl.classList.toggle("hide");
        });
});



