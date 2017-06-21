export default () => {
  const { $ } = window;
  const block = $('.search-bar_white');

  if (!block.length) {
    return;
  }

  block
    .on('focus', '.search-bar__input', function () { // eslint-disable-line func-names
      $(this)
        .parents('.search-bar_white')
        .addClass('focus');
    })
    .on('blur', '.search-bar__input', function () { // eslint-disable-line func-names
      $(this)
        .parents('.search-bar_white')
        .removeClass('focus');
    });
};
