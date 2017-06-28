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

  // init checkboxes
  $('.js-index-checkbox .checkbox__input').each(function () { // eslint-disable-line func-names
    const el = $(this);
    const checked = el.attr('checked') ? 1 : 0;
    el.data('checked', checked);
  });

  const toggleActions = (delay) => {
    const selectetCheckboxesCount = index.find('.table .checkbox__input')
      .filter(function () { // eslint-disable-line func-names
        const el = $(this);
        return el.prop('checked') || el.prop('indeterminate');
      }).length;

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
    .on('click', '.js-index-checkbox', function (e) { // eslint-disable-line func-names
      const checkbox = $(this).find('.checkbox__input');
      const row = checkbox.parents('.table__row_main');
      const isParent = row.next().hasClass('table__row_children');

      if (!isParent) {
        return;
      }

      e.preventDefault();

      switch (checkbox.data('checked')) {
        // unchecked, going indeterminate
        case 0:
          checkbox.data('checked', 1);
          checkbox.prop('indeterminate', true);
          break;

        // indeterminate, going checked
        case 1:
          checkbox.data('checked', 2);
          checkbox.prop('indeterminate', false);
          checkbox.prop('checked', true);
          break;

        // checked, going unchecked
        default:
          checkbox.data('checked', 0);
          checkbox.prop('indeterminate', false);
          checkbox.prop('checked', false);
      }

      checkbox.trigger('change');
    })
    .on('change', '.js-index-checkbox .checkbox__input', function () { // eslint-disable-line func-names
      toggleActions(250);

      const checkbox = $(this);
      const row = checkbox.parents('.table__row_main');
      // add selected class to the parent table__row_main, if checkbox is checked or indeterminate
      row.toggleClass('table__row_selected', checkbox.prop('checked') || checkbox.prop('indeterminate'));

      // if it's parent checkbox
      const isParent = row.next().hasClass('table__row_children');

      if (isParent) {
        row
          .next()
          .find('.js-index-checkbox .checkbox__input')
          .prop('checked', checkbox.prop('checked'))
          .trigger('change');
      }
    })
    .on('click', '.js-index-actions-count', (e) => {
      e.preventDefault();
      index
        .find('.js-index-checkbox .checkbox__input')
        .prop('checked', false);
    });
};
