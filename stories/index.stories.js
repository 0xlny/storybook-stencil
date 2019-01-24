import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
require('../www/build/welcome-component');

storiesOf('Welcome', module)
  .add('index', () => {
    const compo = document.createElement('welcome-component');
    compo.type = 'welcome-component';
    compo.setAttribute('first', "Stencil");
    compo.setAttribute('last', "'Don't call me a framework' JS");
    console.log(compo);
    return compo;
  });
