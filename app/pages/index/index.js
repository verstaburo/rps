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

// checkboxes
// eslint-disable-next-line
// table.on('change', '.checkbox__input', function () { // eslint-disable-line func-names, consistent-return

  // // if the row is the first one, then check/uncheck all children checkboxes
  // const isFirstParentCheckbox = row
  //   .parent()
  //   .parent()
  //   .hasClass('table');
  //
  // if (isFirstParentCheckbox) {
  //   row
  //     .parent()
  //     .find('.table__row_children')
  //     .find('.checkbox__input')
  //     .prop('checked', checkbox.prop('checked'))
  //     .trigger('change', ['fromParent']);
  // }
  //
  // // make no sense to check childrens state, if it was changed on parent checkbox
  // if (data && data === 'fromParent') {
  //   return; // eslint-disable-line consistent-return
  // }
  //
  // const parentRow = row
  //   .parents('.table__row_parent')
  //   .last();
  //
  // const parentCheckbox = parentRow
  //   .children()
  //   .eq(0)
  //   .find('.checkbox__input');
  //
  // const childrenCheckboxes = parentRow
  //   .find('.table__row_children')
  //   .find('.checkbox__input')
  //   .toArray()
  //   .map(el => el.checked);
  //
  // // if childrens are selected, then mark parent as checked
  // if (childrenCheckboxes.every(item => item)) {
  //   return parentCheckbox // eslint-disable-line consistent-return
  //     .prop('checked', true)
  //     .prop('indeterminate', false);
  // }
  // // if childrens aren't selected, then mark parent as unchecked
  // if (childrenCheckboxes.every(item => !item)) {
  //   return parentCheckbox // eslint-disable-line consistent-return
  //     .prop('checked', false)
  //     .prop('indeterminate', false);
  // }
  // // otherwise mark parent as indeterminate
  // parentCheckbox
  //   .prop('checked', false)
  //   .prop('indeterminate', true);
// });
};
