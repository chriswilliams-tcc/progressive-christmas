import React, { Component } from 'react';
import {Col, Clearfix, Panel} from 'react-bootstrap';
import moment from 'moment';

const cols = 5;

const renderClearFix = function(day_of_time_week) {
  if (day_of_time_week === cols) {
    return <Clearfix />
  }

  return '';
}

class DayItem extends Component {
  render() {
    let offset = 0;
    let bodyStyles = {minHeight:'100px'};
    let boxStyle = {background: '#0D5411', color: 'white'};
    let day_of_the_week = moment(this.props.item.header).day();

    if (this.props.itempos === 0) {
      offset = 7;
    }

    if (day_of_the_week % cols === 1) {
      offset = 1;
    }

    let content = this.props.item.description;

    if (this.props.item.status === 'closed') {

      let day_before_surprise = moment(this.props.item.header).subtract(Number(this.props.item.show_message_before_days),'day');
      let today = this.props.today;
      // let today = '2018-12-01';


      if(moment(today).isBefore(day_before_surprise)) {
          bodyStyles.filter = 'blur(5px)';
          content = 'This is currently a surprise. Please check back later :)';
      }
    }



    return (
      <div key={this.props.itempos}>
        <Col md={2} mdOffset={offset}>
          <Panel header={moment(this.props.item.header).format('dddd DD')} bsStyle={this.props.item.bsStyle} style={boxStyle}>
            <div style={bodyStyles}>
              {content}
            </div>
          </Panel>
        </Col>

        {renderClearFix(day_of_the_week)}
      </div>
    );
  }
}

export default DayItem;
