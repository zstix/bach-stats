import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

// given an array of event details, get the total
const calcEventTotals = events => events
  .map(e => e.value)
  .reduce((score, value) => value + score, 0);

const DetailsWeek = ({ id, events }) => (
  <React.Fragment>
    <Typography component="span" variant="h6">
      {`Week ${id}: ${calcEventTotals(events)}`}
    </Typography>
    {events.sort((a, b) => a.value - b.value).map(event => (
      <React.Fragment key={`d-w-${id}-e-${event.id}`}>
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
);

DetailsWeek.propTypes = {
  id: PropTypes.number.isRequired,
  events: PropTypes.array.isRequired,
};

export default DetailsWeek;
