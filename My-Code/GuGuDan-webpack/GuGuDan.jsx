const React = require('react');
const { useState, useRef } = React;

function GuGuDan2() {
  const [first,setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second,setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value,setValue] = useState('');
  const [result,setResult] = useState('');
  const inputRef = useRef(null);
  
  const onSubmitForm = (e)=> {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setResult('정답:' + value)
      setFirst(Math.ceil(Math.random() * 9))
      setSecond(Math.ceil(Math.random() * 9))
      setValue('')
      inputRef.current.focus();
    } else {
      setResult('땡');
      setValue('');
      inputRef.current.focus();
    }
  }

  const onChangeValue = (e) => setValue(e.target.value);

  return (
      <>
        <div>{first} 곱하기 {second}는?</div>
        <form onSubmit = {onSubmitForm}>
          <input type="number" ref = {inputRef} value={value} onChange={onChangeValue}/>
          <button>입력!</button>
        </form>
        <div>{result}</div>  
      </>
    );
}

module.exports = GuGuDan2;