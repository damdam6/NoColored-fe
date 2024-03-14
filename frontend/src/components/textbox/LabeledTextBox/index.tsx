import * as styles from './index.css.ts';

import type { LabeledTextboxProps } from '@/components/textbox/types.d.ts';

const LabeledTextBox = ({
  labelColor,
  contentColor,
  labelText,
  contentText,
}: LabeledTextboxProps) => {
  return (
    <div>
      <div
        className={styles.textStyle({
          textPosition: 'label',
          color: labelColor,
        })}
      >
        {labelText}
      </div>
      <div
        className={styles.textStyle({
          textPosition: 'title',
          color: contentColor,
        })}
      >
        {contentText}
      </div>
    </div>
  );
};

export default LabeledTextBox;
