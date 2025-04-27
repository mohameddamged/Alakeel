// humbrger = document.querySelector(".humbrger");
//       humbrger.onclick = function() {
//           navbar = document.querySelector(".navbar");
//           navbar.classlist.toggle("active");
//       }
let filters = document.querySelectorAll(".filters button");
let meals = document.querySelectorAll(".product img ");

filters.forEach((button) => {
    button.addEventListener("click",remove_active);
    button.addEventListener("click",manage_meals);
})

//remove active class from all lis and add to current
function remove_active() {
    filters.forEach((button) => {
        button.classList.remove("active");
        this.classList.add("active");
    });
}

//mange meals
function manage_meals() {
    meals.forEach((img) => {
        img.style.display = "none";
    });
    document.querySelectorAll(this.dataset.filter).forEach((img) =>{
        img.style.display = "block";
    });
}

