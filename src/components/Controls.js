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
  showAll,
  onToggleShowAll,
}) => (
  <FormGroup row className={classes.root}>
    <FormControlLabel
      control={
        <Switch checked={showAll} onChange={onToggleShowAll} />
      }
      label="All Contestants"
    />
  </FormGroup>
);

Controls.propTypes = {
  classes: PropTypes.object.isRequired,
  showAll: PropTypes.bool.isRequired,
  onToggleShowAll: PropTypes.func.isRequired,
};

export default withStyles(styles)(Controls);
