import { freeze, unfreeze } from '../../scripts/libs/disable-scroll';

export default () => {
  const POPUP_CLASS = '.popup';
  const ACTIVE_POPUP_CLASS = 'popup_active';
  const OPEN_BUTTON_CLASS = '.js-show-popup';
  const CLOSE_BUTTON_CLASS = '.popup__close';
  const DATA_ATTRIBUTE = 'target-popup';

  const { $ } = window;
  const popups = $(POPUP_CLASS);

  if (!popups.length) {
    return;
  }

  const toggleParent = (action = 'show', currentPopup) => {
    const activePopups = $(document).find('.popup_active');

    if (!activePopups.length) {
      return;
    }

    activePopups
      .filter(function () { // eslint-disable-line func-names
        return $(this).attr('id') !== currentPopup.attr('id');
      })
      .each(function () { // eslint-disable-line func-names
        const content = $(this).find('.popup__content');
        // const sidebar = $('.layout__left');

        if (action === 'show') {
          content.css('transform', `translate3d(-${currentPopup.find('.popup__body').outerWidth()}px, 0, 0)`);
        } else {
          content.css('transform', '');
        }
      });
  };

  const show = function () { // eslint-disable-line func-names
    const popup = $(this);

    if (popup.hasClass(ACTIVE_POPUP_CLASS)) {
      return;
    }

    popup.fadeIn(250, () => {
      freeze();
      popup.addClass(ACTIVE_POPUP_CLASS);
      toggleParent('show', popup);
    });
  };

  const hide = function () { // eslint-disable-line func-names
    const popup = $(this);

    if (!popup.hasClass(ACTIVE_POPUP_CLASS)) {
      return;
    }

    const content = popup.find('.popup__content');

    popup.removeClass(ACTIVE_POPUP_CLASS);
    toggleParent('hide', popup);

    content.on('transitionend', () => {
      popup.fadeOut(250, () => {
        unfreeze();
        content.off('transitionend');
      });
    });
  };

  popups
    .on('popup:show', show)
    .on('popup:hide', hide);

  // open btn handler
  $(document).on('click', OPEN_BUTTON_CLASS, function (e) { // eslint-disable-line func-names
    e.preventDefault();
    e.stopPropagation();
    const btn = $(this);
    const id = btn.data(DATA_ATTRIBUTE);
    const subtarget = btn.data('subtarget');
    const popup = $(id);

    if (!popup.length) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('Make sure, that you pass correct id to the button', btn);
      }
      return;
    }

    popup.trigger('popup:show', [subtarget]);
  });

  // close btn handler
  $(document).on('click', CLOSE_BUTTON_CLASS, function (e) { // eslint-disable-line func-names
    e.preventDefault();
    e.stopPropagation();
    const popup = $(this).parents('.popup');

    if (!popup.length) {
      return;
    }

    popup.trigger('popup:hide');
  });

  // click outside handler

  $(document).on('click', POPUP_CLASS, function (e) { // eslint-disable-line func-names
    const popup = $(this);
    const target = $(e.target);

    if (target.hasClass(POPUP_CLASS.slice(1)) || target.hasClass('popup__wrapper')) {
      e.preventDefault();
      e.stopPropagation();
      popup.trigger('popup:hide');
    }
  });
};
