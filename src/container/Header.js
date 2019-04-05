import React, { Component } from 'react';
import logo from '../img/logo.png';
import './Header.css'

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Container, Row, Col } from 'reactstrap';

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
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle caret>
                    Luke Chesser
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Browse</DropdownItem>
                    <DropdownItem>Heavy Rotation</DropdownItem>
                    <DropdownItem>Recent Activity</DropdownItem>
                    <DropdownItem>Top Charts</DropdownItem>
                    <DropdownItem>New Releases</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem header>Your music</DropdownItem>
                    <DropdownItem>Collection</DropdownItem>
                    <DropdownItem>History</DropdownItem>
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
