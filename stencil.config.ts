import { Config } from '@stencil/core';
import {sass} from "@stencil/sass";
import {less} from "@stencil/less";

export const config: Config = {
  namespace: 'storybook_stencil',
  outputTargets:[
    { type: 'dist' },
    { type: 'docs' },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  plugins: [
    less(),
    sass()
  ]
};
