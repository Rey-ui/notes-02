function handleFilter(e, render, filtersBtns, notes, noteListeEl) {
  if (e.target === e.currentTarget) return;
  const btn = e.target.closest(".note-filter-btn");
  filtersBtns.forEach((filterBtn) => filterBtn.classList.remove("active"));
  btn.classList.add("active");
  const btnDataName = btn.dataset.btnname;
  if (btnDataName === "all") {
    render(notes, noteListeEl);
    return;
  } else {
    const activeNotes = notes.filter((note) => {
      return btnDataName === "active" ? !note.done : note.done;
    });
    render(activeNotes, noteListeEl);
  }
}
export default handleFilter;
