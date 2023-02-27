import ApiService from "../ApiService";
import {useState, useEffect, useContext} from "react";
import {Context} from "../../context";
import {PostItem} from "../PostItem/PostItem";
import {NewPost} from "../NewPost/NewPost";
import {Link} from "react-router-dom";

export const PostList = () => {
  //const [posts, setPosts] = useState([]);
  //const apiService = new ApiService();
  const {loadPosts, posts, setPosts} = useContext(Context);

  //const loadPosts = () => apiService.getPosts().then(res => setPosts([...res]));
  //loadPosts();

  useEffect(() => {
    console.log(posts, ' posts')
    loadPosts();
  }, []);

  return(
    <>
      <div className="add">
        <Link to="/posts/new" className="add-btn">Создать пост</Link>
      </div>
      <div className="post-list">
        {posts.map(post => {
          return (
            <Link key={post.id} to={`/posts/${post.id}`}>
              <PostItem content={post.content}  id={post.id} updatePosts={loadPosts}/>
            </Link>
          )
        })}
      </div>
      {/*<NewPost updatePosts={loadPosts}/>*/}
    </>

  )
}
