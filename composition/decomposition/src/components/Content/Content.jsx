import TopNews from "../TopNews";
import {SearchPanel} from "../SearchPanel/SearchPanel";
import {Articels} from "../Articels/Articels";
export const Content = () => {
  return(
    <div className='content'>
      <TopNews />
      <SearchPanel />
      <Articels />
    </div>
  )
}
