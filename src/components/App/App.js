import React, {useState} from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css'

const App = () => {
  const initialState = {
    items: [
      {
        value: "Make a new app",
        isDone: true,
        id: 1
      },
      {
        value: "Learn props",
        isDone: false,
        id: 2
      },
      {
        value: "Do homework",
        isDone: true,
        id: 3
      }
    ],
    count: 3
  }

  const [items, setItems] = useState(initialState.items);
  const [count, setCount] = useState(initialState.count);

  const onClickDone = (id) => {
    const newItemList = this.state.items.map(item => {
      const newItem = { ...item};

      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }

      return newItem;
    });
    setItems(newItemList);
  };

  const onClickDelete = (id) => {
    const removeItemList = items.filter(item => item.id !==id);
    setItems(removeItemList);
    setCount((count) => count - 1);
  };

  const onClickAdd = (value) => {
    const addItemList = [
        ...items,
        {
          value,
          isDone: false,
          id: count + 1
        }
      ];
    setItems(addItemList);
    setCount((count) => count + 1)
  };
  
  return (
    <div className={styles.wrap}>
      <h3 className={styles.title}>Things To Do</h3>
      <InputItem onClickAdd={onClickAdd} />
      <ItemList 
        items={items}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
      />
      <Footer count={count} />
    </div>
  );  
}

export default App;
