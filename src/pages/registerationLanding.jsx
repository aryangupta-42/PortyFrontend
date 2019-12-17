import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import RegForm from '../components/landingRegForm';

import '../style/regLanding.css';

const styles = {
  rootRegNav: {
    flexGrow: 1,
    maxWidth: 400,
    margin: 'auto',
    marginTop: '40px',
  },
  button: {
    width: '200px',
    height: '55px',
    marginTop: '33px',
    textAlign: 'center',
    borderRadius: '10px',
  },
  rootRegPage: {
    margin: 'auto',
    marginTop: '40px',
    minWidth: '570px',
    textAlign: 'left',
    width: '65%',
    minHeight: '240px', // 328px
    paddingBottom: '30px',
  },
};
function TabContainer(props) {
  const { children } = props;
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};


class IconLabelTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      openDial: false,
      message: '',
    };
    this.handleClose = this.handleClose.bind(this);
    this.openDial = this.openDial.bind(this);
  }

  handleClose() {
    this.setState({
      openDial: false,
    });
  }

  openDial(mess) {
    this.setState({
      openDial: true,
      message: mess,
    });
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div style={{ textAlign: 'center' }}>
        <div className="title">
            Register
        </div>
        <Paper className={classes.rootRegPage}>
          {value === 0 && (
            <TabContainer>
              {' '}
              <RegForm handleDial={this.openDial} />
              {' '}
            </TabContainer>
          )}
        </Paper>
        <Button variant="contained" color="secondary" className={classes.button} type="submit" form="regform">
          Let's Go
        </Button>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.openDial}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{this.state.message}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}

IconLabelTabs.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(IconLabelTabs);
