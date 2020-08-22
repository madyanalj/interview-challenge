import { __api_base__ } from '../config';

export const fetchItems = () => fetch(`${__api_base__}/items`)
  .then((response) => response.json())
  .then(({ items }) => items);
