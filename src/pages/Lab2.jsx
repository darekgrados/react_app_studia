import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../data/module-data'; 

function Lab2() {
  const { id } = useParams();
  const person = data.find((p) => p.id === Number(id));

  return (
    <>
      <h1>Laboratorium 2 - Profil osoby</h1>
      {id ? (
        person ? (
          <div>
            <p>Id: {person.id}</p>
            <p>Imię: {person.name}</p>
            <p>Data urodzenia: {person.birth}</p>
            <p>Kolor oczu: {person.eyes}</p>
          </div>
        ) : (
          <span>Nie znaleziono osoby o tym identyfikatorze.</span>
        )
      ) : (
        <span>Brak identyfikatora osoby.</span>
      )}
    </>
  );
}

export default Lab2;