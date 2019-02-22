import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Mobile from 'is-mobile';

import TopBar from './components/TopBar';
import Controls from './components/Controls';
import StatTable from './components/StatTable';
import Details from './components/Details';

import { contestantScoreTable, getContestantDetails } from './utils';

const getTableData = (allContestants, allWeeks) => contestantScoreTable(allContestants, allWeeks);

const App = () => {
  const [allContestants, setContestants] = useState(false);
  const [allWeeks, setWeeks] = useState(!Mobile());
  const [details, setDetails] = useState(false);

  const tableData = getTableData(allContestants, allWeeks);

  return (
    <React.Fragment>
      <CssBaseline />
      <TopBar />
      <Controls
        allContestants={allContestants}
        onContestantsToggle={() => setContestants(!allContestants)}
        allWeeks={allWeeks}
        onWeeksToggle={() => setWeeks(!allWeeks)}
      />
      <StatTable
        onDetailsClick={id => setDetails(getContestantDetails(id))}
        {...tableData}
      />
      <Details
        open={Boolean(details)}
        onCloseClick={() => setDetails(false)}
        contestant={details}
      />
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
