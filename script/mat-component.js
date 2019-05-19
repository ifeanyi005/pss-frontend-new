// import {MDCSelect} from '@material/select';
import {MDCSelect} from '@material/select/dist/mdc.select';

const select = new MDCSelect(document.querySelector('.mdc-select'));

select.listen('MDCSelect:change', () => {
  alert(`Selected option at index ${select.selectedIndex} with value "${select.value}"`);
});