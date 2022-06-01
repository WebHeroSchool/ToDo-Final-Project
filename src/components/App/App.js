import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import InputItem from '../InputItem/InputItem';
import './App.css'

const App = () => {
  const items = [
    {
      value: 'Make a new app'
    },
    {
      value: 'Learn props'
    },
    {
      value: 'Do homework'
    }
  ];

  return (
    <div className = 'wrap'>
      <h3 className = 'wrap-title'>Things To Do</h3>
      <InputItem />
      <ItemList items={items} />
      <Footer count ={3} />
    </div>);
};

export default App;
