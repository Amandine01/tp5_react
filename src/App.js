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
          <div>
            <Row>
              <Col xs="2">
                <Header />
                <SideMenu />
              </Col>
            </Row>

            <Row>
              <Col xs="10">
                <main>
                  <Artist />
                  <AlbumGrid />
                </main>
              </Col>
            </Row>
          </div>
        </Row>
      </Container>
    );
  }
}

export default App;
