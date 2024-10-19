import names from "../data/module-data";

const NameItem = ({ name }) => <li key={name}>{name}</li>;

function Lab1Page() {
  return (
    <>
      <h1>Laboratorium 1</h1>
      <ul>
        {names.map((name, i) => (
          <NameItem name={name} id={i} />
        ))}
      </ul>
    </>
  );
}

export default Lab1Page;
