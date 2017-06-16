import $ from 'jquery';

export default () => {
  const block = $('.edit-card-data-popup');

  if (!block.length) {
    return;
  }

  // remove row
  block.on('click', '.js-edit-card-data-popup-remove', function (e) { // eslint-disable-line func-names
    e.preventDefault();
    const row = $(this).parents('.edit-card-data-popup__row');

    if (!row.length) {
      return;
    }

    // PUT THIS CODE IN AJAX SUCCESS CAL;BACL
    row.fadeOut(250, row.remove);
  });

  // add row
  block.on('click', '.js-edit-card-data-popup__add-row', (e) => {
    e.preventDefault();

    const lastRow = block
      .find('.edit-card-data-popup__row')
      .last();

    const clone = lastRow
      .clone(true, true)
      .hide()
      .insertAfter(lastRow);

    clone
      .find('.select')
      .each((index, el) => {
        el.selectedIndex = 0; // eslint-disable-line no-param-reassign
        $(el).trigger('change');
      });

    clone.fadeIn();
  });

  // activate other params, if first one selected
  const toggleParams = function () { // eslint-disable-line func-names
    const el = $(this);
    const selected = el.find(':selected');
    const childrenCells = el
      .parents('.edit-card-data-popup__cell')
      .nextAll();

    if (selected.prop('disabled')) {
      // hide select, show 'select param text'
      childrenCells.each(function () { // eslint-disable-line func-names
        const childCell = $(this);

        childCell
          .find('.select')
          .hide()
          .parent()
          .find('.edit-card-data-popup__select-param')
          .fadeIn();
      });
    } else {
      // show select, hide 'select param text'
      childrenCells.each(function () { // eslint-disable-line func-names
        const childCell = $(this);

        childCell
          .find('.edit-card-data-popup__select-param')
          .hide()
          .parent()
          .find('.select')
          .fadeIn();
      });
    }
  };

  block
    .on('change', '.js-edit-card-data-popup__parent-select', toggleParams)
    .find('.js-edit-card-data-popup__parent-select')
    .each(toggleParams);
};
