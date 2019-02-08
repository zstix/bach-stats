import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import TopBar from './components/TopBar';
import Controls from './components/Controls';
import StatTable from './components/StatTable';

import { contestantScoreTable, getContestantDetails } from './utils';

class App extends React.Component {
  state = {
    onlyActive: true,
    detailsOpen: false,
  };

  handleToggleActive = () => {
    this.setState({ onlyActive: !this.state.onlyActive });
  };

  handleDetailsClick = (id) => {
    const contestant = getContestantDetails(id);
    console.log('you clicked on', contestant);
  };

  render() {
    const { onlyActive } = this.state;
    const data = contestantScoreTable(onlyActive);

    return (
      <React.Fragment>
        <CssBaseline />
        <TopBar />
        <Controls
          onlyActive={onlyActive}
          onToggleActive={this.handleToggleActive}
        />
        <StatTable
          onDetailsClick={this.handleDetailsClick}
          {...data}
        />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
