import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import DetailsWeek from './DetailsWeek';

const styles = {
  image: {
    width: '4.5em',
    height: '4.5em',
    borderRadius: '50%',
    float: 'left',
    marginRight: '1em',
  },
};

const Details = ({
  classes,
  open,
  onCloseClick,
  contestant,
}) => (
  <div>
    {contestant && (
      <Dialog
        open={open}
        onClose={onCloseClick}
        scroll="paper"
        aria-labelledby="details-title"
      >
        <DialogTitle id="details-title">{contestant.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <img className={classes.image} src={contestant.image} />
            <b>Age: </b>
            <span>{contestant.age}</span>
            <br />
            <b>Location: </b>
            <span>{contestant.location}</span>
            <br />
            <b>Occupation: </b>
            <span>{contestant.occupation}</span>
            <br />
            <br />

            {contestant.weekDetails.map(week => (
              <DetailsWeek key={`d-w-${week.id}`} {...week} />
            ))}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCloseClick} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    )}
  </div>
);

Details.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  onCloseClick: PropTypes.func.isRequired,
  contestant: PropTypes.any,
};

export default withStyles(styles)(Details);
