import React, { useContext, useReducer } from 'react';
import AppReducer from '../data/AppReducer';

function FlexContainer({ element: Element }) {
    //const [items, dispatch] = useReducer(AppReducer, data);
    const context = useContext(AppContext);
    const dispatch = context.dispatch;
    const data = context.items;

    return (
        <div className="d-flex justify-content-center flex-wrap mt-3">
            {data.map((item) => (
                <Element key={item.id} {...item} />
            ))}
        </div>
    );
}

export default FlexContainer;