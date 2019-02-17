import React, {Component, PropTypes} from 'react';
import Keyboard, {KeyboardButton, ClickOnKeyPressWrap} from 'react-screen-keyboard';

export default class Input extends Component {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
  }

  static defaultProps = {
    value: '',
    onFocus: null,
  }

  state = {
    inputNode: null,
  }

  handleInput = (event) => this.props.onChange(event.target.value)

  handleFocus = () => {
    if (this.props.onFocus) {
      this.props.onFocus(this.input);
      this.setState({inputNode: this.input});
      // the `this.refs.input` value should be passed to the Keyboard component as inputNode prop
    }
  }

  render() {
    const {value} = this.props;
    const {inputNode} = this.state;

    return (
      <div>
        <input
          onInput={this.handleInput}
          value={value}
          onFocus={this.handleFocus}
          ref={(input) => { this.input = input; }}
        />
        <Keyboard
          inputNode={inputNode}
          rightButtons={[
            <ClickOnKeyPressWrap key="enter">
              <KeyboardButton
                onClick={this.handleLoginUser}
                value="Войти"
                classes="keyboard-submit-button"
              />
            </ClickOnKeyPressWrap>
          ]}
        />
      </div>
    );
  }
}