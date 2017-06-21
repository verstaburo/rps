import svg4everybody from 'svg4everybody';
import datepicker from '../blocks/datepicker/datepicker';
import select from '../blocks/select/select';
import colorpicker from '../blocks/colorpicker/colorpicker';
import popup from '../blocks/popup/popup';
import dropdown from '../blocks/dropdown/dropdown';
import tags from '../blocks/tags/tags';
import table from '../blocks/table/table';
import notificationInfo from '../blocks/notification-info/notification-info';
import clientsPopup from '../components/clients-popup/clients-popup';
import individualInfo from '../components/individual-info/individual-info';
import clientsSettings from '../components/clients-settings/clients-settings';
import mifareCardSessions from '../components/mifare-card-sessions/mifare-card-sessions';
import mifarePopup from '../components/mifare-popup/mifare-popup';
import accordion from '../components/accordion/accordion';
import notificationsPopup from '../components/notifications-popup/notification-popup';
import counter from '../components/counter/counter';
import tsList from '../components/ts-list/ts-list';
import qrCodesTemplates from '../components/qr-codes-templates/qr-codes-templates';
import searchFilter from '../components/search-filter/search-filter';
import editCardDataPopup from '../components/edit-card-data-popup/edit-card-data-popup';
import indexPage from '../pages/index/index';

const { $ } = window;
$(() => {
  svg4everybody();
  datepicker();
  select();
  colorpicker();
  popup();
  dropdown();
  tags();
  accordion();
  table();
  notificationInfo();
  counter();
  notificationsPopup();
  tsList();
  clientsSettings();
  qrCodesTemplates();
  searchFilter();
  editCardDataPopup();
  clientsPopup();
  individualInfo();
  mifarePopup();
  mifareCardSessions();
  indexPage();
});
