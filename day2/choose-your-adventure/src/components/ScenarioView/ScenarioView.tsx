import React from 'react';
import type { Scenario } from '../../types/index';
import * as styles from './ScenarioView.css';

interface Props {
  scenario: Scenario;
  onChoice: (nextId: string) => void;
  onReset: () => void;
}

export const ScenarioView: React.FC<Props> = ({ scenario, onChoice, onReset }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <p className={styles.text}>{scenario.text}</p>
        
        <div className={styles.choiceContainer}>
          {scenario.choices?.map((choice, index) => (
            <button 
              key={index} 
              className={styles.choiceButton}
              onClick={() => onChoice(choice.nextScenarioId)}
            >
              {choice.text}
            </button>
          ))}
        </div>
        
        <button className={styles.resetButton} onClick={onReset}>
          Exit Story
        </button>
      </div>
    </div>
  );
};
