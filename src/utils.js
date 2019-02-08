import weeks from './data/weeks';
import contestants from './data/contestants';
import events from './data/events';

// given an event id, get the details
const getEventDetails = id => events.find(e => e.id === id);

// given a list of event ids, get their details
// const getEventList = ids => ids.map(getEventDetails);

// given a list of event ids, get thie total value only
const calcScores = ids => ids.reduce((score, id) => score + getEventDetails(id).value, 0);

// given a week and a contestant id, find their scores
const findContestantWeekEvents = (week, id) => {
  const score = week.scores.find(s => s.contestant === id);
  return score ? score.events : [];
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

// table data to display contestant scores
export const contestantScoreTable = () => {
  const columns = weeks.reduce((cols, week) => ([
    ...cols,
    {
      id: week.id + 1,
      key: `${week.id}_score`,
      display: week.date,
    },
  ]), [
    {
      id: 1,
      key: 'name',
      display: 'Name',
    },
  ]);
  const body = contestants.map((contestant) => {
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
