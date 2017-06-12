import $ from 'jquery';

export default () => {
  const block = $('.qr-codes-templates');
  const count = $('.js-qr-codes-templates-count');
  const checkboxes = block.find('.accordion__select .checkbox__input');

  if (!block.length || !count.length || !checkboxes.length) {
    return;
  }

  block.on('change', '.accordion__select .checkbox__input', () => {
    const selected = checkboxes.filter(function () { // eslint-disable-line func-names
      return $(this).prop('checked');
    });

    count.text(selected.length);
  });
};
