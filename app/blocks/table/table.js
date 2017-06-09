import $ from 'jquery';

export default () => {
  const table = $('.table');

  if (!table.length) {
    return;
  }

  table.on('change', '.checkbox__input', function (e, data) { // eslint-disable-line func-names, consistent-return
    const checkbox = $(this);
    const row = checkbox.parents('.table__row_main');

    // add selected class to the parent table__row_main, if checkbox is checked
    row.toggleClass('table__row_selected', checkbox.prop('checked'));

    // if the row is the first one, then check/uncheck all children checkboxes
    if (row.index() === 0 && !checkbox.prop('indeterminate')) {
      return row // eslint-disable-line consistent-return
        .nextAll('.table__row_main')
        .find('.checkbox__input')
        .prop('checked', checkbox.prop('checked'))
        .trigger('change', ['fromParent']);
    }

    // make no sense to check childrens state, if state was changed on parent checkbox
    if (data && data === 'fromParent') {
      return; // eslint-disable-line consistent-return
    }

    // check childrens state
    const parentRow = row.parents('.table__row_parent');
    const parentCheckbox = parentRow
      .find('.table__row_main')
      .eq(0)
      .find('.checkbox__input');

    const childCheckboxes = parentRow.find('.checkbox__input');
    const countChecked = [...childCheckboxes].filter(el => el.checked).length;

    // if all are checked, then check parent as well
    // TODO need to exclude parent froms states before
    // if (countChecked === childCheckboxes.length) {
    //   parentCheckbox
    //     .prop('checked', true)
    //     .trigger('checked', ['fromParent']);
    // }
    // if all aren't checked, then unchech parent as well
    // TODO need to exclude parent froms states before
    // if (!countChecked) {
    //   parentCheckbox
    //     .prop('checked', false)
    //     .trigger('checked', ['fromParent']);
    // }
    // otherwise, mark parent as indeterminate
    // TODO rereplace that if, on else..
    if (countChecked && countChecked < childCheckboxes.length) {
      parentCheckbox
        .prop({ indeterminate: true })
        .trigger('change', ['fromParent']);
    }
  });
};
