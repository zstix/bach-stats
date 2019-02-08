import weeks from './data/weeks';
import contestants from './data/contestants';
// import events from './data/events';

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
    const scores = weeks.reduce((s, week) => ({
      ...s,
      [`${week.id}_score`]: 0,
    }), {});
    return {
      id: contestant.id,
      name: contestant.name,
      image: contestant.image,
      ...scores,
    };
  });
  return { columns, body };
};
