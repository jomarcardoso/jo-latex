import { isOverflown } from '../../node_modules/jo-validate/src/is-overflown.js';

const elPages = document.querySelectorAll('.page');

console.log(Array.from(elPages).map((el) => {
  if (isOverflown(el)) {
    const childs = Array.from(el.childNodes);
    el.innerHTML = '';
    childs.forEach((child) => {
      el.appendChild(child)

      if (isOverflown(el)) {
        const el2 = document.createElement('section');
        el.insertBefore(el2,);
      }
    });
  }

  return isOverflown(el);
}));