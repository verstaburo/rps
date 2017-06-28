export default () => {
  const { $ } = window;
  const table = $('.table');

  if (!table.length) {
    return;
  }

  // toggle row
  table.on('click', '.table__toggle', function (e) { // eslint-disable-line func-names
    e.preventDefault();
    e.stopPropagation();

    const btn = $(this);
    const isActive = btn.hasClass('table__toggle_active');
    const childrenRow = btn
      .parents('.table__row_parent')
      .eq(0)
      .children('.table__row_children');

    if (isActive) {
      childrenRow.slideUp(250, () => {
        btn.removeClass('table__toggle_active');
      });
    } else {
      childrenRow.slideDown(250, () => {
        btn.addClass('table__toggle_active');
      });
    }
  });
};
