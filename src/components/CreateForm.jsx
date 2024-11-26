import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from '../data/AppContext';

function CreateForm() {
    const [errors, setErrors] = useState([]);
    const [isSending, setSending] = useState(false);
    const context = useContext(AppContext);
    const dispatch = context.dispatch;
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const newErrors = [];

        if (data.get("name").charAt(0) !== data.get("name").charAt(0).toUpperCase()) {
            newErrors.push("Nazwa użytkownika musi zaczynać się od wielkiej litery");
        }

        if (newErrors.length > 0) {
            setErrors(newErrors);
            return;
        }

        setSending(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        dispatch({
            type: "add",
            data: {
                id: Date.now(),
                name: data.get("name"),
                birth: data.get("birth"),
                eyes: data.get("eyes"),
                rating: Number(data.get("rating"))
            }
        });
        setSending(false);

        for (let key of data.keys()) {
            e.target[key].value = "";
        }

        navigate("/laboratorium1", { replace: true }); // Navigate back to Lab1 after adding without refreshing
    };

    return (
       <form onSubmit={onSubmit} className="p-3 border rounded">
        <div className="text-danger">
            {errors.map((e, i) => <p key={i}>{e}</p>)}
        </div>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Imię użytkownika</label>
            <input type="text" id="name" name="name" className="form-control" placeholder="Wpisz imię użytkownika" minLength="3" maxLength="40" required />
        </div>
        <div className="mb-3">
            <label htmlFor="birth" className="form-label">Data urodzenia</label>
            <input type="date" id="birth" name="birth" className="form-control" required />
        </div>
        <div className="mb-3">
            <label htmlFor="eyes" className="form-label">Kolor oczu użytkownika</label>
            <input type="text" id="eyes" name="eyes" className="form-control" placeholder="Wpisz kolor oczu" minLength="3" maxLength="20" required />
        </div>
        <div className="mb-3">
            <label htmlFor="rating" className="form-label">Rating użytkownika</label>
            <input type="number" id="rating" name="rating" className="form-control" min="0" max="10" required />
        </div>
        <button type="submit" className="btn btn-primary mt-3" disabled={isSending}>Zapisz</button>
        <button type="reset" className="btn btn-secondary mt-3 ms-2">Wyczyść</button>
       </form>
    );
}

export default CreateForm;