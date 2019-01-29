import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
require('../www/build/storybook_stencil');

storiesOf('Welcome', module)
  .add('index', () => {
    return document.createElement('welcome-component');
  });

storiesOf('Sliders', module)
  .add('normal', () => {
    const compo = document.createElement('slider-component');
    //Those are default values
    compo.setAttribute('color', '#9880ff');
    compo.setAttribute('min', 0);
    compo.setAttribute('max', 100);
    return compo;
  });

storiesOf('Loading indicators', module)
  .add('Square', () => {
    const compo = document.createElement('loading-indicator');
    //Those are for position in storybook
    compo.style.setProperty('margin-left', '50px');
    compo.style.setProperty('margin-top', '50px');
    compo.style.setProperty('position', 'absolute');
    //Those are default values
    compo.setAttribute('color', '#9880ff');
    compo.setAttribute('text', 'Loading...');
    return compo;
  });
