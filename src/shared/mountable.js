export default class AbstractMountable {
  constructor() {
    this.element = undefined;
  }

  mount(parent) {
    if (!(this.element instanceof HTMLElement)) {
      throw new Error(`Expected this.element to be a HTML element but got ${this.element} `);
    }
      parent.append(this.element);
  }
}

