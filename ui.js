class UI {
  constructor() {}

  // printNotes Function
  printNotes() {
    let myNotes = JSON.parse(localStorage.getItem("notes"));
    if (myNotes === null) {
      notesArr = [];
    } else {
      notesArr = myNotes;
    }

    let output = "";
    notesArr.forEach(note => {
      output += `
      <div class="container card card-body mt-3 mb-3 shadow" style="background-color: ${note.bg}">
        <div>
          <span class="font-weight-bold">${note.title}</span> (${note.date})
          <span class="float-right">
            <a href="#" class="edit text-primary"><i class="fas fa-pencil-alt"></i
            ></a>
            <a href="#" class="delete text-danger"
              ><i class="fas fa-trash-alt"></i
            ></a>
          </span>
        </div>
        <hr />
        <p class="text-justify">${note.body}</p>
      </div>
      `;
    });
    document.getElementById("note-list").innerHTML = output;
  }

  // Edit Function
  editNote(e) {
    if (e.target.parentElement.classList.contains("edit")) {
      notesArr.forEach(function(n, index, object) {
        if (
          n.body ===
            e.target.parentElement.parentElement.parentElement
              .nextElementSibling.nextElementSibling.innerText &&
          n.title ===
            e.target.parentElement.parentElement.previousElementSibling
              .innerText
        ) {
          editTitle.value = n.title;
          editBody.value = n.body;
          noteId.value = `${index + 1}`;
          $("#editNoteModal").modal();
        }
      });
    }
  }

  // Delete Function
  deleteNote(e) {
    if (e.target.parentElement.classList.contains("delete")) {
      notesArr.forEach(function(n, index, object) {
        if (
          n.body ===
          e.target.parentElement.parentElement.parentElement.nextElementSibling
            .nextElementSibling.innerText
        ) {
          object.splice(index, 1);
        }
      });
      // Update local storage
      localStorage.setItem("notes", JSON.stringify(notesArr));

      // Update ui
      e.target.parentElement.parentElement.parentElement.parentElement.remove();
    }
  }

  // Save Edited Note
  saveEditedNote() {
    let id = noteId.value;
    notesArr[id - 1].title = editTitle.value;
    notesArr[id - 1].body = editBody.value;

    // Update local storage
    localStorage.setItem("notes", JSON.stringify(notesArr));
    // Update ui
    ui.printNotes(notesArr);
  }
}
