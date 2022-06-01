import Item from '../Item/Item';

const ItemList = ({ todoItem }) => (<ul>
    <li><Item todoItem={todoItem} /></li>
    <li><Item todoItem={'Learn props'} /></li>
    <li><Item todoItem={'Do homework'} /></li>
  </ul>);

export default ItemList;