import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  image: {
    display: 'inline',
    marginRight: '1em',
    width: '2.5em',
    height: '2.5em',
    borderRadius: '50%',
    verticalAlign: 'middle',
  },
});

const StatTable = ({
  classes,
  columns,
  body,
  onDetailsClick,
}) => (
  <Paper className={classes.root}>
    <Table>
      <TableHead>
        <TableRow>
          {columns.map(col => (
            <TableCell
              key={`h-${col.id}`}
              {...(col.id !== 1 ? { align: 'right' } : {})}
              className={classes.nameCol}
            >
              {col.display}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {body.map(row => (
          <TableRow key={`b-${row.id}`}>
            {columns.map(col => (
              <TableCell
                key={`b-${row.id}-c-${col.id}`}
                {...(col.id !== 1 ? { align: 'right' } : {})}
                onClick={col.key === 'name' ? () => onDetailsClick(row.id) : () => {}}
              >
                {col.key === 'name' && (
                  <img className={classes.image} src={row.image} />
                )}
                {row[col.key]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

StatTable.propTypes = {
  classes: PropTypes.object.isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  body: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDetailsClick: PropTypes.func,
};

export default withStyles(styles)(StatTable);
