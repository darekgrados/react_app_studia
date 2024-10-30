import { data } from "../data/module-data";

const NameItem = ({ id, name }) => <li key={id}>{name}</li>;

function Lab1() {
  return (
    <>
      <h1>Laboratorium 1</h1>
      <ul>
        {data.map((person, i) => (
          <NameItem name={person.name} id={person.id} key={i} />
        ))}
      </ul>
    </>
  );
}

export default Lab1;