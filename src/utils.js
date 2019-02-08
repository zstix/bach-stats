// import weeks from './data/weeks';
import contestants from './data/contestants';
// import events from './data/events';

export const contestantTable = () => {
  const columns = [
    { id: 1, key: 'name', display: 'Name' },
    { id: 2, key: 'age', display: 'Age' },
    { id: 3, key: 'location', display: 'Location' },
    { id: 4, key: 'occupation', display: 'Occupation' },
  ];
  return { columns, body: contestants };
};

export default {
  contestantTable,
};
