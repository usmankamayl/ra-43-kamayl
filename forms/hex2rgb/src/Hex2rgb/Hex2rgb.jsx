import hex2rgb from 'hex2rgb';
import {useState} from "react";

export const Hex2rgb = () => {
  const[input,setInput]=useState({
    name: '#000',
  });

  const handleNameChange = ({target}) => {
    const {name, value} = target;
        setInput(prevForm => ({...prevForm, [name]: value}));
  }

  return(
    <div style={{background: input.name.length >= 7 && input.name}} className="block">
      <div>
        <input type="text" className="hex"
               name="name"
               onChange={handleNameChange}
               value={input.name} />
        <div className="rgb">{input.name.length >= 7 && <span>{hex2rgb(input.name).rgbString === 'inherit' ? 'Ошибка!' : hex2rgb(input.name).rgbString}</span>}</div>
      </div>
    </div>
  )
}
