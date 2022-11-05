import NewsItem from "../NewsItem";

export const TopNews = ({topNews=[{icon: 'icon-1', title: 'title-1'}, {icon: 'icon-2', title: 'title-2'}, {icon: 'icon-3', title: 'title-3'}]}) => {
  return(
    <ul>
      {topNews?.map((newsItem) => (
       <NewsItem item={newsItem} />
      ))}
    </ul>
  )
}
