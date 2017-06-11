import $ from 'jquery';

export default () => {
  const COMPONENT = '.ts-list';
  const ACTION_BTN = '.ts-list__action';
  const EDIT_BTN = 'ts-list__action_edit';
  const SAVE_BTN = 'ts-list__action_save';
  const REMOVE_BTN = 'ts-list__action_remove';
  const ROW = '.ts-list__row';
  const ROW_STATE_EDITING = 'ts-list__row_editing';
  const INPUT = '.input';
  const INPUT_DEFAULT_STATE = 'input_text-like';

  const component = $(COMPONENT);

  if (!component.length) {
    return;
  }

  // component events delegation
  component.on('click', ACTION_BTN, function (e) { // eslint-disable-line func-names
    e.preventDefault();
    const btn = $(this);
    const row = btn.parents(ROW);

    // make row editable
    if (btn.hasClass(EDIT_BTN)) {
      row
        .addClass(ROW_STATE_EDITING)
        .find(INPUT)
        .removeClass(INPUT_DEFAULT_STATE);
    }

    // save changes via ajax, and remove editable class from row
    if (btn.hasClass(SAVE_BTN)) {
      // the code should be in ajax success callback
      row
        .removeClass(ROW_STATE_EDITING)
        .find(INPUT)
        .addClass(INPUT_DEFAULT_STATE);
    }

    // remove TS via ajax, and remove current node
    if (btn.hasClass(REMOVE_BTN)) {
      // the code should be in ajax success callback
      row.fadeOut(250, () => {
        row.remove();
      });
    }
  });
};
