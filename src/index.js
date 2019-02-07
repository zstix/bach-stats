import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import TopBar from './components/TopBar';
import StatTable from './components/StatTable';

// TODO: add in actual data
const data = [
  { name: 'Zack', age: 32, favColor: 'green' },
  { name: 'Nina', age: 29, favColor: 'blue' },
  { name: 'Alex', age: 26, favColor: 'red' },
];

const App = () => (
  <React.Fragment>
    <CssBaseline />
    <TopBar />
    <StatTable data={data} />
  </React.Fragment>
);

ReactDOM.render(<App />, document.getElementById('app'));
