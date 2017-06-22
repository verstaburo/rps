export default () => {
  const { $ } = window;
  const block = $('.mifare-popup');
  const popup = block.parents('.popup');

  if (!block.length) {
    return;
  }

  block.tabs();

  const resize = () => {
    // scroll settings
    const vH = $(window).height();
    const header = popup.find('.popup__header');
    const sidebar = popup.find('.mifare-popup__sidebar');
    const sidebarGroup = sidebar.find('.inner-sidebar__group');
    const sidebarBtn = sidebar.find('.mifare-popup__sidebar-btn');
    const alertEl = popup.find('.alert');
    const alert = alertEl.is(':visible') ? alertEl.outerHeight() : 0;

    // sidebar
    sidebar.height(vH - header.outerHeight() - alert);
    sidebarGroup.height(vH - header.outerHeight() - sidebarBtn.outerHeight() - alert);

    // mifare-card-info
    {
      const tab = popup.find('.mifare-card-info');
      const content = tab.find('.mifare-card-info__fields');
      const btn = tab.find('.mifare-card-info__button-wrap');

      content.height(vH - header.outerHeight() - btn.outerHeight() - alert);
    }

    // mifare-card-sessions
    {
      const tab = popup.find('.mifare-card-sessions');
      const content = tab.find('.accordion');
      const btn = tab.find('.actions-header');

      content.height(vH - header.outerHeight() - btn.outerHeight() - alert);
    }

    // mifare-card-transactions
    {
      const tab = popup.find('.mifare-card-transactions');
      const content = tab.find('.mifare-card-transactions__content');
      const btn = tab.find('.actions-header');

      content.height(vH - header.outerHeight() - btn.outerHeight() - alert);
    }
  };

  popup.on('popup:show', resize);

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

    resize();
  });
};
