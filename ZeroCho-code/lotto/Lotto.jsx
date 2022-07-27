import React, { Component, useEffect, useRef, useState, useMemo, useCallback } from 'react';
import Ball from './Ball';

function getWinNumbers() {
  const shuffle = [];
  console.log('getWinNumbers');
  const candidate = Array(45).fill().map((v,i) => i + 1);
  while (candidate.length > 0) {
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  return [...winNumbers, bonusNumber];
}  

const Lotto2 = () => {
  const lottoNumbers = useMemo( () => getWinNumbers(), []);
  const [winNumbers, setWinNumbers] = useState(lottoNumbers  );
  const [winBalls, setWinBalls] = useState([]);
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);
  const timeouts = useRef([]);

  useEffect( () => {
    for(let i = 0 ; i < winNumbers.length - 1; i++) {
      timeouts.current[i] = setTimeout( () => {
        setWinBalls((prevBalls) => [...prevBalls, winNumbers[i]]);
      }, (i + 1) * 1000);
    }
    timeouts.current[6] = setTimeout( () => {
      setBonus(winNumbers[6]);
      setRedo(true);
    }, 7000);
    return () => {
      timeouts.current.forEach((v) => {
        clearTimeout(v);
      });
    }
  }, [timeouts.current ]);  // 빈 배열이면 componentDidMount와 동일
  // 배열에 요소가 있으면 componentDidMount랑 componentDidUpdate 둘 다 수행

  const onClickRedo = useCallback(() => {
    setWinNumbers(getWinNumbers());
    setWinBalls([]);
    setBonus(null);
    setRedo(false);
    timeouts.current = [];
  }, []);

  return (
      <>
        <div>당첨 숫자</div>
        <div id="결과창">
          {winBalls.map((v) => <Ball key={v} number={v} />)}
        </div>
        <div>보너스!</div>
        {bonus && <Ball number={bonus} />}
        {redo &&<button onClick={onClickRedo}> 한번 더!</button>}
      </>
  );
}
class Lotto extends Component {
  state = {
    winNumbers: getWinNumbers(), // 당첨 숫자들
    winBalls: [],
    bonus: null, // 보너스 공
    redo: false,
  };

  timeouts = [];
  runTimeouts = () => {
    const { winNumbers } = this.state;
    for(let i = 0 ; i < winNumbers.length - 1; i++) {
      this.timeouts[i] = setTimeout( () => {
        this.setState( (prevState) => {
          return {
            winBalls: [...prevState.winBalls, winNumbers[i]],
          };
        });
      }, (i + 1) * 1000);
    }
    this.timeouts[6] = setTimeout( () => {
      this.setState( {
        bonus: winNumbers[6],
        redo: true,
      });
    }, 7000)
  }

  componentDidMount() {
    this.runTimeouts();
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.winBalls.length === 0) {
      this.runTimeouts();
    }
  }

  componentWillUnmount() {
    this.timeouts.forEach( (v) => {
      clearTimeout(v);
    });
  }

  onClickRedo = () => {
    this.setState( {
      winNumbers: getWinNumbers(),
      winBalls: [],
      bonus: null,
      redo: false,
    });
    this.timeouts = [];
  };

  render() {
    const { winBalls, bonus, redo } = this.state;
    return (
      <>
        <div>당첨 숫자</div>
        <div id="결과창">
          {winBalls.map((v) => <Ball key={v} number={v} />)}
        </div>
        <div>보너스!</div>
        {bonus && <Ball number={bonus} />}
        {redo &&<button onClick={this.onClickRedo}> 한번 더!</button>}
      </>
    );
  }
}

export default Lotto2;