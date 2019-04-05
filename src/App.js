import React, { Component } from 'react';
import Header from './container/Header';
import SideMenu from './container/SideMenu';
import Artist from './component/Artist';
import AlbumGrid from './container/AlbumGrid';

import './App.css';

import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="12" className="head">
            <Header />
          </Col>

          <Col xs="2" className="d-none d-lg-block">
            <SideMenu />
          </Col>

          <Col xs="10">
            <main>
              <Artist />
              <AlbumGrid />
            </main>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
