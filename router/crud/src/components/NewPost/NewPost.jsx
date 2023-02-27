import {useState, useContext, } from "react";
import ApiService from "../ApiService";
import PropTypes from 'prop-types';
import {Link, useNavigate } from "react-router-dom";
import {Context} from "../../context";


export function NewPost() {
  const {form, setForm} = useContext(Context);
  const navigate = useNavigate();
  const apiService = new ApiService();
   const {loadPosts, posts} = useContext(Context);
  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleAddPost = async (e) => {
    e.preventDefault();

    const post = {id: +([1, 2, 3, 4, 5, 6, 7, 8, 9].sort(() => Math.random() - 0.5)).reduce((a, b)=> {
        return a.toString() + b.toString();
      }), content: form.content, created: new Date()};
    await apiService.addNewPost(post)
      .then(() => {
        loadPosts();
        console.log(loadPosts, ' loadposts');
        console.log(posts, ' posts')
        setForm({content: ""});
      }).then(() =>  navigate('/'));
  };


  return(
    <div className='post'>
      <div className="post-top">
        <ul className="btn-list">
          <li className="btn-item">
            <button className='btn public'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill btn-icon"
                   viewBox="0 0 16 16">
                <path
                  d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
              </svg>
              Публикация
            </button>
            <div/>
          </li>
          <li className="btn-item">
            <button className='btn'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera btn-icon"
                   viewBox="0 0 16 16">
                <path
                  d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/>
                <path
                  d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
              </svg>
              Фото|видео
            </button>
            <div/>
          </li>
          <li className="btn-item">
            <button className='btn'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                   className="bi bi-camera-video btn-icon" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                      d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"/>
              </svg>
              Прямой эфир
            </button>
          </li>
          <li className="btn-item">
            <Link className='btn btn-delete' to="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-x"
                   viewBox="0 0 16 16">
                <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </Link>
          </li>
        </ul>
      </div>
      <div className="post-center">
        <form className="post-form" onSubmit={handleAddPost}>
          <textarea name="content" id="post" cols="auto" rows="10" placeholder="Ваше сообщение"  onChange={handleFormChange}  value={form.content}/>
          <button type="submit" className="btn btn-primary btn-submit">Опубликовать</button>
        </form>
      </div>
    </div>
    )
}



NewPost.propTypes = {
  updatePosts: PropTypes.func
}
