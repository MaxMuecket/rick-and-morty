import styles from './characterDetails.module.css';
import { createElement } from '../utils/elements';

export function createCharacterDetails({
  image,
  name,
  status,
  species,
  origin,
  gender,
  location,
}) {
  return createElement('div', {
    className: styles.characterDetails,
    children: [
      createElement('img', {
        className: styles.characterDetails__image,
        src: image,
      }),
      createElement('article', {
        className: styles.characterDetails__info,
        children: [
          createElement('h2', {
            innerText: name,
          }),
          createElement('p', { innerText: status }),
          createElement('p', { innerText: species }),
          createElement('p', { innerText: origin.name }),
          createElement('p', { innerText: gender }),
          createElement('p', { innerText: location.name }),
        ],
      }),
    ],
  });
}
