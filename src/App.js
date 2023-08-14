import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const initialState = [
    {id: 1, order: 1, text: 'Заслонка'},
    {id: 2, order: 2, text: 'Фильтр'},
    {id: 1, order: 3, text: 'Нагреватель'},
    {id: 1, order: 3, text: 'Охладитель'},
    {id: 1, order: 3, text: 'Вентилятор'},
  ];
  const [cardList, setCardList] = useState(initialState);
  return (
    <div className="app">
      {cardList.map(card => 
        <div className={'card'}>
          {card.text}
        </div>
      )}
    </div>
  );
}

export default App;
  