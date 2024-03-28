import { create } from 'zustand';

interface CollectionState {
  skinId: number;
  skinUrl: string;
  labelId: number;
  setSkinId: (id: number) => void;
  setSkinUrl: (url: string) => void;
  setLabel: (id: number) => void;
}

export const useCollectionStateStore = create<CollectionState>((set) => ({
  skinId: -1,
  labelId: -1,
  skinUrl:
    'https://nocolored.s3.ap-northeast-2.amazonaws.com/character-240px-sheet-basicblue.png',
  setSkinId: (id: number) => {
    set({ skinId: id });
  },
  setSkinUrl: (url: string) => {
    set({ skinUrl: url });
  },
  setLabel: (id: number) => {
    set({ labelId: id });
  },
}));
