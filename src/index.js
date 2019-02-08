import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Mobile from 'is-mobile';

import TopBar from './components/TopBar';
import Controls from './components/Controls';
import StatTable from './components/StatTable';
import Details from './components/Details';

import { contestantScoreTable, getContestantDetails } from './utils';

class App extends React.Component {
  state = {
    allContestants: false,
    allWeeks: !Mobile(),
    details: false,
  };

  toggleContestants() {
    this.setState({ allContestants: !this.state.allContestants });
  };

  toggleWeeks() {
    this.setState({ allWeeks: !this.state.allWeeks });
  };

  handleCloseDetails() {
    this.setState({ details: false });
  }

  handleDetailsClick = (id) => {
    this.setState({ details: getContestantDetails(id) });
  };

  render() {
    const { allContestants, allWeeks, details } = this.state;
    const data = contestantScoreTable(allContestants, allWeeks);

    return (
      <React.Fragment>
        <CssBaseline />
        <TopBar />
        <Controls
          allContestants={allContestants}
          onContestantsToggle={() => this.toggleContestants()}
          allWeeks={allWeeks}
          onWeeksToggle={() => this.toggleWeeks()}
        />
        <StatTable
          onDetailsClick={this.handleDetailsClick}
          {...data}
        />
        <Details
          open={Boolean(details)}
          onCloseClick={() => this.handleCloseDetails()}
          contestant={details}
        />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
