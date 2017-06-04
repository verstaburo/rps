import $ from 'jquery';

export default () => {
  const counter = $('.counter');

  if (!counter.length) {
    return;
  }

  const input = counter.find('.js-counter-input');

  input.on('input change', function () { // eslint-disable-line func-names
    const el = $(this);
    el.val(el.val().replace(/[^0-9]/g, ''));

    if (el.val() < 0) {
      el.val(0);
    }
  });

  counter.on('click', '.js-counter-button', function (e) { // eslint-disable-line func-names
    e.preventDefault();
    const btn = $(this);
    const inp = btn.parents('.counter').find('.js-counter-input');

    let nextValue = parseInt(inp.val(), 10) || 0;

    switch (btn.data('action')) {
      case 'minus':
        nextValue -= 1;
        break;
      case 'plus':
        nextValue += 1;
        break;
      default:
        return;
    }

    inp
      .val(nextValue)
      .trigger('change');
  });
};
