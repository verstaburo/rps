import $ from 'jquery';

export default () => {
  // remove deletable checkbox
  $('html, body').on('click', '.tags_deletable .tags__item', function (e) { // eslint-disable-line func-names
    e.preventDefault();
    e.stopPropagation();

    const el = $(this);

    el.fadeOut(250, () => {
      el.remove();
    });
  });
};
