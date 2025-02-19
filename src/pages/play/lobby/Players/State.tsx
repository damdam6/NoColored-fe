import type { Player } from '@/types/play';

import ColoredTextBox from '@/components/textbox/ColoredTextBox';

import * as constants from '@/pages/play/lobby/constants';
import { EMPTY_PLAYER_COLOR } from '@/pages/play/lobby/constants';
import * as styles from '@/pages/play/lobby/Players/index.css';

interface Props {
  player: Player;
  state: string;
}

const State = ({ player, state }: Props) => {
  if (player.color === EMPTY_PLAYER_COLOR) {
    return <div className={styles.empty}>?</div>;
  }

  return (
    <ColoredTextBox
      size='medium'
      color={player.color}
      text={state}
      icon={constants.PLAYER_ICON[player.color]}
    />
  );
};

export default State;
