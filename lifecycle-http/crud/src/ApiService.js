export default class ApiService {
  _apiBase = 'http://localhost:7777/notes/';

  async addNewNote(note) {
    await fetch(this._apiBase, {
      method: 'POST',
      body: JSON.stringify(note),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  async getNotes() {
    const res = await fetch(this._apiBase);

    if (!res.ok) {
      throw new Error(`Could not fetch ${this._apiBase}` +
        `, received ${res.status}`)
    }
    return await res.json();
  }

  async deleteNote(id) {
    await fetch(`${this._apiBase}${id}`, {method: 'DELETE'});
  }
}
