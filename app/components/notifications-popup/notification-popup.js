import $ from 'jquery';

export default () => {
  const popup = $('#notifications-popup');
  const notifications = popup.find('.notification-info');

  if (!popup.length || !notifications.length) {
    return;
  }

  popup.on('popup:show', () => {
    notifications.trigger('notification-info:recalc');
  });
};
