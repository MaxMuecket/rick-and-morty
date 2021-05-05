import { createCharacterElement } from './components/character';
import './style.css';
import { createElement, removeAllChildren } from './utils/elements';
import { getCharacters } from './utils/api';

const characterSection = createElement('section', {
  className: 'results',
});

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
      autofocus: true,
      oninput: (event) => {
        removeAllChildren(characterSection);

        const search = event.target.value;
        getCharacters(search).then((characters) => {
          const characterElements = characters.map(createCharacterElement);
          characterSection.append(...characterElements);
        });
      },
    }),
  ],
});

const mainElement = createElement('main', {
  className: 'main',
  children: [characterSection],
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
