export default () => {
  const { $ } = window;

  const block = $('.mifare-card-sessions');

  if (!block.length) {
    return;
  }

  block
    .find('.accordion__content')
    .each(function () { // eslint-disable-line func-names
      $(this).tabs();
    });
};
