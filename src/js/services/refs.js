const STORAGE_KEY = "notes";
const STORAGE_THEME_KEY = "theme";
const refs = {
  bodyEl: document.body,
  formEl: document.querySelector(".notes-form"),
  noteListeEl: document.querySelector(".note-list"),
  filtersContainer: document.querySelector(".note-filter-stats"),
  filtersBtns: document.querySelectorAll(".note-filter-btn"),
  stats: {
    active: document.querySelector('[data-name="active"]'),
    complited: document.querySelector('[data-name="finished"]'),
    all: document.querySelector('[data-name="all"]'),
  },
  selectEl: document.querySelector(".note-select-priority"),
  themeToggleBtn: document.querySelector(".header__theme-btn"),
  quoteTextEl: document.querySelector(".details-bar__quote-container"),
  quoteBtnEl: document.querySelector(".details-bar__quote-btn"),
  // priorsEl: document.querySelectorAll(".prior-notes"),
  // priorText: document.querySelector(".text-prior"),
};
let notes = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

export { refs, notes, STORAGE_KEY, STORAGE_THEME_KEY };
