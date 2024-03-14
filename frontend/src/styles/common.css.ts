// 공통으로 사용해야되는 스타일 정의 파일

import { recipe } from '@vanilla-extract/recipes';

import { sprinkles } from '@/styles/sprinkles.css.ts';

export const flexOptions = recipe({
  base: sprinkles({ display: 'flex' }),
  variants: {
    // 기본적인 option 묶어서 사용 (추가 가능)
    option: {
      // 중앙 정렬
      center: sprinkles({
        justifyContent: 'center',
        alignItems: 'center',
      }),
      // column 정렬
      column: sprinkles({
        flexDirection: 'column',
      }),
      columnCenter: sprinkles({
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }),
      // row 정렬
      row: sprinkles({
        flexDirection: 'row',
      }),
    },
  },
});

export const borderOptions = recipe({
  base: sprinkles({ borderStyle: 'solid' }),
  variants: {
    // border color
    color: {
      red: sprinkles({ borderColor: 'redDark' }),
      yellow: sprinkles({ borderColor: 'yellowDark' }),
      green: sprinkles({ borderColor: 'greenDark' }),
      blue: sprinkles({ borderColor: 'blueDark' }),
      pink: sprinkles({ borderColor: 'pinkDark' }),
      navy: sprinkles({ borderColor: 'navyDark' }),
      black: sprinkles({ borderColor: 'black' }),
      gray300: sprinkles({ borderColor: 'gray500' }),
      gray500: sprinkles({ borderColor: 'gray700' }),
    },

    // border width
    width: {
      '1x': sprinkles({ borderWidth: '1x' }),
      '2x': sprinkles({ borderWidth: '2x' }),
      '3x': sprinkles({ borderWidth: '3x' }),
      '5x': sprinkles({ borderWidth: '5x' }),
    },
  },
});
