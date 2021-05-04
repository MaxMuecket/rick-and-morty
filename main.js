import './style.css';
import { createElement } from './utils/elements';

const headerElement = createElement('header', {
  className: 'header',
  children: [
    createElement('h1', {
      className: 'header__title',
      innerText: 'Rick and Morty',
    }),
    createElement('input', {
      placeholder: 'Enter name',
      className: 'main__input',
    }),
  ],
});

const mainElement = createElement('main', {
  className: 'main',
  children: [
    createElement('section', {
      innerText: 'Results',
      className: 'main__result',
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
