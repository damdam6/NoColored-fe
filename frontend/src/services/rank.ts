import type { RankInfo, RankPlayer } from '@/types/rank';

import { getUser } from '@/services/auth';
import { api } from '@/services/index';

const requestRankList = async () => {
  return api
    .get<RankInfo>(true, 'rank/list')
    .then((res) => {
      console.log(res.data);
      return res.data.players;
    })
    .catch((error) => {
      console.log(error);
      return [] as RankPlayer[];
    });
};

export const getRank = async () => {
  try {
    const rankList = await requestRankList();
    const myRank = await getUser();

    return { rankList, myRank };
  } catch (error) {
    console.log(error);
    return '';
  }
};
