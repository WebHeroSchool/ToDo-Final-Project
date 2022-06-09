import classnames from 'classnames';
import styles from './Item.module.css';
import remove from './remove.png';
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import Checkbox from "@mui/material/Checkbox";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Item = ({ value, isDone }) => (
  <div
    className={classnames({
      [styles.item]: true,
      [styles.done]: isDone
    })}
  >
    <Checkbox
      style={{
        color: "#356EFF",
        padding: 0,
        marginRight: 8.5
      }}
      checked={isDone}
      icon={<CircleUnchecked />}
      checkedIcon={<CheckCircleIcon />}
    />
    {value}
    <img className={styles.remove} src={remove} alt="remove" />
  </div>
);

export default Item;