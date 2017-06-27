const { $ } = window;

export default function controlCenter() {
  const block = $('.control-center');

  if (!block.length) {
    return;
  }

  const vH = $(window).height();
  const header = $('.header');
  const sidebar = block.find('.control-center__sidebar');
  const container = block.find('.control-center__container');
  const table = block.find('.control-center__table');

  const heights = vH - header.outerHeight();

  // sidebar
  sidebar.height(heights);
  // content
  table.height(heights - container.outerHeight());
}

$('.control-center .accordion').on('click', () => {
  setTimeout(controlCenter, 300);
});

$(window).on('resize', controlCenter);
