const { $ } = window;

export default function settingsDevicesDevice() {
  const block = $('.settings-devices-device');

  if (!block.length) {
    return;
  }

  const vH = $(window).height();
  const header = $('.header');
  const actions = block.find('.actions-header');
  const sidebar = block.find('.inner-sidebar');
  const content = block.find('.settings-devices-device__content');

  const heights = vH - header.outerHeight() - actions.outerHeight();

  // sidebar
  sidebar.height(heights);
  // content
  content.height(heights);
}

$(window).on('resize', settingsDevicesDevice);
