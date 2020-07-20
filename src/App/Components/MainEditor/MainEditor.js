import React from 'react';
import SvgCanvas from '../SvgCanvas/SvgCanvas';
import SvgSidebar from '../SvgSidebar/SvgSidebar';
import styles from './MainEditor.scss';

const MainEditor = () => {
  return (
    <div className={styles.mainEditor}>
      <SvgCanvas />
      <SvgSidebar />
    </div>
  );
};

export default MainEditor;
