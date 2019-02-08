import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import TopBar from './components/TopBar';
import Controls from './components/Controls';
import StatTable from './components/StatTable';
import Details from './components/Details';

import { contestantScoreTable, getContestantDetails } from './utils';

class App extends React.Component {
  state = {
    onlyActive: true,
    details: false,
  };

  handleToggleActive() {
    this.setState({ onlyActive: !this.state.onlyActive });
  };

  handleCloseDetails() {
    this.setState({ details: false });
  }

  handleDetailsClick = (id) => {
    this.setState({ details: getContestantDetails(id) });
  };

  render() {
    const { onlyActive, details } = this.state;
    const data = contestantScoreTable(onlyActive);

    return (
      <React.Fragment>
        <CssBaseline />
        <TopBar />
        <Controls
          onlyActive={onlyActive}
          onToggleActive={() => this.handleToggleActive()}
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
