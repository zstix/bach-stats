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
  allWeeks,
  onContestantsToggle,
  onWeeksToggle,
}) => (
  <FormGroup row className={classes.root}>
    <FormControlLabel
      control={
        <Switch checked={allContestants} onChange={onContestantsToggle} />
      }
      label="All Contestants"
    />
    <FormControlLabel
      control={
        <Switch checked={allWeeks} onChange={onWeeksToggle} />
      }
      label="All Weeks"
    />
  </FormGroup>
);

Controls.propTypes = {
  classes: PropTypes.object.isRequired,
  allContestants: PropTypes.bool.isRequired,
  allWeeks: PropTypes.bool.isRequired,
  onContestantsToggle: PropTypes.func.isRequired,
  onWeeksToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(Controls);
