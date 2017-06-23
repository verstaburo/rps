const { $ } = window;

function indexScroll() {
  const block = $('.index');

  if (!block.length) {
    return;
  }

  const vH = $(window).height();
  const header = $('.header');
  const actions = block.find('.actions-header');
  const content = block.find('.index__table');

  content.height(vH - header.outerHeight() - actions.outerHeight());
}

$(window).on('resize', indexScroll);

export default () => {
  const index = $('.index');

  if (!index.length) {
    return;
  }

  indexScroll();
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
