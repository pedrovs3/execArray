'use strict';

// Importação no js web
import { createDiv } from './criadiv.js';
const div = createDiv();

// Separando o elemento do array e criando a div para fazer o card
const createHero = (text) => {
  text = text.replace(/(.)/, '<h2>$1');
  text = text.replace('-', '</h2>');
  const divHero = document.createElement('div');
  divHero.classList.add('card');
  divHero.innerHTML = `
    ${text}
    `;
  div.appendChild(divHero);
};

// Exportação da função
export { createHero };
