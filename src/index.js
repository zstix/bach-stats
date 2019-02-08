import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import TopBar from './components/TopBar';
import StatTable from './components/StatTable';

import { contestantTable } from './utils';

const App = () => (
  <React.Fragment>
    <CssBaseline />
    <TopBar />
    <StatTable {...contestantTable()} />
  </React.Fragment>
);

ReactDOM.render(<App />, document.getElementById('app'));
