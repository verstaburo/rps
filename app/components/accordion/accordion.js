export default () => {
  const { $ } = window;
  const accordion = $('.accordion');

  if (!accordion) {
    return;
  }

  const ITEM_CLASS = '.accordion__item';
  const BTN_CLASS = '.accordion__button';
  const CONTENT_CLASS = '.accordion__content';
  const ACTIVE_CLASS = 'accordion__item_active';
  const SELECT_CLASS = 'accordion__select';
  const SLIDE_DURATION = 250;

  accordion
    .find(BTN_CLASS)
    .on('click', function (e) { // eslint-disable-line func-names
      const target = $(e.target);

      // do not handle click on checkbox
      if (target.hasClass(SELECT_CLASS) || target.parents(`.${SELECT_CLASS}`).length) {
        return;
      }

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
