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
  onlyActive,
  onToggleActive,
}) => (
  <FormGroup row className={classes.root}>
    <FormControlLabel
      control={
        <Switch checked={onlyActive} onChange={onToggleActive} />
      }
      label="Active Only"
    />
  </FormGroup>
);

Controls.propTypes = {
  classes: PropTypes.object.isRequired,
  onlyActive: PropTypes.bool.isRequired,
  onToggleActive: PropTypes.func.isRequired,
};

export default withStyles(styles)(Controls);
