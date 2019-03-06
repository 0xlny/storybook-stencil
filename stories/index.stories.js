import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
require('../www/build/storybook_stencil');

storiesOf('Welcome', module)
  .add('index', () => {
    return document.createElement('welcome-component');
  });

storiesOf('Buttons', module)
  .add('gradient', () => {
    const compo = document.createElement('gradient-button');
    //Those are for position in storybook
    compo.style.setProperty('margin-left', '50px');
    compo.style.setProperty('margin-top', '50px');
    compo.style.setProperty('position', 'absolute');

    //Those are default values
    compo.setAttribute('color', '#4776E6');
    compo.setAttribute('colorHover', '#e5b2ca');
    compo.setAttribute('text', 'Sign up');
    return compo;
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

storiesOf('Input', module)
  .add('Tags', () => {
    const compo = document.createElement('input-tag');
    //Those are for position in storybook
    compo.style.setProperty('margin-left', '50px');
    compo.style.setProperty('margin-top', '50px');
    compo.style.setProperty('position', 'absolute');
    //Those are default values
    compo.setAttribute('color', '#9880ff');
    return compo;
  });
