export default () => {
  const { $ } = window;
  const block = $('.individual-info');

  if (!block.length) {
    return;
  }

  block
    .find('.individual-info__container')
    .each(function () { // eslint-disable-line func-names
      $(this).tabs();
    });
};
