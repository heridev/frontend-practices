import { Component } from 'react';

class ControlledComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' }
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.target.value });
    console.log(this.state.inputValue)
  }

  render() {
    return (
      <div>
        <h3> Uncontrolled component</h3>
        <p>Input value: {this.state.inputValue}</p>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

// using moder React Code
// function ControlledComponent() {
//   const [inputValue, setInputChange] = useState('');
//   const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setInputChange(event.target.value);
//   }
//   return (
//     <>
//       <p>value entered {inputValue}</p>
//       <input type="text" value={inputValue} onChange={onChange} />
//     </>
//   )
// }

export default ControlledComponent;
