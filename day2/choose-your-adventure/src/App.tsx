import { useState, useEffect } from 'react';
import { StorySelection } from './components/StorySelection/StorySelection';
import { ScenarioView } from './components/ScenarioView/ScenarioView';
import { EndingView } from './components/EndingView/EndingView';
import { stories } from './data/stories';
import { loadUserState, saveUserState, createInitialState } from './utils/localStorage';
import type { UserState } from './types/index';
import './styles/theme.css.ts';

function App() {
  const [state, setState] = useState<UserState>(() => {
    return loadUserState() || createInitialState();
  });

  useEffect(() => {
    saveUserState(state);
  }, [state]);

  const handleStorySelect = (storyId: string) => {
    const story = stories[storyId];
    if (!story) return;
    setState(prev => ({
      ...prev,
      currentStoryId: storyId,
      currentScenarioId: story.startScenarioId,
      choiceHistory: [],
    }));
  };

  const handleChoice = (nextId: string) => {
    setState(prev => ({
      ...prev,
      currentScenarioId: nextId,
      choiceHistory: [...prev.choiceHistory, nextId],
    }));
  };

  const handleReset = () => {
    setState(prev => ({
      ...prev,
      currentStoryId: null,
      currentScenarioId: null,
      choiceHistory: [],
    }));
  };

  const currentStory = state.currentStoryId ? stories[state.currentStoryId] : null;
  const currentScenarioId = state.currentScenarioId;
  const currentScenario = (currentStory && currentScenarioId) 
    ? currentStory.scenarios[currentScenarioId] 
    : null;

  return (
    <div className="app-container">
      {!state.currentStoryId && <StorySelection onSelect={handleStorySelect} />}
      
      {currentScenario && !currentScenario.isEnding && (
        <ScenarioView 
          scenario={currentScenario} 
          onChoice={handleChoice} 
          onReset={handleReset} 
        />
      )}
      
      {currentScenario && currentScenario.isEnding && (
        <EndingView 
          scenario={currentScenario} 
          onRestart={handleReset} 
        />
      )}
    </div>
  );
}

export default App;
