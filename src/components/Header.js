import React, { Component } from 'react';
import './styles/Header.css';


class Header extends Component{

render() {
  return (
  <div id="header">
    <img id="chuckNorrisImage1" src="https://www.gunaxin.com/wp-content/uploads/2015/09/Chuck-Norris-2-560x280.jpg" alt="chuck norris" />
    <header id="headerMain">
      <h3 id="headerTitle1">Welcome to the Great</h3>
      <h1 id="headerTitle2">
        Chuck Norris
      </h1>
      <h3 id="headerTitle3">website</h3>
    </header>
    <img id="chuckNorrisImage2" src="https://www.gunaxin.com/wp-content/uploads/2015/09/Chuck-Norris-2-560x280.jpg" alt="chuck norris" />

  </div>
)
}
}
export default Header;
