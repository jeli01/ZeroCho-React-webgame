const React = require('react');
const { Component, useState, useRef } = React;

class WordRelay extends Component {
  state = {
    word: '제로초',
    value: '',
    result: '',
  };
  
  onSubmitForm = (e) => {
    e.preventDefault();
    if(this.state.word[this.state.word.length -1] === this.state.value[0]) {
      this.setState({
        result: '딩동댕',
        word: this.state.value,
        value: '',
      })
      this.input.focus();
    }
    else {
      this.setState({
        result: '땡',
        value: '',
      });
      this.input.focus();
    }
  };

  onChangeInput = (e) => {
    this.setState( { value: e.target.value});
  };

  input;

  onRefInput = (c) => {
    this.input = c;
  };

  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmitForm}>
          <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} />
          <button>입력!</button>
        </form>
      </>
    )
  }
}

const WordRelay2 = function() {
  const [word, setWord] = useState('제로초');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);
  
  const onSubmitForm = (e) => {
    e.preventDefault();
    if(word[word.length -1] === e.target.children.word.value[0]) {
      setResult('딩동댕');
      e.target.children.word.value = '';
      setWord(e.target.children.word);
      inputRef.current.focus();
    }
    else {
      setResult('땡');
      e.target.children.word.value = '';
      inputRef.current.focus();
    }
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };


  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input id="word" ref={inputRef} />
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </>
  )

}

module.exports = WordRelay2;