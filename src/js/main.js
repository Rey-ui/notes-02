import {
  applyTheme,
  handleChangeTheme,
  handleClearNotes,
  handleCompliteNote,
  handleDeleteNote,
  handleShowOptions,
  handleSubmitForm,
  showRandomQuote,
} from "./actions.js";
import { handleFilter, selectPriority } from "./filters.js";
import renderNotesList from "./render-note.js";
import fethRandomQuote from "./services/api.js";
import { refs, notes } from "./services/refs.js";

refs.noteListeEl.addEventListener("click", handleDeleteNote);
refs.noteListeEl.addEventListener("click", handleCompliteNote);
refs.formEl.addEventListener("submit", handleSubmitForm);
// refs.selectEl.addEventListener("change", (e) => {
//   selectPriority(e, renderNotesList, refs.noteListeEl);
// });
refs.filtersContainer.addEventListener("click", (e) => {
  handleFilter(e, renderNotesList, refs.filtersBtns, refs.noteListeEl);
});
refs.themeToggleBtn.addEventListener("click", handleChangeTheme);
refs.quoteBtnEl.addEventListener("click", showRandomQuote);
renderNotesList(notes, refs.noteListeEl);
// applyTheme(themeData);
showRandomQuote();
refs.priorsEl.forEach((prior) => {
  prior.addEventListener("change", (e) => {
    selectPriority(e, renderNotesList, refs.noteListeEl);
    refs.selectBtnEl.textContent = e.target.value;
    refs.selectEl.classList.remove("visible");
  });
});
refs.clearBtnEl.addEventListener("click", handleClearNotes);
// refs.priorText.addEventListener('click', (e)=>{

// })
refs.selectBtnEl.addEventListener("click", handleShowOptions);
