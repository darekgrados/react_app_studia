import React from 'react';
import FlexContainer from '../components/FlexContainer';
import { Card } from 'react-bootstrap';

const data = [
  { name: "Ala", id: 1 },
  { name: "Ela", id: 2 },
  { name: "Karol", id: 3 },
  { name: "Ola", id: 4 },
  { name: "Monika", id: 5 },
  { name: "Robert", id: 6 },
];

const Item = ({ name, id }) => (
  <Card style={{ width: '18rem' }} className="border mb-3 p-3 ms-3" key={id}>
    {name}
  </Card>
);

const Lab3Page = () => {
  return (
    <>
      <h1>Laboratorium 3</h1>
      <FlexContainer element={Item} data={data} />
    </>
  );
};

export default Lab3Page;

