import PopoverUi from './popover.ui';
import PopoverController from './popover.controller';

const popoverContainer = document.querySelector('.container');
const popoverBtnTxt = 'Click to toggle popover';
const popoverTitle = 'Popover title';
const popoverTxtContent =
  "And here's some amazing content. It's very engaging. Right?";

const popoverUi = new PopoverUi(popoverBtnTxt, popoverTitle, popoverTxtContent);
popoverUi.bindToDOM(popoverContainer);

const popoverCtrl = new PopoverController(popoverUi);
popoverCtrl.init();
