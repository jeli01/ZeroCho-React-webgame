import React, {useState, useRef} from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: Math.ceil(Math.random() * 9),
      num2: Math.ceil(Math.random() * 9),
      result: '',
      value: '',
    }
  }
  
  onClickButton = (e) => {
    e.preventDefault();
    if(this.state.num * this.state.num2 === Number(this.state.value)) {
      this.setState((prevState) => {
        return {
          num: Math.ceil(Math.random() * 9),
          num2: Math.ceil(Math.random() * 9),
          result: `${prevState.num} 곱하기 ${prevState.num2} 는 ${prevState.value}`,
          value: '', 
        }
      }) 
    }
    else {
      this.setState({
        result: '땡',
        value: '',
      });
    }
    this.input.focus();
  }

  input; 

  onInput = (c) => { this.input = c };

  onChangeFunc = (e) => {this.setState({value: e.target.value})};

  render() { 
    return (
      <>
        <div>{this.state.num} 곱하기 {this.state.num2}는?</div>
        <form onSubmit = {this.onClickButton}>
          <input ref = {this.onInput} value = {this.state.value} onChange={this.onChangeFunc}/>
          <button>입력!</button>
        </form>
        <div>{this.state.result}</div>
      </>
    )
  }
}

const MyComponentFunc = () => {

  const [num, setNum] = useState(Math.ceil(Math.random() * 9));
  const [num2, setNum2] = useState(Math.ceil(Math.random() * 9));
  const [result, setResult] = useState('');
  const [value, setValue] = useState('');
  const input = useRef(null);

  const onClickButton = (e) => {
    e.preventDefault();
    if(num * num2 === Number(value)) {
      setNum(Math.ceil(Math.random() * 9));
      setNum2(Math.ceil(Math.random() * 9));
      setResult(`정답! ${num} 곱하기 ${num2} 는 ${value}`);
      setValue('');
    }
    else {
      setResult('땡');
      setValue('');
    }
    input.current.focus();
  }

  const onChangeFunc = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>{num} 곱하기 {num2}는?</div>
      <form onSubmit = {onClickButton}>
        <input ref = {input} value = {value} onChange={onChangeFunc}/>
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </>
  )
}
export default MyComponentFunc;