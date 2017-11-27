import React, { Component } from 'react';
import Snow from 'react-snow-effect';
import {Grid, Row, Col, Panel} from 'react-bootstrap';
import DayItem from './dayitem.js';
import days from './data/nov.json';
import Countdown from './countdown.js'

class App extends Component {
  render() {
    return (
      <Grid style={{paddingTop: '30px'}}>
        <Snow />

        <Row>
          <Col md={10} mdOffset={1}>
            <Panel style={{textAlign:'center'}}>
              Progressive Content 11 Days of Christmas 2017
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
