import { style } from '@vanilla-extract/css';

import { borderOptions, flexOptions } from '@/styles/common.css.ts';
import { sprinkles } from '@/styles/sprinkles.css.ts';
import { vars } from '@/styles/vars.css.ts';

const BUTTON_SIZE = '24px';
const IMG_SIZE = '20px';

export const button = style([
  flexOptions({ option: 'center' }),
  borderOptions({ color: 'black', width: '1x' }),
  sprinkles({
    borderRadius: 'full',
    backgroundColor: 'white',
    marginX: '0.5x',
  }),
  {
    width: `${BUTTON_SIZE}`,
    height: `${BUTTON_SIZE}`,

    ':hover': {
      cursor: 'pointer',
      backgroundColor: vars.colors.gray100,
    },

    ':active': {
      backgroundColor: vars.colors.gray200,
    },
  },
]);

export const img = style({
  objectFit: 'contain',
  height: `${IMG_SIZE}`,
});
