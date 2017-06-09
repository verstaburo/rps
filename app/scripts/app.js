import $ from 'jquery';
import popup from '../blocks/popup/popup';
import dropdown from '../blocks/dropdown/dropdown';
import accordion from '../blocks/accordion/accordion';
import counter from '../components/counter/counter';

$(() => {
  popup();
  dropdown();
  counter();
  accordion();
});
