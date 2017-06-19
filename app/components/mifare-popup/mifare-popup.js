export default () => {
  const { $ } = window;
  const block = $('.mifare-popup');

  if (!block.length) {
    return;
  }

  block.tabs();
};
