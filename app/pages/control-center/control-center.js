const { $ } = window;

export default function controlCenter() {
  const block = $('.control-center');

  if (!block.length) {
    return;
  }

  const vH = $(window).height();
  const header = $('.header');
  const sidebar = block.find('.control-center__sidebar');
  const content = block.find('.control-center__content');

  const heights = vH - header.outerHeight();

  // sidebar
  sidebar.height(heights);
  // content
  content.height(heights);
}

$(window).on('resize', controlCenter);
