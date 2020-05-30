// store elements in variables
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = document.getElementsByTagName("li");
// var btnDelete = document.getElementsByClassName("delete");

// get the input length in a function
function inputLength() {
  return input.value.length;
}

// Create a list element function
function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    li.appendChild(button);
    button.className = "content";
    button.innerHTML = "delete";
    input.value = "";

    liEvent();
    buttonListElement();
}

// Create a click event function
function addListAfterClick() {
    if (inputLength() > 0) {
      createListElement();
    }  
}

// Create a keypress event function
function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function toggleClass(i) {
  this.classList.toggle("done");
}

function liEvent(){
  for (var i = 0; i < items.length; i++) { 
    items[i].addEventListener("click", toggleClass);
  }
}

function buttonListElement() {
  var button = document.querySelectorAll("li button");
  for (i = 0; i < button.length; i++) {
    button[i].addEventListener("click", deleteElement);
  }
}

function deleteElement() {
  for (var i = 0; i < items.length; i++) {
    this.parentNode.remove();
  }
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

liEvent();
buttonListElement();