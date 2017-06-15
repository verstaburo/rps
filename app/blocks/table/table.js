import $ from 'jquery';

export default () => {
  const table = $('.table');

  if (!table.length) {
    return;
  }

  // checkboxes
  table.on('change', '.checkbox__input', function (e, data) { // eslint-disable-line func-names, consistent-return
    const checkbox = $(this);
    const row = checkbox.parents('.table__row_main');

    // add selected class to the parent table__row_main, if checkbox is checked
    row.toggleClass('table__row_selected', checkbox.prop('checked'));

    // if the row is the first one, then check/uncheck all children checkboxes
    const isFirstParentCheckbox = row
      .parent()
      .parent()
      .hasClass('table');

    if (isFirstParentCheckbox) {
      row
        .parent()
        .find('.table__row_children')
        .find('.checkbox__input')
        .prop('checked', checkbox.prop('checked'))
        .trigger('change', ['fromParent']);
    }

    // make no sense to check childrens state, if it was changed on parent checkbox
    if (data && data === 'fromParent') {
      return; // eslint-disable-line consistent-return
    }

    const parentRow = row
      .parents('.table__row_parent')
      .last();

    const parentCheckbox = parentRow
      .children()
      .eq(0)
      .find('.checkbox__input');

    const childrenCheckboxes = parentRow
      .find('.table__row_children')
      .find('.checkbox__input')
      .toArray()
      .map(el => el.checked);

    // if childrens are selected, then mark parent as checked
    if (childrenCheckboxes.every(item => item)) {
      return parentCheckbox // eslint-disable-line consistent-return
        .prop('checked', true)
        .prop('indeterminate', false);
    }
    // if childrens aren't selected, then mark parent as unchecked
    if (childrenCheckboxes.every(item => !item)) {
      return parentCheckbox // eslint-disable-line consistent-return
        .prop('checked', false)
        .prop('indeterminate', false);
    }
    // otherwise mark parent as indeterminate
    parentCheckbox
      .prop('checked', false)
      .prop('indeterminate', true);
  });

  // toggle row
  table.on('click', '.table__toggle', function (e) { // eslint-disable-line func-names
    e.preventDefault();
    e.stopPropagation();

    const btn = $(this);
    const isActive = btn.hasClass('table__toggle_active');
    const childrenRow = btn
      .parents('.table__row_parent')
      .eq(0)
      .children('.table__row_children');

    if (isActive) {
      childrenRow.slideUp(250, () => {
        btn.removeClass('table__toggle_active');
      });
    } else {
      childrenRow.slideDown(250, () => {
        btn.addClass('table__toggle_active');
      });
    }
  });
};
