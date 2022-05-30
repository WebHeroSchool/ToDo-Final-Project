import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import InputItem from '../InputItem/InputItem';

const todoItem = 'Make a new app';
const App = () => (<div>
  <h3>Things To Do</h3>
  <InputItem />
  <ItemList todoItem={todoItem} />
  <Footer count ={3} />
</div>);

export default App;