import React from "react";
import styles from "./InputItem.module.css";
import classnames from "classnames";
import PropTypes from "prop-types";

class InputItem extends React.Component {
  state = {
    inputValue: ""
  };

  onButtonClick = () => {
    this.setState({
      inputValue: ""
    });

    let error;

    if (!this.state.inputValue) {
      error = "Cannot be empty";
    } else {
      this.props.onClickAdd(this.state.inputValue);
    }

    this.setState({ error: error });
  };

  render() {
    return (
      <div>
        <span
          className={classnames({
            [styles.error]: this.state.error
          })}
        >
          {this.state.error}{" "}
        </span>
        <div className={styles.field}>
          <input
            type="text"
            className={classnames({
              [styles.input]: true,
              [styles.input_error]: this.state.error
            })}
            placeholder="Just type your todo here..."
            value={this.state.inputValue}
            onChange={(event) =>
              this.setState({ inputValue: event.target.value })
            }
          />
          <button
            className={styles.adder}
            onClick={this.onButtonClick}
          ></button>
        </div>
      </div>
    );
  }
}

InputItem.propTypes = {
  onClickAdd: PropTypes.func
};

export default InputItem;
