import { data } from "../data/module-data";

const NameItem = ({ id, name }) => {
  const handleEdit = () => {
    console.log(`Edycja dla ${name}`);
  };

  const handleDelete = () => {
    console.log(`Usuń ${name}`);
  };

  const handleRate = () => {
    console.log(`Oceń ${name}`);
  };

  return (
    <li key={id} className="d-flex justify-content-between align-items-center mb-2">
      <span>{name}</span>
      <div>
        <button onClick={handleEdit} className="btn btn-primary btn-sm me-2">
          Edit
        </button>
        <button onClick={handleDelete} className="btn btn-danger btn-sm me-2">
          Delete
        </button>
        <button onClick={handleRate} className="btn btn-warning btn-sm">
          Rate
        </button>
      </div>
    </li>
  );
};

function Lab1() {
  return (
    <>
      <h1>Laboratorium 1</h1>
      <ul className="list-unstyled">
        {data.map((person) => (
          <NameItem key={person.id} name={person.name} id={person.id} />
        ))}
      </ul>
    </>
  );
}

export default Lab1;
