import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
require('../www/build/storybook_stencil');

storiesOf('Welcome', module)
  .add('index', () => {
    const compo = document.createElement('welcome-component');
    console.log(compo);
    return compo;
  });

storiesOf('Sliders', module)
  .add('normal', () => {
    const compo = document.createElement('slider-component');
    compo.setAttribute('min', 0);
    compo.setAttribute('max', 100);
    console.log(compo);
    return compo;
  });
