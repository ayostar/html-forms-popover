import PopoverUi from '../popover.ui';

const popoverContainer = 'not a container';
const popoverBtnTxt = 'test';
const popoverTitle = 'test';
const popoverTxtContent = 'test?';

test('should throw error if not a container passed to draw UI', () => {
  const expected = 'HTMLElement is not defined';
  const popoverUi = new PopoverUi(
    popoverBtnTxt,
    popoverTitle,
    popoverTxtContent,
  );
  const received = () => popoverUi.bindToDOM(popoverContainer);
  expect(received).toThrow(expected);
});
