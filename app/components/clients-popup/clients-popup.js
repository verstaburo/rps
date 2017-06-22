export default () => {
  const { $ } = window;

  const block = $('.clients-popup');

  if (!block.length) {
    return;
  }

  block.tabs();


  const popup = $('#clients-popup');

  popup.on('popup:show', (e, subtarget) => {
    // scroll settings
    const vH = $(window).height();
    const header = popup.find('.popup__header');
    const sidebar = popup.find('.clients-popup__sidebar');
    const sidebarGroup = sidebar.find('.inner-sidebar__group');
    const sidebarBtn = sidebar.find('.clients-popup__sidebar-btn');

    // sidebar
    sidebar.height(vH - header.outerHeight());
    sidebarGroup.height(vH - header.outerHeight() - sidebarBtn.outerHeight());

    // common-clients-info
    {
      const tab = popup.find('.clients-common-info');
      const content = tab.find('.clients-common-info__content');
      const btn = tab.find('.clients-common-info__save-button');

      content.height(vH - header.outerHeight() - btn.outerHeight());
    }

    // individual-info
    {
      const tab = popup.find('.individual-info');
      const actions = tab.find('.search-bar-add');
      const content = tab.find('.accordion');

      content.height(vH - header.outerHeight() - actions.outerHeight());
    }

    // ts-list
    {
      const tab = popup.find('.clients-popup__ts-list');
      const actions = tab.find('.search-bar-add');
      const content = tab.find('.ts-list');

      content.height(vH - header.outerHeight() - actions.outerHeight());
    }

    // mifare-cards
    {
      const tab = popup.find('.mifare-cards');
      const actions = tab.find('.search-bar-add');
      const content = tab.find('.mifare-cards__content');

      content.height(vH - header.outerHeight() - actions.outerHeight());
    }

    // qr-codes
    {
      const tab = popup.find('.qr-codes');
      const actions = tab.find('.qr-codes__action-header');
      const content = tab.find('.qr-codes__accordion');

      content.height(vH - header.outerHeight() - actions.outerHeight());
    }

    // set active tab, depends on 'data-subtarget' param
    if (!subtarget) {
      return;
    }

    block
      .find(`a[href="${subtarget}"]`)
      .click();
  });
};
