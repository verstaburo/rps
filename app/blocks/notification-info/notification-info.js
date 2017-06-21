export default () => {
  const { $ } = window;
  const blocks = $('.notification-info');

  if (!blocks.length) {
    return;
  }

  const recalc = function () { // eslint-disable-line func-names
    const el = $(this);
    const body = el.find('.notification-info__body');
    const btn = el.find('.notification-info__expand');

    if (!body.length || !btn.length) {
      return;
    }

    if (body[0].scrollHeight > parseInt(body.css('max-height'), 10)) {
      btn.addClass('notification-info__expand_visible');
    }
  };

  blocks
    .each(recalc)
    .on('notification-info:recalc', recalc)
    .on('click', '.notification-info__expand', function (e) { // eslint-disable-line func-names
      e.preventDefault();

      const btn = $(this);
      const btnText = btn.find('.icon-button__text');
      const btnIcon = btn.find('.icon-button__icon');

      const text = btn
        .parents('.notification-info')
        .find('.notification-info__body');


      if (text.hasClass('notification-info__body_active')) {
        btnText.text('развернуть');
        text.removeClass('notification-info__body_active');
        btnIcon.css('transform', '');
      } else {
        btnText.text('свернуть');
        text.addClass('notification-info__body_active');
        btnIcon.css('transform', 'rotate(180deg');
      }
    });
};
