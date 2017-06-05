import $ from 'jquery';

export default () => {
  const accordion = $('.accordion');

  if (!accordion) {
    return;
  }

  const ITEM_CLASS = '.accordion__item';
  const BTN_CLASS = '.accordion__button';
  const CONTENT_CLASS = '.accordion__content';
  const ACTIVE_CLASS = 'accordion__item_active';
  const SLIDE_DURATION = 250;

  accordion
    .find(BTN_CLASS)
    .on('click', function (e) { // eslint-disable-line func-names
      e.preventDefault();

      const btn = $(this);
      const item = btn.parents(ITEM_CLASS);

      if (!item.length) {
        return;
      }

      const isActive = item.hasClass(ACTIVE_CLASS);

      if (isActive) {
        item
          .find(CONTENT_CLASS)
          .slideUp(SLIDE_DURATION, () => {
            item.removeClass(ACTIVE_CLASS);
          });
      } else {
        item
          .find(CONTENT_CLASS)
          .slideDown(SLIDE_DURATION, () => {
            item.addClass(ACTIVE_CLASS);
          });
      }
    });
};
