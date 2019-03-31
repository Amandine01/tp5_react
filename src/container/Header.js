import React, { Component } from 'react';
import logo from '../img/logo.png';

class Header extends Component {
  render() {
    return (
      <header>
        <div class="wrapper">
          <div class="logo-search">
            <img class="pull-left" src={logo} alt="logo" />
          </div>

          <form method="POST" action="index.html">
            <input type="search" required class="search" />
            <input
              type="submit"
              name="submit"
              value="Rechercher"
              class="submit"
            />
          </form>
          <div class="user">
            <a href="#">Luke Chesser</a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
