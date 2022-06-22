import classnames from 'classnames';
import styles from './Item.module.css';
import remove from './remove.png';
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import Checkbox from "@mui/material/Checkbox";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Item = ({ value, isDone, onClickDone, id, onClickDelete }) => (
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
      tabIndex={-1}
      onClick={() => onClickDone(id)}
      icon={<CircleUnchecked />}
      checkedIcon={<CheckCircleIcon />}
    />
    {value}
    <button className={styles.remove} ><img src={remove} alt="remove" onClick={() => onClickDelete(id)}/></button>    
  </div>
);

export default Item;