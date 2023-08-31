import logo from './logo.svg';
import './App.css';
import {useState} from 'react';



export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [productivityList, setProductivityList] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddToProductivity = () => {
    if (inputValue.trim() !== '') {
      setProductivityList((prevList) => [...prevList, inputValue]);
      setInputValue('');
    }
  };

  const removeItem = (index) => {
    const updatedList = productivityList.filter((_, i) => i !== index);
    setProductivityList(updatedList);
  };

  return(
    <div className='App2'>
      <div  className='App'>
        <div className='TitleStyle'>
          <body>
            <h1 style={{color:"#e7f6f8"}}>
              Productivity App
            </h1>
            <div className='InputStyle'>
              <input className='InputElement' type="text" value={inputValue} onChange={handleInputChange}/>
            </div>
            <button className='AddToStyle' onClick={handleAddToProductivity}>Add to productivity List</button>
          </body>
          <div>
              {productivityList.map((item, index) => (
              <li key={index} className='ListStyle'>
              {item}
              <button className='ButtonStyle' onClick={() => removeItem(index)}>Remove</button>
              </li>

              ))}
          </div>
        </div>
      </div>
    </div>


  );
}




