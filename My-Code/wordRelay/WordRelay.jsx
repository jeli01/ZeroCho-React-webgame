const React = require('react');
const { Component, useState, useRef } = React;

class WordRelay extends Component {
  state = {
    word: '제로초',
    result: '',
  }

  onSubmitFunc = (e) => {
    e.preventDefault();
    if(this.state.word[this.state.word.length-1] === e.target.children.word.value[0]){
      this.setState({
        result: '딩동댕',
        word: e.target.children.word.value,
      })
      e.target.children.word.value = '';
    }
    else {
      this.setState({
        result: '땡',
      })
      e.target.children.word.value = '';
    }
    this.input.focus();
  };

  inputFunc = (c) => {this.input = c};
  input;

  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <div>
          <form onSubmit = {this.onSubmitFunc}>
            <input id="word" ref={this.inputFunc}/>
            <button>입력!</button>
          </form>
        </div>
        <div>{this.state.result}</div>
      </>
    )
  }
}

const WordRelay2 = function() {
  const [word, setWord] = useState('제로초');
  const [result, setResult] = useState('');
  const onRefInput = useRef(null);

  const onSubmitFunc = (e) => {
    e.preventDefault();
    if(word[word.length-1] === e.target.children.word.value[0]){
      setResult('딩동댕');
      setWord(e.target.children.word.value);
      e.target.children.word.value = '';
    }
    else {
      setResult('땡');
      e.target.children.word.value = '';
    }
    onRefInput.current.focus();
  };

  return (
    <>
      <div>{word}</div>
      <div>
        <form onSubmit = {onSubmitFunc}>
          <input id="word" ref={onRefInput}/>
          <button>입력!</button>
        </form>
      </div>
      <div>{result}</div>
    </>
  )
}

module.exports = WordRelay;