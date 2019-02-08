import weeks from './data/weeks';
import contestants from './data/contestants';
import events from './data/events';

// given an event id, get the details
const getEventDetails = id => events.find(e => e.id === id);

// given a contestant id, get the details
const getContestant = id => contestants.find(c => c.id === id);

// given a list of event ids, get thie total value only
const calcScores = ids => ids.reduce((score, id) => score + getEventDetails(id).value, 0);

// given a week and a contestant id, find their scores
const findContestantWeekEvents = (week, id) => {
  const score = week.scores.find(s => s.contestant === id);
  return score ? score.events : [];
};

// filter the contestants by the ones that have been eliminated
const getActiveContestants = () => {
  const lastWeekScores = weeks[weeks.length - 1].scores;
  return lastWeekScores.reduce((acc, data) => {
    if (data.events.indexOf(0) === -1) {
      acc.push(getContestant(data.contestant));
    }
    return acc;
  }, []);
};

// get the contestant details and scores, in detail
export const getContestantDetails = (id) => {
  const weekDetails = weeks
    .filter(week => week.scores.map(s => s.contestant).indexOf(id) > -1)
    .map(week => ({
      id: week.id,
      date: week.date,
      events: findContestantWeekEvents(week, id).map(getEventDetails),
    }))
    .reverse();

  return {
    ...getContestant(id),
    weekDetails,
  };
};

// table data to display ALL the contestant information
export const contestantTable = () => {
  const columns = [
    { id: 1, key: 'name', display: 'Name' },
    { id: 2, key: 'age', display: 'Age' },
    { id: 3, key: 'location', display: 'Location' },
    { id: 4, key: 'occupation', display: 'Occupation' },
  ];

  return { columns, body: contestants };
};

// table data to display contestant scores, for all contestants or active ones
export const contestantScoreTable = (allContestants = false, allWeeks = true) => {
  const nameHeader = { id: 1, key: 'name', display: 'Name' };
  const lastWeek = weeks[weeks.length - 1];

  const getWeekHeader = week => ({
    id: week.id + 1,
    key: `${week.id}_score`,
    display: week.date,
  });

  const columns = !allWeeks
    ? [nameHeader, getWeekHeader(lastWeek)]
    : weeks.reduce((cols, week) => [...cols, getWeekHeader(week)], [nameHeader]);

  const data = allContestants ? contestants : getActiveContestants();

  const body = data.map((contestant) => {
    const scores = weeks.reduce((s, week) => {
      const key = `${week.id}_score`;
      const weekScores = findContestantWeekEvents(week, contestant.id);
      const value = calcScores(weekScores);
      return { ...s, [key]: value };
    }, {});

    return {
      id: contestant.id,
      name: contestant.name,
      image: contestant.image,
      ...scores,
    };
  });

  return { columns, body };
};
