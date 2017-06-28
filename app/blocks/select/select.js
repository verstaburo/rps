export default () => {
  const { $ } = window;

  const block = $('.select');

  if (!block.length) {
    return;
  }

  $(document)
    .on('change', '.select__control', function () { // eslint-disable-line func-names
      $(this)
        .parents('.select')
        .removeClass('select_active')
        .data('changed', true);
    })
    .on('click', '.select', function (e) { // eslint-disable-line func-names, consistent-return
      e.stopPropagation();
      const el = $(this);

      if (el.data('changed')) {
        return el.data('changed', false);
      }

      el.addClass('select_active');
    })
    .on('click', () => {
      $(document)
        .find('.select_active')
        .removeClass('select_active');
    });
};
