import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import TopBar from './components/TopBar';
import Controls from './components/Controls';
import StatTable from './components/StatTable';

import { contestantScoreTable } from './utils';

class App extends React.Component {
  state = {
    onlyActive: true,
  };

  handleToggleActive = () => {
    this.setState({ onlyActive: !this.state.onlyActive });
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
        <StatTable {...data} />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
