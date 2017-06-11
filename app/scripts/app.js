import $ from 'jquery';
import popup from '../blocks/popup/popup';
import dropdown from '../blocks/dropdown/dropdown';
import tags from '../blocks/tags/tags';
import accordion from '../blocks/accordion/accordion';
import table from '../blocks/table/table';
import counter from '../components/counter/counter';
import tsList from '../components/ts-list/ts-list';

$(() => {
  popup();
  dropdown();
  tags();
  accordion();
  table();
  counter();
  tsList();
});
