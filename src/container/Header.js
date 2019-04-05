import React, { Component } from 'react';
import logo from '../img/logo.png';
import './Header.css'

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Container, Row, Col } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

library.add(faPen);
library.add(faPowerOff);

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <header>
        <Container>
          <Row className="row">
            <Col xs="3">
              <div class="logo-search">
                <img class="pull-left" src={logo} alt="logo" />
              </div>
            </Col>

            <Col xs="6">
              <form method="POST" action="index.html" className="recherche">
                <input type="search" required class="search" />
                <input
                  type="submit"
                  name="submit"
                  value="Rechercher"
                  class="submit"
                />
              </form>
            </Col>

            <Col xs="3">
              <div class="user">
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="couleur_drop">
                  <DropdownToggle caret>
                    Luke Chesser
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem><FontAwesomeIcon icon="pen" /> Edit my profile</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem><FontAwesomeIcon icon="power-off" /> Logout</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    );
  }
}

export default Header;
