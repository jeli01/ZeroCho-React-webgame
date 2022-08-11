import React, { Component } from 'react';
import NumberBaseball from '../number-baseball/NumberBaseball'
import RSP from '../rsp/Rsp'
import Lotto from '../lotto/Lotto'

export class GameMatcher extends Component {
  render() {
      if (this.props.match.params.name === 'number-baseball') {
        return <NumberBaseball />
      } else if (this.props.match.params.name === 'rock-scissors-paper') {
        return <RSP />
      } else if (this.props.match.params.name === 'lotto-generator') {
        return <Lotto />
      }
      return (
        <div>
          일치하는 게임이 없습니다.
        </div>
      )
  }
}