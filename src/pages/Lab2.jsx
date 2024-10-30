import React from 'react';
import { useParams } from 'react-router-dom';

function Lab2() {
  const { id } = useParams();

  return (
    <>
      <h1>Laboratorium 2</h1>
      <p>Identyfikator osoby: {id}</p>
    </>
  );
}

export default Lab2;