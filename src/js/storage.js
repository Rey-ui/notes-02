function saveNotes(notes, key) {
  localStorage.setItem(key, JSON.stringify(notes));
}
export default saveNotes;
