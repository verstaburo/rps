import $ from 'jquery';
import popup from '../blocks/popup/popup';
import dropdown from '../blocks/dropdown/dropdown';
import tags from '../blocks/tags/tags';
import accordion from '../blocks/accordion/accordion';
import counter from '../components/counter/counter';

$(() => {
  popup();
  dropdown();
  tags();
  counter();
  accordion();
});
