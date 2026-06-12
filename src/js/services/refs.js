const STORAGE_KEY = "notes";
const STORAGE_THEME_KEY = "theme";
const refs = {
  bodyEl: document.body,
  formEl: document.querySelector(".notes-form"),
  noteListeEl: document.querySelector(".note-list"),
  filtersContainer: document.querySelector(".details-bar__filter-stats"),
  filtersBtns: document.querySelectorAll(".details-bar__filter-btn"),
  stats: {
    active: document.querySelector('[data-name="active"]'),
    complited: document.querySelector('[data-name="finished"]'),
    all: document.querySelector('[data-name="all"]'),
  },

  themeToggleBtn: document.querySelector(".header__theme-btn"),
  quoteTextEl: document.querySelector(".details-bar__quote-container"),
  quoteBtnEl: document.querySelector(".details-bar__quote-btn"),
  priorsEl: document.querySelectorAll(".details-bar__priority"),
  selectEl: document.querySelector(".details-bar__select-priority"),
  selectBtnEl: document.querySelector(".details-bar__select-priority-btn"),
  clearBtnEl: document.querySelector(".details-bar__clear-btn"),
};
let notes = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

export { refs, notes, STORAGE_KEY, STORAGE_THEME_KEY };
