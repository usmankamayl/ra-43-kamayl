import {useState} from "react";
import { nanoid } from "nanoid";

export const AddWatch = ({onAddWatch}) => {
  const [form, setForm] = useState({
    city: '',
    hour: 0,
  });

  const handleChangeInput = ({target}) => {
    const {name, value} = target;
    setForm(prevWatches => ({...prevWatches, [name]: value}));
  }
  const handleAddWatch = (e) => {
    e.preventDefault();
    const watch = {id: nanoid(),  city: form.city, hour: form.hour};

    onAddWatch(watch);
    setForm({city: "", hour: 0,});
  };

  return(
      <form className="form" onSubmit={handleAddWatch}>
        <div>
          <label htmlFor="city" className="label">Название</label>
          <input type="text" id="city" name="city" className="input" value={form.city} onChange={handleChangeInput}/>
        </div>
        <div>
          <label htmlFor="zone" className="label">Временная зона</label>
          <input type="text" id="zone" name="hour" className="input" value={form.hour} onChange={handleChangeInput} />
        </div>
        <button type="submit" className="btn">Добавить</button>
      </form>
  )
}
