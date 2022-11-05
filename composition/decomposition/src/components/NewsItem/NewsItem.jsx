export const NewsItem = ({item}) => {
  return(
    <li>
      <p>{item.icon} - здесь иконка</p>
      <p>{item.title} - здесь заголовок новости</p>
    </li>
  )
}
