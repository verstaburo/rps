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
};
