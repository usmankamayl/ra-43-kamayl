import Article from "../Article";

export const Articels = ({articels = [1, 2, 3, 4, 5]}) => {
  return(
    <div>
      {articels?.map((article) => (
        // тематика статьи - массив с обектами
        <Article article={article} />
      ))}
    </div>
  )
}
