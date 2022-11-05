import {react, useState} from "react";
import {AddForm} from "../AddForm/AddForm";
import Steps from "../Steps";

export const Record = () => {
  const [steps, setSteps] = useState([

  ]);
  const handleAdd = (step) => setSteps((prevSteps) => {
    const newSteps = [...prevSteps];
    if (newSteps.length === 0) {
      newSteps.push(step);
    }

    if (newSteps.length > 0) {
      if (newSteps.some(s => s.date === step.date)) {
        for (let i = 0; i < newSteps.length; i++) {
          if (newSteps[i].date === step.date) {
            step.id = newSteps[i].id;
            step.distance = +step.distance + +newSteps[i].distance;
            newSteps.splice(i, 1, step);
          }
        }
      } else  newSteps.push(step);

    }
    return newSteps.sort((a, b) => {
      return Date.parse(a.date) - Date.parse(b.date);
    });
  });

  const handleDelete = (step) =>
    setSteps((prevSteps) =>
      prevSteps.filter((o) => {
        return step.id !== o.id;
      })
    );


  return (
    <>
      <AddForm onAddStep={handleAdd}/>
      <Steps steps={steps} onRemove={handleDelete}/>
    </>
  )
}
