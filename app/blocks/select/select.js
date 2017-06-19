export default () => {
  const { $ } = window;

  const block = $('.select');

  if (!block.length) {
    return;
  }

  $(document)
    .on('click', '.select', function (e) { // eslint-disable-line func-names
      e.stopPropagation();

      if ($(e.target).prop('disabled')) {
        return;
      }

      $(this).toggleClass('select_active');
    })
    .on('click', () => {
      $(document)
        .find('.select_active')
        .removeClass('select_active');
    });
};
