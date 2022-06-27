import React from "react";
import styles from "./InputItem.module.css";
import adder from './adder.png';
import classnames from 'classnames';

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
            placeholder="Type in what you have to do..."
            value={this.state.inputValue}
            onChange={(event) =>
              this.setState({ inputValue: event.target.value.toUpperCase() })
            }
          />
          <button
            style={{ backgroundImage: `url(${adder})` }}
            className={styles.adder}
            onClick={this.onButtonClick}
          ></button>
        </div>
      </div>
    );
  }
}

export default InputItem;



