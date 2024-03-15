import * as styles from './index.css';

import RoundCornerImageBox from '@/components/imagebox/RoundCornerImageBox';
import { PlayerInfoBoxProps } from '@/components/PlayerInfoBox/types';
import LabeledTextBox from '@/components/textbox/LabeledTextBox';

const PlayerInfoBox = ({ label, nickname, imgSrc }: PlayerInfoBoxProps) => {
  return (
    <div className={styles.playerInfoWrapper}>
      <RoundCornerImageBox size='small' imgSrc={imgSrc} />
      <LabeledTextBox contentText={nickname} labelText={label} />
    </div>
  );
};

export default PlayerInfoBox;
