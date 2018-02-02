import React, {Component} from 'react';
import JokesClass from './Jokes';

class MainClass extends Component {
  render() {
    return (
      <div>
      <div id="jokesContainter">
        <JokesClass />
      </div>
    </div>)
  }
}
export default MainClass;
