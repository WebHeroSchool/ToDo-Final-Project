import React, { useState } from "react";
import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import Footer from "../Footer/Footer";
import styles from "./Todo.module.css";

const Todo = () => {
  const initialState = {
    items: [
      // {
      //   value: "Make an app",
      //   isDone: false,
      //   id: 0,
      //   show: false
      // }
      // {
      //   value: "Learn props",
      //   isDone: false,
      //   id: 2
      // },
      // {
      //   value: "Do homework",
      //   isDone: true,
      //   id: 3
      // }
    ],
    count: 0
  };

  const [items, setItems] = useState(initialState.items);
  const [count, setCount] = useState(initialState.count);
  const [showItems, setShowItems] = React.useState(false);

  const onClickDone = (id) => {
    const newItemList = items.map((item) => {
      const newItem = { ...item };
      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });
    setItems(newItemList);
  };

  const onClickDelete = (id) => {
    const removeItemList = items.filter((item) => item.id !== id);
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
    setCount((count) => count + 1);
    setShowItems(true);
  };

  return (
    <div className={styles.wrap}>
      <h3 className={styles.title}>My todos </h3>      
      {showItems && count !== 0 ? (
        <ItemList          
          items={items}
          onClickDone={onClickDone}
          onClickDelete={onClickDelete}
        />
      ) : !showItems || count === 0 ? (
        <div className={styles.empty}> </div>
      ) : (
        <div></div>
      )}      
      <InputItem onClickAdd={onClickAdd} />
      <Footer count={count} />
    </div>
  );
};

export default Todo;
