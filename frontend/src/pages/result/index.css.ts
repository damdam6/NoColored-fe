import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import * as constants from './constants';

import { flexOptions } from '@/styles/common.css';
import { sprinkles } from '@/styles/sprinkles.css';

export const gameResultWrapper = style([
  flexOptions({ option: 'columnCenter' }),
  sprinkles({
    justifyContent: 'spaceAround',
  }),
  {
    width: '100%',
    height: '100%',
  },
]);

export const resultTextWrapper = style([
  sprinkles({
    marginTop: '4x',
    fontFamily: 'numFont',
    color: 'white',
  }),
  {
    height: constants.RESULTTEXT_HEIGHT,
    fontSize: constants.RESULTTEXT_SIZE,
    textShadow: constants.RESULTTEXT_BORDER,
    '@media': {
      'screen and (max-height: 365px)': {
        marginTop: constants.MEDIA_RESULTTEXT_MARGIN_TOP,
        marginBottom: constants.MEDIA_RESULTTEXT_MARGIN_HEIGHT,
        fontSize: constants.MEDIA_RESULTTEXT_SIZE,
      },
    },
  },
]);

export const buttonWrapper = style([
  flexOptions({ option: 'rowCenter' }),
  sprinkles({
    justifyContent: 'spaceAround',
  }),
]);

export const resultInfoBox = recipe({
  base: [
    flexOptions({ option: 'rowCenter' }),
    sprinkles({
      backgroundColor: 'white',
      fontSize: '1.5x',
      justifyContent: 'spaceAround',
      borderStyle: 'solid',
      borderWidth: '3x',
      borderRadius: '2x',
      paddingX: '4x',
      marginY: '0.5x',
    }),
    {
      height: constants.RANKINGINFOBOX_HEIGHT,
      width: constants.RANKINGINFOBOX_WIDTH,
      boxSizing: 'border-box',
      overflow: 'hidden',
      '@media': {
        'screen and (max-height: 400px)': {
          height: constants.MEDIA_RANKINGINFOBOX_HEIGHT,
          width: constants.MEDIA_RANKINGINFOBOX_WIDTH,
          marginBottom: constants.MEDIA_RANKINGINFOBOX_MARGIN,
        },
      },
    },
  ],
  variants: {
    firstResult: {
      true: [
        sprinkles({
          color: 'white',
          fontSize: '2x',
          marginTop: '0.5x',
          marginBottom: '2x',
        }),
        {
          paddingLeft: '5%',
          paddingRight: '5%',
          height: constants.FIRSTRANKINGINFOBOX_HEIGHT,
          width: constants.FIRSTRANKINGINFOBOX_WIDTH,
          '@media': {
            'screen and (max-height: 400px)': {
              height: constants.MEDIA_FIRSTRANKINGINFOBOX_HEIGHT,
              width: constants.MEDIA_FIRSTRANKINGINFOBOX_WIDTH,
              marginBottom: constants.MEDIA_FIRSTRANKINGINFOBOX_MARGIN,
            },
          },
        },
      ],
    },
    colorStyle: {
      pink: [
        sprinkles({
          borderColor: 'pink',
          backgroundColor: 'pink',
        }),
      ],
      yellow: sprinkles({
        borderColor: 'yellow',
      }),
      green: sprinkles({
        borderColor: 'green',
      }),
      blue: sprinkles({
        borderColor: 'blue',
      }),
    },
  },
});

export const tierModalWrapper = style([
  flexOptions({ option: 'columnCenter' }),
  sprinkles({
    width: 'full',
    height: 'full',
  }),
]);
export const tierRibbonWrapper = style([
  flexOptions({ option: 'center' }),
  sprinkles({
    position: 'relative',
    width: 'full',
  }),
]);

export const tierRibbon = style([
  flexOptions({ option: 'center' }),
  sprinkles({
    position: 'absolute',
    width: 'full',
  }),
]);

export const tierRibbonImage = style({ width: '36%' });
export const tierDiamond = style([flexOptions({ option: 'center' })]);

export const tierDiamondImage = style([
  {
    width: '43%',
  },
]);

export const tierUpgradeWrapper = style([
  flexOptions({ option: 'rowCenter' }),
  sprinkles({ marginY: '4x' }),
]);

export const tierModalMessage = style([
  sprinkles({ marginTop: '1x', marginBottom: '2x' }),
]);
