import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import * as styles from './index.css';

import { User } from '@/types/auth';

import BasicContentFrame from '@/components/BasicContentFrame/WithButtons';
import SettingTextButton from '@/components/button/SettingTextButton';

import Achievement from '@/pages/collection/Achievement';
import Label from '@/pages/collection/Label';
import Skin from '@/pages/collection/Skin';

import { patchLabelChange, patchSkinChange } from '@/services/collections';

import { useCollectionStateStore } from '@/states/collection';

const Collection = () => {
  const { skinId, skinUrl, labelId } = useCollectionStateStore();
  const [selectedCategory, setSelectedCategory] = useState<string>('skin');
  const user = useLoaderData() as User;

  const renderComponent = () => {
    switch (selectedCategory) {
      case 'skin':
        return <Skin />;
      case 'label':
        return <Label />;
      case 'achievement':
        return <Achievement />;
      default:
        return <Skin />;
    }
  };

  const categorySubmit = async () => {
    if (selectedCategory === 'skin') {
      await patchSkinChange(skinId);
    }
    if (selectedCategory === 'label') {
      await patchLabelChange(labelId);
    }
  };

  return (
    <BasicContentFrame backButtonLabel='뒤로'>
      <div className={styles.categoryButton}>
        <SettingTextButton
          onClick={() => setSelectedCategory('skin')}
          size='small'
          colorStyle={selectedCategory === 'skin' ? 'black' : 'realDark'}
        >
          스킨
        </SettingTextButton>
        <SettingTextButton
          onClick={() => setSelectedCategory('label')}
          size='small'
          colorStyle={selectedCategory === 'label' ? 'black' : 'realDark'}
        >
          칭호
        </SettingTextButton>
        <SettingTextButton
          onClick={() => setSelectedCategory('achievement')}
          size='small'
          colorStyle={selectedCategory === 'achievement' ? 'black' : 'realDark'}
        >
          업적
        </SettingTextButton>
      </div>
      <div className={styles.componentWrapper}>
        <div className={styles.firstComponentStyle}>
          <div
            style={{
              backgroundImage: `url(${skinUrl})`,
            }}
            className={styles.CharacterBox}
          >
            <span className={styles.titleText}>{`< ${user?.label} >`}</span>
          </div>
          <div className={styles.submitButtonWrapper}>
            {selectedCategory !== 'achievement' && (
              <SettingTextButton
                onClick={categorySubmit}
                size='small'
                colorStyle='black'
              >
                저장
              </SettingTextButton>
            )}
          </div>
        </div>
        <div className={styles.secondComponentStyle}>{renderComponent()}</div>
      </div>
    </BasicContentFrame>
  );
};

export default Collection;
