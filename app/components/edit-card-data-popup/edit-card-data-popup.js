import $ from 'jquery';

export default () => {
  const block = $('.edit-card-data-popup');

  if (!block.length) {
    return;
  }

  block.on('click', '.js-edit-card-data-popup-remove', function (e) { // eslint-disable-line func-names
    e.preventDefault();
    const row = $(this).parents('.default-table__row');

    if (!row.length) {
      return;
    }

    row.fadeOut(250, row.remove);
  });

  block.on('click', '.js-edit-card-data-popup__add-row', (e) => {
    e.preventDefault();

    // logic goes here
  });
};
