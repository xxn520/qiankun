import React from 'react';
import { Button } from '@muya-ui/core';

export default class HelloModal extends React.Component {

  constructor() {
    super();
    this.state = {
      visible: false,
    };
    this.setVisible = visible => this.setState({ visible });
  }

  render() {
    return (
      <div>
        <Button onClick={() => this.setVisible(true)}>
          CLICK ME
        </Button>
      </div>
    );
  }
}
