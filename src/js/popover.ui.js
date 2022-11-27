export default class Popover {
  constructor(popoverBtnTxt, popoverTitle, popoverTxtContent) {
    this.container = null;
    this.popoverBtnTxt = popoverBtnTxt;
    this.popoverTitle = popoverTitle;
    this.popoverTxtContent = popoverTxtContent;
  }

  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error();
    }
    this.container = container;
  }

  drawUi() {
    const btnEl = document.createElement('button');
    btnEl.type = 'button';
    btnEl.classList.add('button');
    btnEl.textContent = this.popoverBtnTxt;
    this.container.append(btnEl);
    this.btn = btnEl;
  }

  showPopover() {
    const popoverEl = document.createElement('div');
    popoverEl.classList.add('popover');

    const popoverHeader = document.createElement('h2');
    popoverHeader.classList.add('popover-header');
    popoverHeader.textContent = this.popoverTitle;
    popoverEl.append(popoverHeader);

    const popoverBody = document.createElement('p');
    popoverBody.classList.add('popover-content');
    popoverBody.textContent = this.popoverTxtContent;
    popoverEl.append(popoverBody);

    const popoverTooltip = document.createElement('div');
    popoverTooltip.classList.add('popover-attach');
    popoverEl.append(popoverTooltip);

    this.container.prepend(popoverEl);
    popoverEl.style.top = `${this.btn.offsetTop - popoverEl.offsetHeight}px`;
    popoverEl.style.left = `${
      this.btn.offsetLeft + this.btn.offsetWidth / 2 - popoverEl.offsetWidth / 2
    }px`;
  }

  removePopover() {
    const popoverEl = this.container.querySelector('.popover');
    if (popoverEl) {
      popoverEl.remove();
    }
  }
}
