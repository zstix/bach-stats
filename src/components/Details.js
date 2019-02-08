import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = {
  root: {
    minWidth: 400,
  },
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
          <DialogContentText className={classes.root}>
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
              <React.Fragment>
                <Typography component="span" variant="h6">
                  {`Week ${week.id}: ${week.date}`}
                </Typography>
                {week.events.sort((a, b) => a.value - b.value).map(event => (
                  <React.Fragment>
                    <b>
                      {event.value}
                      {' '}
                    </b>
                    <span>{event.name}</span>
                    <br />
                  </React.Fragment>
                ))}
                <br />
              </React.Fragment>
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
