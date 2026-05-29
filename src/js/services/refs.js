const STORAGE_KEY = "notes";

const refs = {
  formEl: document.querySelector(".note-form"),
  noteListeEl: document.querySelector(".note-list"),
  filtersContainer: document.querySelector(".note-filter"),
  filtersBtns: document.querySelectorAll(".note-filter-btn"),
};
let notes = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
export { refs, notes, STORAGE_KEY };
