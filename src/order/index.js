import AbstractMountable from "../shared/mountable";
import {BASE, LIST, MEAT, SAUCE, VEGETABLES} from "../constants";
import "./index.css";

export default class Order extends AbstractMountable {
  constructor() {
    super();

    this.totalPrice = 0;
    this.totalOrder = {base: [], meat: [], vegetables: [], sauce: []};

    this.element = document.createElement('div');

    let btn = document.getElementsByClassName('confirm-btn')[0];
    btn.addEventListener('click', () => {
      this.confirmOrder();
    })
  }

  clickCheckbox(event) {
    const item = this.getItemByNameAndGroup(event.target.name, event.target.value);

    if (event.target.checked) {
      this.totalPrice += item.price;
      this.addIngredient(event.target.name, item);
    } else {
      this.totalPrice -= item.price;
      this.removeIngredient(event.target.name, item);
    }

    this.setTotalPriceView(this.totalPrice.toFixed(2));
    this.setIngredients();
    this.setPizzaImage();
  }

  getItemByNameAndGroup(category, name) {
    let res;

    switch (category) {
      case LIST.BASE: {
        res = BASE.find(item => item.id === name);
				break;
      }
      case LIST.MEAT: {
        res = MEAT.find(item => item.id === name);
        break;
      }
      case LIST.VEGETABLES: {
        res = VEGETABLES.find(item => item.id === name);
        break;
      }
      case LIST.SAUCE: {
        res = SAUCE.find(item => item.id === name);
        break;
      }
    }
  return res;
  }

  addIngredient(category, item) {
    this.totalOrder[category].push(item);
  }

  removeIngredient(category, item) {
    this.totalOrder[category] = this.totalOrder[category].filter(s => s.id !== item.id);
  }

  setTotalPriceView(price) {
    let totalPrice = document.getElementsByClassName('totalPrice')[0];
    totalPrice.innerText = price;
  }

  setIngredients() {
    let ingredient = document.getElementsByClassName('ingredient')[0];
    ingredient.innerHTML = '';

    Object.keys(this.totalOrder).forEach(key => {
      if (this.totalOrder[key].length > 0) {
        this.totalOrder[key].forEach(item => {
          const p = document.createElement('p');
          p.classList.add(key + '-' + item.id);
          p.innerText = item.text;
          ingredient.append(p);
        })
      }
    });
  }

    setPizzaImage() {
      let count = 0;
      Object.keys(this.totalOrder).forEach(key => {
        if (this.totalOrder[key].length > 0) count++;
      });

      let square = document.getElementsByClassName('square');

      for (let i = 0; i < square.length; i++) {
        if (i < count)
          square[i].classList.add('opacity');
        else
          square[i].classList.remove('opacity');
      }

      let btn = document.getElementsByClassName('confirm-btn')[0];
        btn.disabled = count !== 4;
    }

    confirmOrder() {
      console.log(this.totalOrder);
      alert('Ваш заказ на сумму ' + this.totalPrice + '$ успешно сформирован! Го за пивком');
    }
}