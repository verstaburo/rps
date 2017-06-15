import $ from 'jquery';

export default () => {
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

      btn
        .fadeOut(250)
        .parents('.notification-info')
        .find('.notification-info__body')
        .addClass('notification-info__body_active');
    });
};
