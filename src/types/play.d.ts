import type { playerColorType } from '@/pages/play/lobby/types';
import type { tierRange } from '@/pages/ranking/types';

interface Player {
  userCode: string;
  nickname: string;
  tier: tierRange;
  skin: string;
  label: string;
  ready: boolean;
  isMaster: boolean;
  color: playerColorType;
  key: string;
}

interface Room {
  roomTitle: string;
  mapId: number;
}

export interface CreateRoom extends Room {
  roomPassword: string;
}

interface CodeRoom extends Room {
  roomCode: string;
  roomPassword: string;
}

interface RoomListItem extends CodeRoom {
  userNumber: number;
}

interface Lobby extends CodeRoom {
  roomUuid: string;
  masterIndex: number;
  readyState: boolean[];
  players: Player[];
}

interface RequestEnterRoom {
  roomCode: string;
  roomPassword: string;
}
