import React, {useRef, useState, useCallback} from 'react';

import  Button from '@ra/components/Button';
import Popup from '@ra/components/Popup';

import styles from './styles.module.scss';

export default {
  title: 'Components/Popup',
  component: Popup,
};

export const Story  =  (args) => {
  const [showPopup, setShowPopup] = useState(false);
  const ref = useRef();

  const handleClick = useCallback(()  => {
    setShowPopup(!showPopup);
  });

  return (
    <>
      <Button ref={ref} onClick={handleClick}>
        checking
      </Button>
      <Popup className={styles.popup} isVisible={showPopup} anchor={ref} onClose={handleClick} {...args}>
        <div>
          test
        </div>
      </Popup>
    </>
  );
};

Story.storyName = 'Popup';

Story.args  = {
  closeOnOutsideClick: true,
  anchorOrigin: 'center left',
  transformOrigin: 'center left',
};

Story.argTypes = {
    isVisible: { control: false },
};
