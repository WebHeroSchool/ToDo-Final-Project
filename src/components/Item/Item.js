import React from "react";
import classnames from "classnames";
import styles from "./Item.module.css";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import Checkbox from "@mui/material/Checkbox";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PropTypes from "prop-types";

class Item extends React.Component {
  render() {
    const { value, isDone, onClickDone, id, onClickDelete } = this.props;

    return (
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
        <button
          type="button"
          className={styles.remove}
          onClick={() => onClickDelete(id)}
        ></button>
      </div>
    );
  }
}

Item.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isDone: PropTypes.bool,
  onClickDone: PropTypes.func,
  onClickDelete: PropTypes.func,
  id: PropTypes.number
};

export default Item;
