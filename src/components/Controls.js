import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const styles = {
  root: {
    margin: '2em',
  },
};

const Controls = ({
  classes,
  allContestants,
  onContestantToggle,
}) => (
  <FormGroup row className={classes.root}>
    <FormControlLabel
      control={
        <Switch checked={allContestants} onChange={onContestantToggle} />
      }
      label="All Contestants"
    />
    <FormControlLabel
      control={
        <Switch checked={false} onChange={onContestantToggle} />
      }
      label="All Weeks"
    />
  </FormGroup>
);

Controls.propTypes = {
  classes: PropTypes.object.isRequired,
  allContestants: PropTypes.bool.isRequired,
  onContestantToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(Controls);
