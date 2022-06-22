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
    count: 6
  };

  onClickDone = id => {
    const newItemList = this.state.items.map(item => {
      const newItem = { ...item};

      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }

      return newItem;
    });

    this.setState({ items: newItemList});
  };

  render() {
    return (
      <div className={styles.wrap}>
        <h3 className={styles.title}>Things To Do</h3>
        <InputItem />
        <ItemList items={this.state.items} onClickDone={this.onClickDone} />
        <Footer count={this.state.count} />
      </div>
    );
  } 
};

export default App;
