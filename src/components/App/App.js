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
        isDone: true
      },
      {
        value: "Learn props",
        isDone: false
      },
      {
        value: "Do homework",
        isDone: true
      }
    ];
    return (
      <div className={styles.wrap}>
        <h3 className={styles.title}>Things To Do</h3>
        <InputItem />
        <ItemList items={items} />
        <Footer count={3} />
      </div>
    );
  }
}

export default App;