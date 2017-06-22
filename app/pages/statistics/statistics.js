const { $ } = window;

export default function statistics() {
  const block = $('.statistics');

  if (!block.length) {
    return;
  }

  const vH = $(window).height();
  const header = $('.header');
  const sidebar = block.find('.statistics__sidebar');
  const table = block.find('.statistics__table');
  const actions = block.find('.statistics__actions-header');

  // sidebar
  const sidebarGroup = sidebar.find('.inner-sidebar__group');
  const sidebarBtn = sidebar.find('.statistics__sidebar-btn');

  sidebarGroup.height(vH - header.outerHeight() - sidebarBtn.outerHeight());

  // content
  table.height(vH - header.outerHeight() - actions.outerHeight());
}


$(window).on('resize', statistics);
