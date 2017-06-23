export default () => {
  const { $, moment } = window;

  const el = $('.datepicker__control');

  if (!el.length) {
    return;
  }

  el.each(function () { // eslint-disable-line func-names
    $(this).dateRangePicker({
      startOfWeek: 'monday',
      separator: ' — ',
      format: 'DD.MM.YYYY HH:mm',
      autoClose: false,
      time: {
        enabled: true,
      },
      defaultTime: moment().startOf('day').toDate(),
      defaultEndTime: moment().endOf('day').toDate(),
    });
  });

  const block = $('.datepicker');

  if (!block.length) {
    return;
  }

  block
    .on('focus', '.datepicker__control', function () { // eslint-disable-line func-names
      $(this)
        .parents('.datepicker')
        .addClass('focus');
    })
    .on('blur', '.datepicker__control', function () { // eslint-disable-line func-names
      $(this)
        .parents('.datepicker')
        .removeClass('focus');
    });
};
