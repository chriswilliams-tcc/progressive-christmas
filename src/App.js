import React, { Component } from 'react';
import Snow from 'react-snow-effect';
import {Grid, Row, Col, Panel} from 'react-bootstrap';
import DayItem from './dayitem.js';
import days from './data/nov.json';
import Countdown from './countdown.js'
import Logo from './assets/logo.svg'

class App extends Component {
  render() {
    return (
      <Grid style={{paddingTop: '30px'}}>
        <Snow />

        <Row>
          <Col md={10} mdOffset={1}>
            <Panel>
              <Row>
                <Col md={12}>
                  <h1 style={{margin: 0, padding: 0, textAlign: 'center'}}>11 Days of Christmas 2017</h1>
                </Col>
              </Row>
            </Panel>
          </Col>
        </Row>

        <Countdown />

        <Row>
          <Col md={10} mdOffset={1}>
            <Panel style={{textAlign:'center'}}>
              As an extra bonus: website found by Danilo :)
            </Panel>
          </Col>
        </Row>

        <Row>
          {days.map((item, count) => {return <DayItem key={count} item={item} itempos={count} />})}
        </Row>

      </Grid>
    );
  }
}

export default App;
