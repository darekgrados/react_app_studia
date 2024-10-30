import React from 'react';
import wsei from '../assets/wsei-logo.png';

const Footer = () => {
  return (
    <footer className="text-center py-3 mt-auto bg-light">
      <div>
        <img src={wsei} alt="Logo Uczelni" width="50" />      
        <p className="mt-2">Autor: Dariusz Gradoś - dariusz.grados@microsoft.wsei.edu.pl</p>
      </div>
    </footer>
  );
};

export default Footer;