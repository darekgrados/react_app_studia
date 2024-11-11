import React from 'react';
import { data } from '../data/module-data';

function FlexContainer({ element: Element }) {
  return (
    <div className="d-flex justify-content-center flex-wrap mt-3">
      {data.map((item) => (
        <Element key={item.id} {...item} />
      ))}
    </div>
  );
}

export default FlexContainer;
