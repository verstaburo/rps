import $ from 'jquery';
import popup from '../blocks/popup/popup';
import accordion from '../blocks/accordion/accordion';
import counter from '../components/counter/counter';

$(() => {
  popup();
  counter();
  accordion();
});
