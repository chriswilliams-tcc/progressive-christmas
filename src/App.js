import React, { Component } from 'react';
import Snow from 'react-snow-effect';
import {Grid, Row, Col, Panel, Button, Glyphicon} from 'react-bootstrap';
import DayItem from './dayitem.js';
import days from './data/nov.json';
import Countdown from './countdown.js'
import Logo from './assets/logo.png'
import Survive from './assets/survive.jpg'
import Akinator from './assets/akinator.png'

class App extends Component {
  render() {
    return (
      <Grid style={{paddingTop: '30px'}}>
        <Snow />

        <Row>
          <Col md={10} mdOffset={1}>
                <img src={Logo} alt="Progressive Social" style={{width: '200px', marginBottom: '20px'}} />
          </Col>
        </Row>

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

        {/*
          <Row>
            <Col md={10} mdOffset={1}>
              <Panel className="extraLink">
                <img src={Survive} alt="Will you survive the Holidays?" />
                <h2>Will you survive the Holidays?</h2>
                <p>This isn't a season for the faint of heart.</p>
                <Button href="http://m.zimbio.com/quiz/jousAtLL4ky/Will+You+Survive+the+Holidays" target="newbrowserwindow">Start</Button>
              </Panel>
            </Col>
          </Row>

          <Row>
            <Col md={10} mdOffset={1}>
              <Panel className="extraLink">
                <img src={Akinator} alt="Will you survive the Holidays?" />
                <h2>Akinator, the Web Genius</h2>
                <p>Can you deceive him?</p>
                <Button href="http://en.akinator.mobi/" target="newbrowserwindow">Start</Button>
              </Panel>
            </Col>
          </Row>
        */}

        <Row>
          {days.map((item, count) => {return <DayItem key={count} item={item} itempos={count} />})}
        </Row>

      </Grid>
    );
  }
}

export default App;
