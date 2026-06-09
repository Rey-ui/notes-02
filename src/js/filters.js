import { notes } from "./services/refs.js";

let filters = {
  stats: "all",
  priority: "all",
};
function filtersNotes(filterNotes, filterValues) {
  console.log(filterValues);
  return filterNotes
    .filter((note) => {
      if (filterValues.stats === "active") return !note.done;
      if (filterValues.stats === "finished") return note.done;
      return true;
    })
    .filter((note) => {
      if (!filterValues.priority || filterValues.priority === "all")
        return true;
      return note.priority === filterValues.priority;
    });
}
function handleFilter(e, render, filtersBtns, noteListeEl) {
  if (e.target === e.currentTarget) return;
  const btn = e.target.closest(".note-filter-btn");
  filtersBtns.forEach((filterBtn) => filterBtn.classList.remove("active"));
  btn.classList.add("active");
  const btnDataName = btn.dataset.btnname;
  filters.stats = btnDataName || "all";
  console.log(btnDataName);
  const filtredArr = filtersNotes(notes, filters);
  render(filtredArr, noteListeEl);
}
function selectPriority(e, renderNotesList, noteListeEl) {
  const selectedValue = e.currentTarget.value;
  if (selectedValue === "") return renderNotesList(notes, noteListeEl);
  filters.priority = selectedValue || "all";
  console.log(selectedValue);
  const filtredArr = filtersNotes(notes, filters);
  renderNotesList(filtredArr, noteListeEl);
}
export { handleFilter, selectPriority };
