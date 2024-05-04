import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  interface data {
    name:String,
    type:String

  }
  const [fruit, setFruit] = useState<data[]>([]);
  const [vetgetable, setVetgetable] = useState<data[]>([]);
  const [dataAll, setDataAll] = useState<data[]>([]);

  const [hideButton, setHideButton] = useState<string[]>([]);
  const [hideButton2, setHideButton2] = useState<string[]>([]);
  const [hideButton3, setHideButton3] = useState<string[]>([]);


  // const [buttonVisible, setButtonVisible] = useState<any[]>([]);


  const dataSheet = [
    {
      type: 'Fruit',
      name: 'Apple',
    },
    {
      type: 'Vegetable',
      name: 'Broccoli',
    },
    {
      type: 'Vegetable',
      name: 'Mushroom',
    },
    {
      type: 'Fruit',
      name: 'Banana',
    },
    {
      type: 'Vegetable',
      name: 'Tomato',
    },
    {
      type: 'Fruit',
      name: 'Orange',
    },
    {
      type: 'Fruit',
      name: 'Mango',
    },
    {
      type: 'Fruit',
      name: 'Pineapple',
    },
    {
      type: 'Vegetable',
      name: 'Cucumber',
    },
    {
      type: 'Fruit',
      name: 'Watermelon',
    },
    {
      type: 'Vegetable',
      name: 'Carrot',
    },
  ]
  const handleClick = (data: any) => {
    setHideButton([...hideButton,  data.name])
    if (data.type === "Fruit") {
      setFruit(prevData => [...prevData, data])
    }
    else if (data.type === "Vegetable") {
      setVetgetable(prevData => [...prevData, data])
    }
    else {
      console.log("Not have this type");

    }

  }
  const handleClickNew = (data: any) => {
    setHideButton3([...hideButton3,  data.name])
    if (data.type === "Fruit") {
      setFruit(prevData => [ data])
    }
    else if (data.type === "Vegetable") {
      setVetgetable(prevData => [...prevData, data])
    }
    else {
      console.log("Not have this type");

    }

  }
  const handleClickBack = (data: any) => {
    setDataAll(prevData => [...prevData, data])
    setHideButton2([...hideButton2,  data.name])

  }

  useEffect(() => {

    


  }, [dataAll,hideButton2])


  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        {dataSheet.map((item, index) => (
          !hideButton.includes(item.name) && (
          <button style={{ flexDirection: "column", display: "flex", margin: 16 }} key={index} onClick={() => handleClick(item)}>{item.name}</button>
          )

        ))}
         {dataAll.map((item, index) => (
         !hideButton3.includes(item.name.toString()) &&(
          <button style={{ flexDirection: "column", display: "flex", margin: 16 }} key={index} onClick={() => handleClickNew(item)}>{item.name}</button>
          )
          
        ))}
      </div>
      <div>
        <p>Fruit</p>
        {fruit.map((item, index) => (
          !hideButton2.includes(item.name.toString()) &&(
          <button style={{ flexDirection: "column", display: "flex", margin: 16 }} key={index} onClick={() => handleClickBack(item)}>{item.name}</button>
          )
        ))}
      </div>
      <div style={{ marginRight: 200 }}>
        <p>Vetgetable</p>
        {vetgetable.map((item, index) => (
          !hideButton2.includes(item.name.toString()) &&(
          <button style={{ flexDirection: "column", display: "flex", margin: 16 }} key={index} onClick={() => handleClickBack(item)}>{item.name}</button>
          )
        ))}
      </div>


    </div>
  );
}

export default App;
