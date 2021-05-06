import './character.css';
import { createElement } from '../utils/elements';

export function createCharacterElement({
  image,
  name,
  status,
  species,
  origin,
  id,
  type,
}) {
  return createElement('div', {
    className: 'character-card',
    children: [
      createElement('img', { className: 'character-card__image', src: image }),
      createElement('article', {
        className: 'character-card__info',
        children: [
          createElement('a', {
            href: `details.html?id=${id}`,
            children: [
              createElement('h2', {
                innerText: name,
              }),
            ],
          }),
          createElement('p', { innerText: `${status} - ${species}` }),
          createElement('p', { innerText: origin.name }),
          createElement('p', { innerText: type }),
        ],
      }),
    ],
  });
}
