import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import TopBar from './components/TopBar';
import StatTable from './components/StatTable';

import data from './data/contestants';

const App = () => (
  <React.Fragment>
    <CssBaseline />
    <TopBar />
    <StatTable data={data} />
  </React.Fragment>
);

ReactDOM.render(<App />, document.getElementById('app'));
