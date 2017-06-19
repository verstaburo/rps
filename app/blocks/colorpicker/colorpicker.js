export default () => {
  const { $ } = window;

  const inputs = $('.colorpicker__input');

  if (!inputs.length) {
    return;
  }

  inputs.each(function () { // eslint-disable-line func-names
    $(this).spectrum({
      chooseText: 'Применить',
      cancelText: 'Отменить',
    });
  });
};
