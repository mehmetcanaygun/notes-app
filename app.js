// Init UI Object
const ui = new UI();

// DOM Elements
const noteTitle = document.getElementById("note-title");
const noteBody = document.getElementById("note-body");
const noteId = document.getElementById("note-id");
const editTitle = document.getElementById("edit-title");
const editBody = document.getElementById("edit-body");
const addBtn = document.getElementById("add-btn");
const editBtn = document.getElementById("edit-btn");

// Variables
let notesArr = [];
bgColors = [
  "#FAEBD7",
  "#5F9EA0",
  "#A9A9A9",
  "#8FBC8F",
  "#FFFAF0",
  "#DCDCDC",
  "#F0E68C",
  "#E0FFFF",
  "#3CB371",
  "#FFE4B5",
  "#DDA0DD",
  "#BC8F8F"
];

// Print notes onload
ui.printNotes();

// Add Note
addBtn.addEventListener("click", addNote);

function addNote() {
  let newNote = {
    title: noteTitle.value,
    body: noteBody.value,
    date: `${new Date().getDate()}/${new Date().getMonth() +
      1}/${new Date().getFullYear()}`,
    bg: bgColors[Math.round(Math.random() * bgColors.length)]
  };

  notesArr.push(newNote);
  console.log(notesArr);

  // Add note to local storage
  localStorage.setItem("notes", JSON.stringify(notesArr));

  // Add note to UI
  ui.printNotes(notesArr);

  // Clear Input Fields
  clearInputs();
}

// Edit Note
document.body.addEventListener("click", ui.editNote);

// Save Edited Note
document
  .getElementById("edit-btn")
  .addEventListener("click", ui.saveEditedNote);

// Delete Note
document.body.addEventListener("click", ui.deleteNote);

// Clear Input Fields
function clearInputs() {
  noteTitle.value = "";
  noteBody.value = "";
}
