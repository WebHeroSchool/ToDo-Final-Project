import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css'

class App extends React.Component {
  render() {
    const items = [
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
  };

  onClickDone = id => {
    const newItemList = this.state.items.map(item => {
      const newItem = { ...item};

      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }

      return newItem;
    });

    this.setState({ items: newItemList });
  };

  onClickDelete = id => {
    const removeItemList = this.state.items.filter(item => item.id !==id);
    this.setState({ items: removeItemList });
  };

  onClickAdd = (value) =>
    this.setState((state) => ({
      items: [
        ...state.items,
        {
          value,
          isDone: false,
          id: state.count + 1
        }
      ],
      count: state.count + 1
    }));

  render() {
    return (
      <div className={styles.wrap}>
        <h3 className={styles.title}>Things To Do</h3>
        <InputItem onClickAdd={this.onClickAdd} />
        <ItemList 
        items={this.state.items}
        onClickDone={this.onClickDone}
        onClickDelete={this.onClickDelete} />
        <Footer />
      </div>
    );
  } 
};

export default App;
