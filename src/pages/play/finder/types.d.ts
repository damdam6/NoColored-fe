import * as constants from './constants';

type failType = keyof typeof constants.FAIL_MESSAGE_MODAL;

interface GameMap {
  mapId: number;
  imgSrc: string;
  mapName: string;
}
