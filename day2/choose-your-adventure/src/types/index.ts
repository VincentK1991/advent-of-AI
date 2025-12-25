export type Choice = {
  text: string;
  nextScenarioId: string;
};

export type Scenario = {
  id: string;
  text: string;
  isEnding: boolean;
  endingTitle?: string;
  choices?: Choice[];
};

export type Story = {
  id: string;
  title: string;
  movieTheme: string;
  description: string;
  startScenarioId: string;
  scenarios: Record<string, Scenario>;
};

export type UserState = {
  currentStoryId: string | null;
  currentScenarioId: string | null;
  choiceHistory: string[];
  completedEndings: string[];
  timestamp: number;
};
