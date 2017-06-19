export default () => {
  const { $ } = window;
  const block = $('.mifare-popup');

  if (!block.length) {
    return;
  }

  block.tabs();

  // block/unblock
  block.on('click', '.mifare-popup__action', function (e) { // eslint-disable-line func-names
    e.preventDefault();
    const el = $(this);

    // block
    if (el.hasClass('mifare-popup__action_block')) {
      // the code should be in ajax success callback
      block
        .find('.mifare-popup__alert')
        .slideDown(250, () => {
          block.addClass('mifare-popup_blocked');
        });
    } else {
      // the code should be in ajax success callback
      block
        .find('.mifare-popup__alert')
        .slideUp(250, () => {
          block.removeClass('mifare-popup_blocked');
        });
    }
  });
};
