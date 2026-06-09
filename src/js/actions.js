import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import renderNotesList from "./render-note.js";
import {
  refs,
  notes,
  STORAGE_KEY,
  STORAGE_THEME_KEY,
} from "./services/refs.js";
import saveNotes from "./storage.js";
import sprite from "../images/svg/symbol-defs.svg";
import fethRandomQuote from "./services/api.js";
function handleSubmitForm(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const titleValue = form.elements.noteTitle.value.trim();
  const textValue = form.elements.noteText.value.trim();
  const priorityValue = form.elements.priority.value;
  if (!titleValue || !textValue || !priorityValue) {
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
    priority: priorityValue,
    done: false,
  };
  notes.push(formData);
  showStatistics(notes);
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
  showStatistics(notes);
  saveNotes(notes, STORAGE_KEY);
  renderNotesList(notes, refs.noteListeEl);
}
function handleCompliteNote(e) {
  const li = e.target.closest(".note-item");
  const text = li.querySelector(".note-text");
  const complitedBtn = e.target.closest(".note-complitedbtn");
  if (!complitedBtn) return;
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
  showStatistics(notes);
  saveNotes(notes, STORAGE_KEY);
}
function showStatistics(notes) {
  const activNotesEl = refs.stats.active;
  const complitedNotesEl = refs.stats.complited;
  const allNotesEl = refs.stats.all;
  activNotesEl.textContent = notes.filter((note) => !note.done).length;
  complitedNotesEl.textContent = notes.filter((note) => note.done).length;
  allNotesEl.textContent = notes.length;
}

let themeData =
  String(localStorage.getItem(STORAGE_THEME_KEY)) || refs.bodyEl.dataset.theme;

function handleChangeTheme(event) {
  themeData = themeData === "light" ? "dark" : "light";
  localStorage.setItem(STORAGE_THEME_KEY, themeData);
  applyTheme(themeData);
}
function applyTheme(theme) {
  refs.bodyEl.dataset.theme = theme;
  const themeBtn = refs.themeToggleBtn;
  const themeText = themeBtn.querySelector(".header__theme-text");
  const themeSvgCont = themeBtn.querySelector(".header__theme-svg-cont");
  if (theme === "light") {
    themeSvgCont.innerHTML = ` 
  <svg class="header__theme-svg" width="28" height="28">
            <use
              href="${sprite}#icon-sun1"
            ></use>
          </svg>`;
  } else {
    themeSvgCont.innerHTML = ` 
  <svg class="header__theme-svg" width="28" height="28">
            <use
              href="${sprite}#icon-moon"
            ></use>
          </svg>`;
  }

  themeText.textContent = theme;
}
async function showRandomQuote() {
  const btn = refs.quoteBtnEl;
  const svg = btn.querySelector(".details-bar__quote-svg");
  refs.quoteTextEl.innerHTML = "";
  try {
    showLoader(svg);
    refs.quoteTextEl.innerHTML = "Loading...";
    const randomQuote = await fethRandomQuote();
    if (randomQuote) {
      refs.quoteTextEl.innerHTML = `<p>"${randomQuote[0].quote}"</p><h4>—${randomQuote[0].author}</h4>`;
    }
  } catch (err) {
    console.log(err);
    refs.quoteTextEl.innerHTML = "<p>Something went wrong...</p>";
  } finally {
    hideLoader(svg);
  }
}
function showLoader(svg) {
  svg.classList.add("loading");
}
function hideLoader(svg) {
  svg.classList.remove("loading");
}
applyTheme(themeData);
showStatistics(notes);
export {
  handleSubmitForm,
  handleDeleteNote,
  handleCompliteNote,
  handleChangeTheme,
  showRandomQuote,
};
