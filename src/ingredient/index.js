import AbstractMountable from "../shared/mountable";
import {createCheckboxItems} from "../shared/utils";
import {BASE, LIST_COUNT_LIMIT, MEAT, SAUCE, VEGETABLES} from "../constants";
import "./index.css";

export default class Ingredient extends AbstractMountable {
    constructor(clickHandler) {
        super();

        const wrapper = document.createElement('div');
        wrapper.classList.add('pizza-constructor');

        const checkBoxBase = createCheckboxItems('база', 'base', BASE);
        checkBoxBase.addEventListener('change', (event) => {
            clickHandler(event);
            this.checkCheckbox('base', LIST_COUNT_LIMIT.BASE);
        });

        const checkBoxMeat = createCheckboxItems('мясо', 'meat', MEAT);
        checkBoxMeat.addEventListener('change', (event) => {
            clickHandler(event);
            this.checkCheckbox('meat', LIST_COUNT_LIMIT.MEAT);
        });

        const checkBoxVegetables = createCheckboxItems('овощи', 'vegetables', VEGETABLES);
        checkBoxVegetables.addEventListener('change', (event) => {
            clickHandler(event);
            this.checkCheckbox('vegetables', LIST_COUNT_LIMIT.VEGETABLES);
        });

        const checkBoxSauce = createCheckboxItems('соус', 'sauce', SAUCE);
        checkBoxSauce.addEventListener('change', (event) => {
            clickHandler(event);
            this.checkCheckbox('sauce', LIST_COUNT_LIMIT.SAUCE);
        });

        wrapper.append(checkBoxBase);
        wrapper.append(checkBoxMeat);
        wrapper.append(checkBoxVegetables);
        wrapper.append(checkBoxSauce);

        this.element = wrapper;
    }

    // делает disable если выбрано определенное количество чекбоксов
    checkCheckbox(category, countLimit) {
        let checkboxes = document.getElementsByName(category);
        let counter = 0;

        checkboxes.forEach((node) => {
            if (node.checked)
                counter++;
        })

        if (counter >= countLimit) {
            checkboxes.forEach((node) => {
                if (!node.checked)
                    node.disabled = true;
            })
        } else {
            checkboxes.forEach((node) => {
                node.disabled = false;
            })
        }
    }
}