import React, { Component } from 'react';
import {Col, Clearfix, Panel} from 'react-bootstrap';

const cols = 5;

const renderClearFix = function(count) {
  if (count % cols === 0) {
    return <Clearfix />
  }

  return '';
}

class DayItem extends Component {
  render() {
    let offset = 0;
    let bodyStyles = {minHeight:'100px'};

    if (this.props.itempos === 0) {
      offset = 9;
    }

    if (this.props.itempos % cols === 1) {
      offset = 1;
    }

    if (this.props.item.status === 'closed') {
      bodyStyles.filter = 'blur(5px)';
    }

    return (
      <div key={this.props.itempos}>
        <Col md={2} mdOffset={offset}>
          <Panel header={this.props.item.header} bsStyle={this.props.item.bsStyle}>
            <div style={bodyStyles}>
              {this.props.item.description}
            </div>
          </Panel>
        </Col>

        {renderClearFix(this.props.itempos)}
      </div>
    );
  }
}

export default DayItem;
