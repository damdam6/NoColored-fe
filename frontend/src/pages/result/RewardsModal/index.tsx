import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import type { TierReward } from '@/types/result';

import SkinReward from '@/pages/result/RewardsModal/SkinReward';
import TierUpgrade from '@/pages/result/RewardsModal/TierUpgrade';

import { ROUTE } from '@/router/constants';

interface Props {
  tier?: TierReward;
  skin?: string[];
  closeModal: () => void;
}

export const RewardsModal = ({ tier, skin, closeModal }: Props) => {
  const [showTier, setShowTier] = useState<boolean>(false);
  const [showSkin, setShowSkin] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (tier) {
      setShowTier(true);
    } else if (skin) {
      setShowSkin(true);
    }
  }, []);

  const handleTierClose = () => {
    if (skin) {
      setShowSkin(true);
    } else {
      navigate(ROUTE.home);
      closeModal();
    }
    setShowTier(false);
  };

  const handleSkinClose = () => {
    setShowSkin(false);
    navigate(ROUTE.home);
    closeModal();
  };

  return (
    <>
      {tier && showTier && (
        <TierUpgrade closeModal={handleTierClose} tier={tier} />
      )}
      {skin && showSkin && !showTier && (
        <SkinReward closeModal={handleSkinClose} skin={skin} />
      )}
    </>
  );
};
