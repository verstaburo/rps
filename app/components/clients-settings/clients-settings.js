export default () => {
  const { $ } = window;
  const items = $('.clients-settings__items');

  if (!items.length) {
    return;
  }

  items.sortable({ handle: '.clients-settings__burger', axis: 'y' });
};
