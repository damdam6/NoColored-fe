import * as styles from './index.css';

import BasicContentFrame from '@/components/BasicContentFrame/WithButtons';

import AudioSetting from '@/pages/settings/AudioSetting';
import GuestUser from '@/pages/settings/GuestUser';
import LoginUser from '@/pages/settings/LoginUser';

import { useUserStateStore } from '@/states/user';

const Settings = () => {
  const user = useUserStateStore((state) => state.user);
  const isGuest = user ? user.guest : true;

  return (
    <BasicContentFrame backButtonLabel='뒤로'>
      <div className={styles.centerBoxWrapper}>
        <div className={styles.title}>설정</div>
        <AudioSetting />
        {isGuest ? <GuestUser /> : <LoginUser />}
      </div>
    </BasicContentFrame>
  );
};

export default Settings;
