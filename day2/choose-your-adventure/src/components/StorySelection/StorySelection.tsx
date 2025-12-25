import React from 'react';
import { stories } from '../../data/stories';
import * as styles from './StorySelection.css';

interface Props {
  onSelect: (storyId: string) => void;
}

export const StorySelection: React.FC<Props> = ({ onSelect }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🎄 Choose Your Christmas Adventure</h1>
      <div className={styles.grid}>
        {Object.values(stories).map(story => (
          <div key={story.id} className={styles.card}>
            <h3>{story.title}</h3>
            <p className={styles.theme}>{story.movieTheme}</p>
            <p>{story.description}</p>
            <button className={styles.button} onClick={() => onSelect(story.id)}>
              Start Adventure
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
