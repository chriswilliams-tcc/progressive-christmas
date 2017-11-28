import React, { Component } from 'react';
import {Row, Col, Panel} from 'react-bootstrap';
import moment from 'moment';

class Countdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      daysLeft: 0,
      HoursLeft: 0,
      MinutesLeft: 0,
      SecondsLeft: 0
    }

    this.updateTimer = this.updateTimer.bind(this);
  }

  componentDidMount() {
    setInterval(this.updateTimer, 1000);
  }

  updateTimer () {
    let currentMoment = moment();

    let daysLeft = moment('2017-12-25 00:00:00').diff(currentMoment, 'days')
    currentMoment.add(daysLeft,'days')

    let HoursLeft = moment('2017-12-25 00:00:00').diff(currentMoment, 'hours')
    currentMoment.add(HoursLeft,'hours')

    let MinutesLeft = moment('2017-12-25 00:00:00').diff(currentMoment, 'minutes')
    currentMoment.add(MinutesLeft,'minutes')

    let SecondsLeft = moment('2017-12-25 00:00:00').diff(currentMoment, 'seconds')
    currentMoment.add(MinutesLeft,'seconds')

    this.setState({
      daysLeft: daysLeft,
      HoursLeft: HoursLeft,
      MinutesLeft: MinutesLeft,
      SecondsLeft: SecondsLeft
    });
  }

  render() {
    return (
      <Row>
        <Col md={10} mdOffset={1}>
          <Panel style={{textAlign:'center'}}>
            <div className="counter">
              <div className="countertop">{this.state.daysLeft}</div>
              <div className="counterbottom">days</div>
            </div>

            <div className="counter">
              <div className="countertop">{this.state.HoursLeft}</div>
              <div className="counterbottom">hours</div>
            </div>

            <div className="counter">
              <div className="countertop">{this.state.MinutesLeft}</div>
              <div className="counterbottom">minutes</div>
            </div>

            <div className="counter">
              <div className="countertop">{this.state.SecondsLeft}</div>
              <div className="counterbottom">seconds</div>
            </div>
          </Panel>
        </Col>
      </Row>
    );
  }
}

export default Countdown;
