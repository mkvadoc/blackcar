import React, { Component } from 'react';

import Modal from '../../components/Modal/Modal';
import Backdrop from '../../components/Backdrop/Backdrop';

class CarsPage extends Component {
  state = {
    creating: false
  };

  startCreateCarHandler = () => {
    this.setState({ creating: true });
  };

  modalConfirmHandler = () => {
    this.setState({ creating: false });
  };

  modalCancelHandler = () => {
    this.setState({ creating: false });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.creating && <Backdrop />}
        {this.state.creating && (
          <Modal
            title="Add Car"
            canCancel
            canConfirm
            onCancel={this.modalCancelHandler}
            onConfirm={this.modalConfirmHandler}
          >
            <p>Modal Content</p>
          </Modal>
        )}
        <div className="cars-control">
          <p>Share your own Cars!</p>
          <button className="btn" onClick={this.startCreateCarHandler}>
            Add Car
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default CarsPage;