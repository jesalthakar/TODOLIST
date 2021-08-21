const li = document.querySelector("li");
task.setAttribute("draggable", "true");

let draggedItem = null;

li.addEventListener("dragstart",(event) => {
  draggedItem = li;
  setTimeout(() => {
    li.style.display = "none";
  }, 0);
});

li.addEventListener(“dragend”, (event) => {
  draggedItem.style.display = "flex";
  draggedItem = null;
   });

li.addEventListener(“dragover”, (event) => {
   event.preventDefault();
   ;})

li.addEventListener(“dragenter”, (event) => {
  event.preventDefault();
   });

li.addEventListener(“drop”, (event) => {
  event.preventDefault();
  li.appendChild(draggedItem);
})
