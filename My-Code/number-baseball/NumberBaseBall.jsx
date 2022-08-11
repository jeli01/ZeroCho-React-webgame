import React, {useState} from 'react';

function getNumbers() {
  const storage = [1,2,3,4,5,6,7,8,9];
  const result = [];
  for(let i = 0 ; i < 4 ; i++) {
    const element = storage.splice(Math.floor(Math.random()*storage.length),1)[0];
    result.push(element);
  }
  return result;
}

class MyComponent extends React.Component {
  state = {
    title: '',
    value: '',
    numbers: getNumbers(),
    tries: [],
  }

  input;

  onInputFunc = (c) => {
    this.input = c
  }

  onChangeFunc = (e) => {
    this.setState({
      value: e.target.value,
    });
  }

  onSubmitFunc = (e) => {
    e.preventDefault();
    this.setState({
      value: '',
    })
    this.input.focus();
  }

  render() {
    return (
      <>
        <div>{this.state.title}</div>
        <form onSubmit={this.onSubmitFunc}>
          <input ref = {this.onInputFunc} value = {this.state.value} onChange={this.onChangeFunc}/>
          <button>입력!</button>
        </form>
        <div>목록들</div>
      </>
    )
  }
}

const MyComponentFunc = () => {
  return (
    <>
    </>
  )
}
export default MyComponent;