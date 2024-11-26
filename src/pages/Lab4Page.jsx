import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Lab4Page() {
    const navigate = useNavigate();
    const [editId, setEditId] = useState("");

    const handleEdit = () => {
        if (editId) {
            navigate(`/lab4/edit/${editId}`);
        }
    };

    return (
        <div>
            <button className="btn btn-primary" onClick={() => navigate("/lab4/add")}>Dodaj</button>

            <br></br>
            <br></br>

            <input
                type="text"
                placeholder="Podaj ID do edycji"
                value={editId}
                onChange={(e) => setEditId(e.target.value)}
                className="form-control mb-2"
            />
            <button className="btn btn-primary" onClick={handleEdit}>Edytuj</button>
        </div>
    );
}

export default Lab4Page;
