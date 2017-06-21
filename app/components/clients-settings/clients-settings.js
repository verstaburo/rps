export default () => {
  const { $ } = window;
  const items = $('.clients-settings__items');

  if (!items.length) {
    return;
  }
  console.log(items);
  console.log(items.tabs);
  items.sortable({ handle: '.clients-settings__burger' });
};
