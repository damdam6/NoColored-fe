import { style } from '@vanilla-extract/css';

import * as constants from './constants';

import { flexOptions } from '@/styles/common.css';
import { sprinkles } from '@/styles/sprinkles.css';
import { vars } from '@/styles/vars.css';

export const boxWrapper = style([flexOptions({ option: 'columnCenter' })]);

export const buttonWrapper = style([flexOptions({ option: 'center' })]);

export const tierWrapper = style([
  flexOptions({ option: 'center' }),
  {
    padding: vars.space['1x'],
  },
]);

export const text = style([
  flexOptions({ option: 'center' }),
  sprinkles({
    textSize: '2x',
    paddingBottom: '2x',
  }),
]);

export const infoText = style([
  flexOptions({ option: 'center' }),
  sprinkles({
    textSize: '1x',
    marginBottom: '2x',
  }),
]);

export const textMargin = style([
  sprinkles({
    margin: '3x',
  }),
  {
    textAlign: 'center',
  },
]);

export const mapBackground = style([
  flexOptions({ option: 'center' }),
  sprinkles({
    marginBottom: '1x',
  }),
  {
    width: constants.IMG_SIZE.background.width,
    height: constants.IMG_SIZE.background.height,
    maxHeight: '100%',
  },
]);

export const imageStyle = style([
  sprinkles({
    marginBottom: '1x',
  }),
  {
    maxWidth: '100%',
    maxHeight: '100%',
  },
]);

export const buttonStyle = style({
  width: constants.IMG_SIZE.button.width,
  height: constants.IMG_SIZE.button.height,
});

export const lowTierStyle = style([
  flexOptions({ option: 'center' }),
  sprinkles({
    marginBottom: '1x',
  }),
  {
    justifyContent: 'space-around',
  },
]);

export const highTierStyle = style([
  flexOptions({ option: 'center' }),
  {
    justifyContent: 'space-evenly',
  },
]);

export const buttonBorderStyle = style([
  sprinkles({
    borderRadius: '4x',
    borderWidth: '5x',
    borderColor: 'black',
  }),
  {
    margin: '3px',
  },
]);
