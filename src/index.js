import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Mobile from 'is-mobile';

import TopBar from './components/TopBar';
import Controls from './components/Controls';
import StatTable from './components/StatTable';
import Details from './components/Details';

import { contestantScoreTable, getContestantDetails } from './utils';

const getTableData = (allContestants, allWeeks) => {
	return contestantScoreTable(allContestants, allWeeks);
};

class App extends React.Component {
	constructor() {
		super();

		const allContestants = false;
		const allWeeks = !Mobile();
		const tableData = getTableData(allContestants, allWeeks);

		this.state = {
			allContestants,
			allWeeks,
			tableData,
			details: false,
		};
	};

  toggleContestants() {
		const allContestants = !this.state.allContestants;
		const tableData = getTableData(allContestants, this.state.allWeeks);
    this.setState({ allContestants, tableData });
  };

  toggleWeeks() {
		const allWeeks = !this.state.allWeeks;
		const tableData = getTableData(this.state.allContestants, allWeeks);
    this.setState({ allWeeks, tableData });
  };

  handleCloseDetails() {
    this.setState({ details: false });
  }

  handleDetailsClick = (id) => {
    this.setState({ details: getContestantDetails(id) });
  };

  render() {
    const { allContestants, allWeeks, details, tableData } = this.state;

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
          {...tableData}
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
