import React, {useState} from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doClick: false,
    }
  }

  clickButton = () => {
    this.setState({
      doClick: true,
    })
  }
  
  render() {
    return (
      <>
        {this.state.doClick ? <div>like button!</div> : <button onClick = {this.clickButton}>click!</button>}
      </>
    )
  }
}

const MyComponentFunc = () => {
  const [doClick, setDoClick] = useState(false);


  const clickButton = () => {
    setDoClick(true);
  }
  
  return (
    <>
      {doClick ? <div>like button!</div> : <button onClick = {clickButton}>click!</button>}
    </>
  )
}
export default MyComponentFunc;