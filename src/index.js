import './index.css';

import Ingredient from "./ingredient";
import Order from "./order";

const order = new Order();
const ingredient = new Ingredient(order.clickCheckbox.bind(order));

let ingredientBlock = document.getElementsByClassName('top')[0];
let orderBlock = document.getElementsByClassName('bottom')[0];

ingredient.mount(ingredientBlock);
order.mount(orderBlock);
