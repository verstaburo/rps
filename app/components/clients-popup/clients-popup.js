export default () => {
  const { $ } = window;

  const block = $('.clients-popup');

  if (!block.length) {
    return;
  }

  block.tabs();

  // set active tab, depends on 'data-subtarget' param
  const popup = $('#clients-popup');

  popup.on('popup:show', (e, subtarget) => {
    if (!subtarget) {
      return;
    }

    block
      .find(`a[href="${subtarget}"]`)
      .click();
  });
};
