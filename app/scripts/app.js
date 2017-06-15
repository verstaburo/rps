import $ from 'jquery';
import datepicker from '../blocks/datepicker/datepicker';
import popup from '../blocks/popup/popup';
import dropdown from '../blocks/dropdown/dropdown';
import tags from '../blocks/tags/tags';
import table from '../blocks/table/table';
import accordion from '../components/accordion/accordion';
import counter from '../components/counter/counter';
import tsList from '../components/ts-list/ts-list';
import qrCodesTemplates from '../components/qr-codes-templates/qr-codes-templates';
import searchFilter from '../components/search-filter/search-filter';
import editCardDataPopup from '../components/edit-card-data-popup/edit-card-data-popup';

$(() => {
  datepicker();
  popup();
  dropdown();
  tags();
  accordion();
  table();
  counter();
  tsList();
  qrCodesTemplates();
  searchFilter();
  editCardDataPopup();
});
