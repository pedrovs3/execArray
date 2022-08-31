'use strict';

const createDiv = () => {
  const main = document.querySelector('main');
  const div = document.createElement('div');
  div.classList.add('cards-container');
  main.appendChild(div);
  return div;
};

export { createDiv };
