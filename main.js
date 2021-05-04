import './style.css';
import { createElement } from './utils/elements';

const mainElement = createElement('main', {
  className: 'main',
  children: [
    createElement('input', { placeholder: 'Enter name' }),
    createElement('section', { innerText: 'Results' }),
  ],
});

document.querySelector('#app').append(mainElement);
