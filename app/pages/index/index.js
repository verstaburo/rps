export default () => {
  const { $ } = window;
  const index = $('.index');

  if (!index.length) {
    return;
  }

  const actionsSelected = $('.js-index-actions-selected');
  const actionsDefault = $('.js-index-actions-default');
  const countBtn = $('.js-index-actions-count');

  if (!actionsDefault.length || !actionsSelected.length || !countBtn.length) {
    return;
  }

  const toggleActions = (delay) => {
    const selectetCheckboxesCount = index.find('.table .checkbox__input:checked').length;

    if (selectetCheckboxesCount && actionsDefault.is(':visible')) {
      actionsDefault.fadeOut(delay, () => {
        actionsSelected.fadeIn(delay);
      });
    }

    if (!selectetCheckboxesCount && actionsSelected.is(':visible')) {
      actionsSelected.fadeOut(delay, () => {
        actionsDefault.fadeIn(delay);
      });
    }

    countBtn.children().last().text(selectetCheckboxesCount);
  };

  toggleActions(0);

  index
    .on('change', '.table .checkbox__input', () => {
      toggleActions(250);
    })
    .on('click', '.js-index-actions-count', (e) => {
      e.preventDefault();
      index
        .find('.table .checkbox__input')
        .prop('checked', false)
        .trigger('change');
    });
};
