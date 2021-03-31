/*SELECT*/

const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const searchBox = document.querySelector(".search-box input");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");

  searchBox.value = "";
  filterList("");

  if (optionsContainer.classList.contains("active")) {
    searchBox.focus();
  }
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});

searchBox.addEventListener("keyup", function(e) {
  filterList(e.target.value);
});

const filterList = searchTerm => {
  searchTerm = searchTerm.toLowerCase();
  optionsList.forEach(option => {
    let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
    if (label.indexOf(searchTerm) != -1) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
};



/*LIST*/

function addItem() {
  var ul = document.getElementById("dynamic-list");
  var candidate = document.getElementById("candidate");
  var li = document.createElement("li");
  li.setAttribute('id', candidate.value);
  li.appendChild(document.createTextNode(candidate.value));
  ul.appendChild(li);
}


function removeItem() {
  var ul = document.getElementById("dynamic-list");
  var candidate = document.getElementById("candidate");
  var item = document.getElementById(candidate.value);
  ul.removeChild(item);
}
