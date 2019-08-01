import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '../../components/Button';

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 4),
    outline: 'none',
  },
});

class SimpleModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  rand() {
    return Math.round(Math.random() * 20) - 10;
  }

  getModalStyle() {
    const top = 50;
    const left = 50;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  handleOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    // eslint-disable-next-line react/prop-types
    const { classes } = this.props;
    return (
      <div>
        <Button type="button" onClick={() => this.handleOpen()}>
          Add To The List
        </Button>
        <Modal
          className="modal"
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={() => this.handleClose()}
        >
          <div
            style={{
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%)`,
            }}
            className={classes.paper}
          >
            <h2 id="modal-title">Text in a modal</h2>
            <p id="simple-modal-description">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>
          </div>
        </Modal>
      </div>
    );
  }
}
SimpleModal.protoTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(withStyles(styles, { name: 'AddTranslation' }))(
  SimpleModal,
);
