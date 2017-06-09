import $ from 'jquery';
import { freeze, unfreeze } from '../../scripts/libs/disable-scroll';

export default () => {
  const DROPDOWN_CLASS = '.dropdown';
  const OVERLAY_CLASS = '.dropdown-overlay';
  const ACTIVE_OVERLAY_CLASS = 'dropdown-overlay_active';
  const ACTIVE_DROPDOWN_CLASS = 'dropdown_active';
  const OPEN_BUTTON_CLASS = '.js-show-dropdown';
  const DATA_ATTRIBUTE = 'target-dropdown';
  const FADE_DURATION = 250;

  const items = $(DROPDOWN_CLASS);
  const overlay = $(OVERLAY_CLASS);

  if (!items.length) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`Elements with class '${DROPDOWN_CLASS}' not found on the page! Didn't you forge include dropdown block?`);
    }

    return;
  }

  if (!overlay.length) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`Elements with class '${OVERLAY_CLASS}' not found on the page! Didn't you forget include dropdown-overlay block?`);
    }
    return;
  }

  const init = () => {
    items.each(function () { // eslint-disable-line func-names
      const item = $(this);
      item.addClass('dropdown_loading');
      const mH = $(window).innerHeight() - item.offset().top - parseInt(item.css('margin-top'), 10);
      item.css('max-height', `${mH}px`);
      item.removeClass('dropdown_loading');
    });
  };

  const show = function () { // eslint-disable-line func-names
    const dropdown = $(this);

    if (dropdown.hasClass(ACTIVE_DROPDOWN_CLASS)) {
      return;
    }

    overlay.fadeIn(FADE_DURATION, () => {
      overlay.addClass(ACTIVE_OVERLAY_CLASS);

      freeze();

      dropdown.fadeIn(FADE_DURATION, () => {
        dropdown.addClass(ACTIVE_DROPDOWN_CLASS);
      });
    });
  };

  const hide = function () { // eslint-disable-line func-names
    const dropdown = $(this);

    if (!dropdown.hasClass(ACTIVE_DROPDOWN_CLASS)) {
      return;
    }

    overlay.fadeOut(FADE_DURATION, () => {
      overlay.removeClass(ACTIVE_OVERLAY_CLASS);

      unfreeze();

      dropdown.fadeOut(FADE_DURATION, () => {
        dropdown.removeClass(ACTIVE_DROPDOWN_CLASS);
      });
    });
  };

  items
    .on('dropdown:show', show)
    .on('dropdown:hide', hide);


  $(document)
    .on('click', OPEN_BUTTON_CLASS, function (e) { // eslint-disable-line func-names
      e.preventDefault();
      const btn = $(this);
      const id = btn.data(DATA_ATTRIBUTE);

      if (!id) {
        if (process.env.NODE_ENV === 'development') {
          console.warn(`Looks like your button hasnt correct data attribute '${DATA_ATTRIBUTE}'`);
        }

        return;
      }

      const dropdown = $(id);

      if (!dropdown.length) {
        if (process.env.NODE_ENV === 'development') {
          console.warn(`Element with id '${id}' not found on the page! Are you sure that you provide correct ID?`);
        }
        return;
      }

      const isActive = dropdown.hasClass(ACTIVE_DROPDOWN_CLASS);

      dropdown.trigger(isActive ? 'dropdown:hide' : 'dropdown:show');
    })
    .on('click', OVERLAY_CLASS, function () { // eslint-disable-line func-names
      $(this).removeClass(ACTIVE_OVERLAY_CLASS);
      $(`.${ACTIVE_DROPDOWN_CLASS}`).trigger('dropdown:hide');
    });

  $(window).on('load resize', init);
};
