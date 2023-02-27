export const PostItem = ({content}) => {

  return (
    <div className='post-item'>
      <div className="post-item__right">
        <img src="images/img.jpeg" alt="avatar" className="post-img" width='50' height='50'/>
        <div className="author">
          <p className="author__name">Usman</p>
          <p className="author__desc">Основатель группы</p>
        </div>

      </div>
      <div className="post-content">{content}</div>
    </div>
  )
}

