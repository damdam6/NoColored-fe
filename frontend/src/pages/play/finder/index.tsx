import { useEffect, useState } from 'react';

import * as styles from './index.css';
import SearchLobby from './Modal/SearchLobby/index';

import type { RoomListInfo } from '@/types/play';

import BasicContentFrame from '@/components/BasicContentFrame/WithButtons';
import ColoredButton from '@/components/button/ColoredButton';
import SettingTextButton from '@/components/button/SettingTextButton';

import LobbyItem from '@/pages/play/finder/LobbyItem';
import CreateLobby from '@/pages/play/finder/Modal/CreateLobby';

import { getRoomList } from '@/services/finder';

const Finder = () => {
  const [roomList, setRoomList] = useState<RoomListInfo>();

  // 이거 데이터 제대로 안 받아와져서 곤란티비임. 내일 백엔드랑 이야기 해보기. {offest}에 대해
  const list = async () => {
    const data = await getRoomList();
    if (data) {
      setRoomList(data);
      console.log(roomList);
    } else {
      console.log('방 정보를 가져오는 데 실패했습니다.');
    }
  };

  list();

  const exampleData = [
    {
      lobbyTitle: '로비이름최대아글',
      playerCount: 4,
      imgSrc: '/images/map/background/foodmap.png',
    },
    {
      lobbyTitle: '로비이름최대아홉글',
      playerCount: 1,
      imgSrc: '/images/map/background/foodmap.png',
    },
    {
      lobbyTitle: '로비이름최',
      playerCount: 1,
      imgSrc: '/images/map/background/foodmap.png',
    },
    {
      lobbyTitle: '로비이름최대아',
      playerCount: 2,
      imgSrc: '/images/map/background/foodmap.png',
    },
    {
      lobbyTitle: '로비이름아홉글',
      playerCount: 1,
      imgSrc: '/images/map/background/foodmap.png',
    },
    {
      lobbyTitle: '로비이대아홉글',
      playerCount: 1,
      imgSrc: '/images/map/background/foodmap.png',
    },
  ];

  const [index, setIndex] = useState<number>(1);

  // 최대페이지 값 설정하기
  const [maxIndex, setMaxIndex] = useState<number>(1);

  const [data] = useState<
    {
      lobbyTitle: string;
      playerCount: number;
      imgSrc: string;
    }[]
  >(exampleData); // [
  const addIndex = () => {
    setIndex(index + 1);
  };
  const subIndex = () => {
    setIndex(index - 1);
  };

  useEffect(() => {
    setMaxIndex(1);
    // 이부분은 서버에서 데이터 받아오는 부분으로 대체해야함
    // 구조는 짜기 나름
  }, []);

  return (
    <BasicContentFrame>
      <div className={styles.contentWrapper}>
        <div className={styles.topButtonsWrapper}>
          <span className={styles.rightButtonsWrapper}>
            <SearchLobby />
            <CreateLobby />
          </span>
          <ColoredButton
            size='xsmall'
            text='새로고침'
            color='blue'
            onClick={() => {}}
          />
        </div>
        <div className={styles.partyListWrapper}>
          {data.map((item) => (
            <LobbyItem
              // key도 바꿔줘야됨
              key={`${item.lobbyTitle}-${index}`}
              lobbyTitle={item.lobbyTitle}
              playerCount={item.playerCount}
              imgSrc={item.imgSrc}
            />
          ))}
        </div>
        <div className={styles.bottomButtonsWrapper}>
          <SettingTextButton
            size='xsmall'
            colorStyle={index === 1 ? 'gray' : 'black'}
            onClick={index === 1 ? () => {} : addIndex}
          >
            {`<`}
          </SettingTextButton>
          <SettingTextButton
            size='xsmall'
            colorStyle='black'
            onClick={() => {}}
          >
            {index}
          </SettingTextButton>
          <SettingTextButton
            size='xsmall'
            colorStyle={index === maxIndex ? 'gray' : 'black'}
            onClick={index === maxIndex ? () => {} : subIndex}
          >
            {`>`}
          </SettingTextButton>
        </div>
      </div>
    </BasicContentFrame>
  );
};
export default Finder;
