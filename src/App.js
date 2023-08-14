import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import { element } from 'prop-types';

function App() {
  const initialState = [
    {id: 1, order: 1, text: 'Заслонка'},
    {id: 2, order: 2, text: 'Фильтр'},
    {id: 3, order: 3, text: 'Нагреватель'},
    {id: 4, order: 4, text: 'Охладитель'},
    {id: 5, order: 5, text: 'Вентилятор'},
  ];
  const [elementList, setElementList] = useState(initialState);
  const [currentElement, setCurrentElement] = useState({initialState: null});

  function dragStartHandler(e, element) {
    setCurrentElement(element);
  }

  function dragEndHandler(e) {
    e.target.style.background = 'white';
  }

  function dragOverHandler(e) {
    e.preventDefault();
    e.target.style.background = 'lightgray';
  }

  function dropHandler(e, element) {
    e.preventDefault();
    setElementList(elementList.map(elem => {
      if (elem.id === element.id) {
        return {...elem, order: currentElement.order}
      }
      if (elem.id === currentElement.id) {
        return {...elem, order: element.order}
      }
      return elem
    }))
    e.target.style.background = 'white';
  }

  function sortElements(a, b) {
    if (a.order > b.order) {
      return 1
    } else {
      return -1
    }
  }

  return (
    <div className="app">
      {elementList.sort(sortElements).map(element => 
        <div 
          onDragStart={(e: DragEvent<HTMLDivElement>) => dragStartHandler(e, element)}
          onDragLeave={(e: DragEvent<HTMLDivElement>) => dragEndHandler(e)}
          onDragEnd={(e: DragEvent<HTMLDivElement>) => dragEndHandler(e)}
          onDragOver={(e: DragEvent<HTMLDivElement>) => dragOverHandler(e)}
          onDrop={(e: DragEvent<HTMLDivElement>) => dropHandler(e, element)}
          draggable={true} 
          className={'element'}
          >
          {element.text}
        </div>
      )}
    </div>
  );
}

export default App;
  
