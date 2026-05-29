import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import renderNotesList from "./render-note.js";
import { refs, notes, STORAGE_KEY } from "./services/refs.js";
import saveNotes from "./storage.js";

function handleSubmitForm(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const titleValue = form.elements.noteTitle.value.trim();
  const textValue = form.elements.noteText.value.trim();
  if (!titleValue || !textValue) {
    iziToast.error({
      title: "Error",
      message: `❌fields must not be empty!`,
    });
    return;
  }
  const today = new Date().toLocaleDateString();
  const formData = {
    id: Date.now(),
    title: titleValue,
    text: textValue,
    date: today,
    done: false,
  };
  notes.push(formData);
  saveNotes(notes, STORAGE_KEY);
  renderNotesList(notes, refs.noteListeEl);
  form.reset();
}

function handleDeleteNote(e) {
  if (e.target === e.currentTarget) return;
  const btn = e.target.closest(".note-btn");
  if (!btn) return;
  const itemId = btn.closest("li");
  const updateNotes = notes.filter(({ id }) => {
    return id != itemId.id;
  });
  notes.length = 0;
  notes.push(...updateNotes);
  if (notes.length === 0) {
    localStorage.removeItem(STORAGE_KEY);
  }
  saveNotes(notes, STORAGE_KEY);
  renderNotesList(notes, refs.noteListeEl);
}
function handleCompliteNote(e) {
  const li = e.target.closest(".note-item");
  const text = e.target.closest(".note-text");
  if (!text) return;
  const item = notes.find((note) => {
    return note.id == li.id;
  });
  if (!item.done) {
    text.classList.add("done");
    item.done = true;
  } else {
    text.classList.remove("done");
    item.done = false;
  }
  saveNotes(notes, STORAGE_KEY);
}
export { handleSubmitForm, handleDeleteNote, handleCompliteNote };
