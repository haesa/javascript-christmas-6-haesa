import { MENU, DRINK } from './constants';

const hasMenu = (menu) => MENU.has(menu);
const hasDrink = (menu) => DRINK.has(menu);

export { hasDrink, hasMenu };
