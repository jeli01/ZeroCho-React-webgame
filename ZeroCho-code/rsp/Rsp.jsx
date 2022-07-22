import React, { Component, useState, useRef, useEffect } from 'react';

import useInterval from './useInterval.js';
// 라이프 사이클
// 클래스의 경우 -> constructor -> render -> ref -> componentDidMount
// -> (setState/props 바뀔때 -> shouldComponentUpdate -> render -> componentDidUpdate)
// 부모가 나를 없앴을 때 -> componentWillUnmount -> 소멸

const rspCoords = {
  바위: '0',
  가위: '-142px',
  보: '-284px',
};

const scores = {
  가위: 1,
  바위: 0,
  보: -1,
};

const computerChoice = (imgCoord) => {
  return Object.entries(rspCoords).find( function(v) {
    return v[1] === imgCoord;
  })[0];
};

const Rsp2 = () => {
  const [result, setResult] = useState('');
  const [imgCoord, setImgCoord] = useState(rspCoords.바위);
  const [score, setScore] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  const changeHand = () => {
    if (imgCoord === rspCoords.바위) {
      setImgCoord(rspCoords.가위);
    } else if (imgCoord === rspCoords.가위) {
      setImgCoord(rspCoords.보);
    } else if (imgCoord === rspCoords.보) {
      setImgCoord(rspCoords.바위);
    }
  }

  useInterval(changeHand, isRunning ? 100 : null);

  const onClickBtn = (choice) => {
    if (isRunning) {
      setIsRunning(false);
      const myScore = scores[choice];
      const cpuScore = scores[computerChoice(imgCoord)];
      const diff = myScore - cpuScore;
      if (diff === 0) {
        setResult('비겼습니다!');
      } else if ([-1, 2].includes(diff)) {
        setResult('이겼습니다!');
        setScore((prevScore) => prevScore + 1);
      } else {
        setResult('졌습니다!');
        setScore((prevScore) => prevScore - 1);
      }
      setTimeout(() => {
        setIsRunning(true);
      }, 1000);
    }
  }

  return (
    <>
      <div id = "computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`}}/>
      <div>
        <button id="rock" className="btn" onClick={() => onClickBtn('바위')}>바위</button>
        <button id="scissor" className="btn" onClick={() => onClickBtn('가위')}>가위</button>
        <button id="paper" className="btn" onClick={() => onClickBtn('보')}>보</button>
      </div>
      <div>{result}</div>
      <div>현재 {score}점</div>
    </>
  );
}

class Rsp extends Component {
  state = {
    result: '',
    imgCoord: '0',
    score: 0,
  }; 

  interval;

  componentDidMount() {
    this.interval = setInterval(this.changeHand, 100);
  }
  
  componentDidUpdate() {

  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  changeHand = () => {
    const {imgCoord} = this.state;
    if (imgCoord === rspCoords.바위) {
      this.setState( {
        imgCoord: rspCoords.가위,
      });
    } else if (imgCoord === rspCoords.가위) {
      this.setState( {
        imgCoord: rspCoords.보,
      });
    } else if (imgCoord === rspCoords.보) {
      this.setState( {
        imgCoord: rspCoords.바위,
      });
    }
  }

  onClickBtn(choice) {
    const { imgCoord } = this.state;
    clearInterval(this.interval);
    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = myScore - cpuScore;
    if (diff === 0) {
      this.setState({
        result: '비겼습니다.!',
      });
    } else if ([-1, 2].includes(diff)) {
      this. setState((prevState) => {
        return {
          result: '이겼습니다.!',
          score: prevState.score + 1,
        };
      });
    } else {
      this.setState( (prevState) => {
        return {
          result: '졌습니다!',
          score: prevState.score - 1,
        };
      });
    }
    setTimeout(() => {
      this.interval = setInterval(this.changeHand, 100);
    }, 1000);
    
  }

  render() {
    const { result, score, imgCoord } = this.state;
    return (
      <>
        <div id = "computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`}}/>
        <div>
          <button id="rock" className="btn" onClick={() => this.onClickBtn('바위')}>바위</button>
          <button id="scissor" className="btn" onClick={() => this.onClickBtn('가위')}>가위</button>
          <button id="paper" className="btn" onClick={() => this.onClickBtn('보')}>보</button>
        </div>
        <div>{result}</div>
        <div>현재 {score}점</div>
      </>
    );
  }
}

export default Rsp2;