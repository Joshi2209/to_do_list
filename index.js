const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("listcontainer");

function addtask() {
  if (inputbox.value === "") {
    alert("text box cant be empty");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listcontainer.append(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  inputbox.value = "";
  savedata();
}
listcontainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      savedata();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
    savedata();
  },
  false
);
function savedata() {
  localStorage.setItem("data", listcontainer.innerHTML);
}
function showlist() {
  listcontainer.innerHTML = localStorage.getItem("data");
}
showlist();