import React, {useState, useRef} from 'react';

class MyComponent extends React.Component {
  state = {
    word: '제로초',
    value: '',
    result: '',
  }

  onSubmitFunc = (e) => {
    e.preventDefault();

    if(this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState((prevState) => {
        return{
          word: prevState.value,
          value: '',
          result: '딩동댕'
        }
      })
    }
    else {
      this.setState((prevState) => {
        return{
          value: '',
          result: '땡'
        }
      })
    }
    this.input.focus();
  }

  onChangeFunc = (e) => {
    this.setState({ value: e.target.value});
  }

  input;

  inputFunc = (c) => { this.input = c };
  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit = {this.onSubmitFunc}>
          <input ref = {this.inputFunc} value = {this.state.value} onChange = {this.onChangeFunc}/>
          <button>입력!</button>
          <div>{this.state.result}</div>
        </form>
      </>
    )
  }
}

const MyComponentFunc = () => {
  const [word,setWord] = useState('제로초');
  const [value,setValue] = useState('');
  const [result,setResult] = useState('');
  const input = useRef(null);

  const onSubmitFunc = (e) => {
    e.preventDefault();

    if(word[word.length - 1] === value[0]) {
      setWord(value);
      setValue('');
      setResult('딩동댕');
    }
    else {
      setValue('');
      setResult('땡');
    }
    input.current.focus();
  }

  const onChangeFunc = (e) => {
    setValue(e.target.value);
  }

  return (
    <>
      <div>{word}</div>
      <form onSubmit = {onSubmitFunc}>
        <input ref = {input} value = {value} onChange = {onChangeFunc}/>
        <button>입력!</button>
        <div>{result}</div>
      </form>
    </>
  )
}

export default MyComponentFunc;