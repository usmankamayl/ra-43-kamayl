import {useState} from "react";
import Watch from "../Watch";
import {AddWatch} from "../AddWatch/AddWatch";
export const Watches = () => {
  const [clocks, setClocks] = useState([
    {id: 1, city: 'Москва', hour: 3}
  ]);
  console.log(clocks, ' clocks');

  const handleAdd = (clock) => setClocks((prevClocks) => {
    const newClocks = [...prevClocks];
    newClocks.push(clock)
    return newClocks;
  })

  const handleRemove = (clock) => {
    // eslint-disable-next-line no-self-compare
    setClocks((prevClocks) => prevClocks.filter((c) => c.id !== clock.id));
  }

  return(
    <>
      <AddWatch onAddWatch={handleAdd}/>
      <div className='clocks'>
        {clocks.map((item, index) => (
          <Watch clockInfo={item} key={item.id}>
          <button className="btn-delete" onClick={() => handleRemove(item)}>X</button>
          </Watch>
        ))}
      </div>
    </>
  )
}



