import {
  handleCompliteNote,
  handleDeleteNote,
  handleSubmitForm,
} from "./actions.js";
import handleFilter from "./filters.js";
import renderNotesList from "./render-note.js";
import { refs, notes } from "./services/refs.js";

refs.noteListeEl.addEventListener("click", handleDeleteNote);
refs.noteListeEl.addEventListener("click", handleCompliteNote);
refs.formEl.addEventListener("submit", handleSubmitForm);

refs.filtersContainer.addEventListener("click", (e) => {
  handleFilter(e, renderNotesList, refs.filtersBtns, notes, refs.noteListeEl);
});
renderNotesList(notes, refs.noteListeEl);
