import { createCharacterElement } from './components/character';
import './style.css';
import { createElement } from './utils/elements';

const characters = [
  {
    imgSrc: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    origin: {
      name: 'Earth',
    },
  },

  {
    imgSrc: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    origin: {
      name: 'Earth',
    },
  },
];

const headerElement = createElement('header', {
  className: 'header',
  children: [
    createElement('h1', {
      className: 'header__title',
      innerText: 'Rick and Morty',
    }),
    createElement('input', {
      placeholder: 'Enter name',
      className: 'header__input',
    }),
  ],
});

const mainElement = createElement('main', {
  className: 'main',
  children: [
    createElement('section', {
      className: 'main__result',
      children: characters.map(createCharacterElement),
    }),
  ],
});

const footerElement = createElement('footer', {
  className: 'footer',
  children: [
    createElement('a', {
      href: 'https://rickandmortyapi.com/',
      className: 'footer__link',
      innerText: 'API',
      target: '_blank',
    }),
  ],
});

document
  .querySelector('#app')
  .append(headerElement, mainElement, footerElement);
