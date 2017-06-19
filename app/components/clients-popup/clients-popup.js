export default () => {
  const { $ } = window;

  const block = $('.clients-popup');

  if (!block.length) {
    return;
  }

  block.tabs();
};
