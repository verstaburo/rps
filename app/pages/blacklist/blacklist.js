const { $ } = window;

export default function blacklistPage() {
  const block = $('.blacklist');

  if (!block.length) {
    return;
  }

  const vH = $(window).height();
  const header = $('.header');
  const actions = block.find('.actions-header');
  const content = block.find('.blacklist__table');

  content.height(vH - header.outerHeight() - actions.outerHeight());
}

$(window).on('resize', blacklistPage);
