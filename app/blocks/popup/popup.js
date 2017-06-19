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

  const show = function () { // eslint-disable-line func-names
    const popup = $(this);

    if (popup.hasClass(ACTIVE_POPUP_CLASS)) {
      return;
    }

    popup.fadeIn(250, () => {
      freeze();
      popup.addClass(ACTIVE_POPUP_CLASS);
    });
  };

  const hide = function () { // eslint-disable-line func-names
    const popup = $(this);

    if (!popup.hasClass(ACTIVE_POPUP_CLASS)) {
      return;
    }

    const content = popup.find('.popup__content');

    popup.removeClass(ACTIVE_POPUP_CLASS);

    content.on('transitionend', () => {
      unfreeze();
      popup.fadeOut(250);
      content.off('transitionend');
    });
  };

  popups
    .on('popup:show', show)
    .on('popup:hide', hide);

  // open btn handler
  $(document).on('click', OPEN_BUTTON_CLASS, function (e) { // eslint-disable-line func-names
    e.preventDefault();
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
      popup.trigger('popup:hide');
    }
  });
};
