function renderNotesList(data, noteListeEl) {
  const alternetive = `<p>There are no notes</p>`;
  if (data.length === 0 || !data) {
    noteListeEl.innerHTML = alternetive;
    return;
  } else {
    const markup = data
      .map(({ title, text, date, id, done }, index) => {
        return `<li class="note-item" id="${id}"><h4>${title}</h4><p class="note-text ${done ? "done" : ""}">${text}</p><span>${date}</span><button class="note-btn">X</button></li>`;
      })
      .join("");

    noteListeEl.innerHTML = markup;
  }
}
export default renderNotesList;
