const React = require('react');
const ReactDom = require('react-dom');

import React from 'react';
import ReactDom from 'react-dom';


const react = {
  func1: () => {
    console.log('쌀라쌀라~');
  }
}

module.exports = react;
exports.func2 = () => {};
exports.func3 = () => {};
exports.func4 = () => {};

export default react;
export const func2 = () => {};
export const func3 = () => {};
export const func4 = () => {};