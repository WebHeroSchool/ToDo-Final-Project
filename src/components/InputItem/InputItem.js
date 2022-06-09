import styles from "./InputItem.module.css";
import adder from './adder.png'

const InputItem = () => (
  <div className={styles.field}>
    <input
      type="text"
      className={styles.input}
      placeholder="Type in what you have to do..."
    />
    <img src={adder} alt='adder' />
  </div>
);

export default InputItem;