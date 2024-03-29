import Item from "../Item/Item";
import styles from "./ItemList.module.css";
import PropTypes from 'prop-types';

const ItemList = ({ items, onClickDone, onClickDelete }) => (
  <ul className={styles.list}>
    {items.map((item) => (
      <li key={item.id}>
        <Item
          value={item.value}
          isDone={item.isDone}
          id={item.id}
          onClickDone={onClickDone}
          onClickDelete={onClickDelete}
        />
      </li>
    ))}
  </ul>
);

ItemList.propTypes = {
  items: PropTypes.array,
  onClickDone: PropTypes.func,
  onClickDelete: PropTypes.func
};

export default ItemList;
