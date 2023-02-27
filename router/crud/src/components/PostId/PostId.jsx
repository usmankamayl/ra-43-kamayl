import ApiService from "../ApiService";
import {useParams, useNavigate, Link} from "react-router-dom";
import {useContext, useEffect} from "react";
import {Context} from "../../context";

export const PostId = () => {
  const {post, setPost} = useContext(Context);
  const navigate = useNavigate();
  const {id} = useParams();
  const apiService = new ApiService();

  useEffect(() => {
    apiService.getPost(id).then((res) => setPost(res));
  }, [id])


  const handleDelete = async () =>   await apiService.deletePost(id).then(() =>  navigate('/'));

  return (
    <>
      {post && (
        <div className='post-item'>
          <div className="post-item__right">
            <img src="images/img.jpeg" alt="avatar" className="post-img" width='50' height='50'/>
            <div className="author">
              <p className="author__name">Usman</p>
              <p className="author__desc">Основатель группы</p>
            </div>

          </div>
          <div className="post-content">{post.content}</div>
            <div className="btn-wrapper">
              <Link  className="btn-change btn btn-primary" to={`/posts/${post.id}/edit`}>Изменить</Link>
              <button type="button" className="btn-delete btn btn-danger" onClick={handleDelete}>Удалить</button>
            </div>
        </div>
      )
    }
    </>
  )
}

