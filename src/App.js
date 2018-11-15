import React, { Component } from 'react';
import Snow from 'react-snow-effect';
import {Grid, Row, Col, Panel, Button, Glyphicon } from 'react-bootstrap';
import {bootstrapUtils} from 'react-bootstrap/lib/utils/bootstrapUtils';
import DayItem from './dayitem.js';
import days from './data/master-data.json';
import Countdown from './countdown.js'
import Logo from './assets/logo.png'
import Survive from './assets/survive.jpg'
import Akinator from './assets/akinator.png'
import moment from 'moment';

class App extends Component {
  render() {

    let now = moment().format('YYYY-MM-DD');

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
            <Panel style={{backgroundColor: 'red', borderColor:'red', color: 'white'}}>
              <Row>
                <Col md={12}>
                  <h1 style={{margin: 0, padding: 0, textAlign: 'center'}}>{Object.keys(days).length} Days of Christmas 2018</h1>
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
          {days.map((item, count) => {return <DayItem key={count} item={item} itempos={count} today={now}/>})}
        </Row>

      </Grid>
    );
  }
}

export default App;
