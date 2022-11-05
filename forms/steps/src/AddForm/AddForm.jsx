import {useState} from "react";
import { nanoid } from "nanoid";

export const AddForm = ({onAddStep}) => {
  const [form, setForm] = useState({
    date: '',
    distance: 0,
  });

  const handleChangeInput = ({target}) => {
    const {name, value} = target;
    setForm(prevStep => ({...prevStep, [name]: value}));
  }
  const handleAddStep = (e) => {
    e.preventDefault();
    const step = { id: nanoid(), date: form.date, distance: form.distance };

    onAddStep(step);
    setForm({ date: "", distance: 0, });
  };

  return (
    <form className="form" onSubmit={handleAddStep}>
      <div>
        <label htmlFor="date" className="label">Дата </label>
        <input type="date" id="date" className="input form-control" name="date" value={form.date} onChange={handleChangeInput}/>
      </div>
      <div>
        <label htmlFor="distance" className="label">Расстояние </label>
        <input type="text" id="distance" className="input form-control" name="distance" value={form.distance} onChange={handleChangeInput}/>
      </div>
      <button type="submit" className="btn btn-outline-secondary">Ок</button>
    </form>
  )
}
