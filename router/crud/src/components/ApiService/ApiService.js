export  class ApiService {
  _apiBase = 'http://localhost:7777/posts/';

  async addNewPost(post) {
    await fetch(this._apiBase, {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  async getPosts() {
    const res = await fetch(this._apiBase);

    if (!res.ok) {
      throw new Error(`Could not fetch ${this._apiBase}` +
        `, received ${res.status}`)
    }
    return await res.json();
  }

  async getPost(id) {
    const res = await fetch(`${this._apiBase}${id}`);
    return await res.json();
  }

  async putPost(id, post) {
    await fetch(`${this._apiBase}${id}`, {
      method: 'PUT',
      body: JSON.stringify(post),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  async deletePost(id) {
    await fetch(`${this._apiBase}${id}`, {method: 'DELETE'});
  }
}
