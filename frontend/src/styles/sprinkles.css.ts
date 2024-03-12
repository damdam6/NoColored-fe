import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';

import { vars } from './vars.css.ts';

const displayProperties = defineProperties({
  properties: {
    display: vars.display,
    justifyContent: vars.justifyContent,
    alignItems: vars.alignItems,
    flexDirection: vars.flexDirection,
    position: vars.position,
  },
});

const colorProperties = defineProperties({
  conditions: {
    default: { selector: '' },
    active: { selector: '&:active' },
  },
  defaultCondition: 'default',
  properties: {
    color: vars.colors,
    backgroundColor: vars.colors,
  },
});

const fontProperties = defineProperties({
  properties: {
    fontFamily: vars.fontFamily,
    fontWeight: vars.fontWeight,
    fontSize: vars.fontSize,
  },
});

const spaceProperties = defineProperties({
  properties: {
    paddingLeft: vars.space,
    paddingRight: vars.space,
    paddingTop: vars.space,
    paddingBottom: vars.space,

    marginLeft: vars.space,
    marginRight: vars.space,
    marginTop: vars.space,
    marginBottom: vars.space,
  },
  shorthands: {
    padding: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
  },
});

const borderProperties = defineProperties({
  properties: {
    borderStyle: vars.borderStyle,
    borderWidth: vars.borderWidth,
    borderRadius: vars.borderRadius,
    borderColor: vars.colors,
  },
  shorthands: {
    border: ['borderWidth', 'borderRadius', 'borderColor'],
  },
});

const shadowProperties = defineProperties({
  properties: {
    boxShadow: vars.shadow,
    boxShadowColors: vars.colors,
  },
});

export const sprinkles = createSprinkles(
  displayProperties,
  borderProperties,
  spaceProperties,
  colorProperties,
  fontProperties,
  shadowProperties,
);
