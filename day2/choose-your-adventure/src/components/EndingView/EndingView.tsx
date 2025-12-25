import React from 'react';
import type { Scenario } from '../../types/index';
import * as styles from './EndingView.css';

interface Props {
  scenario: Scenario;
  onRestart: () => void;
}

export const EndingView: React.FC<Props> = ({ scenario, onRestart }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>🎁 {scenario.endingTitle}</h2>
        <p className={styles.text}>{scenario.text}</p>
        <button className={styles.button} onClick={onRestart}>
          Play Another Adventure
        </button>
      </div>
    </div>
  );
};
