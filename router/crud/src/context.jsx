import React, {createContext, useState} from "react";
import ApiService from "./components/ApiService";
import PropTypes from 'prop-types';

export const Context = createContext();


export const ContextProvider = (props) => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const [form, setForm] = useState({
    content: "",
    id: 0,
    created: new Date()
  });
  const apiService = new ApiService();
  const loadPosts = () => apiService.getPosts().then(res => setPosts([...res]));

  const value = {
    post,
    setPost,
    form,
    setForm,
    posts,
    setPosts,
    loadPosts
  }

  return  <Context.Provider value={value}>
             {props.children}
          </Context.Provider>
}


ContextProvider.propTypes = {
  content: PropTypes.string,
  id: PropTypes.number,
  posts: PropTypes.array,
  post: PropTypes.object,
  form: PropTypes.object,
  updateNotes: PropTypes.func
}
