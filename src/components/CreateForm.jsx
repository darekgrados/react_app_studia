import React, { useState, useContext } from "react";
import AppContext from '../data/AppContext';

function CreateForm() {
    const [errors, setErrors] = useState([]);
    const [isSending, setSending] = useState(false);
    const context = useContext(AppContext);
    const dispatch = context.dispatch;

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
    };

    return (
       <form onSubmit={onSubmit}>
        <div className="text-danger">
            {errors.map((e, i) => <p key={i}>{e}</p>)}
        </div>
        <label htmlFor="name">Imię użytkownika</label>
        <input type="text" id="name" name="name" placeholder="Wpisz imię użytkownika" minLength="3" maxLength="40" required />
        
        <label htmlFor="birth">Data urodzenia</label>
        <input type="date" id="birth" name="birth" required />
        
        <label htmlFor="eyes">Kolor oczu użytkownika</label>
        <input type="text" id="eyes" name="eyes" placeholder="Wpisz kolor oczu" minLength="3" maxLength="20" required />
        
        <label htmlFor="rating">Rating użytkownika</label>
        <input type="number" id="rating" name="rating" min="0" max="10" required />

        <button type="submit" className="btn btn-primary mt-3" disabled={isSending}>Zapisz</button>
        <button type="reset" className="btn btn-primary mt-3">Wyczyść</button>
       </form>
    );
}

export default CreateForm;