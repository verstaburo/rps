const { $ } = window;

export default function sessionsPage() {
  const block = $('.sessions');

  if (!block.length) {
    return;
  }

  const vH = $(window).height();
  const header = $('.header');
  const actions = block.find('.actions-header');
  const content = block.find('.sessions__table');

  content.height(vH - header.outerHeight() - actions.outerHeight());
}

$('.sessions').on('click', '.js-sessions-toggle', function (e) { // eslint-disable-line func-names
  e.preventDefault();

  $(this)
    .parents('.table__col')
    .find('.table__toggle')
    .click();
});

$(window).on('resize', sessionsPage);
