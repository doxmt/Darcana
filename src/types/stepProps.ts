import type { SimpleDrawResult } from "../util/pick-tarot-card";
export type StepProps = {
  onNext: () => void;
};
export type DrawStepProps = StepProps & {
  onPickThreeCard: () => void;
  pickCards: SimpleDrawResult[];
};

export type ResultStepProps = {
  pickCards: SimpleDrawResult[];
  topic: string;
};

export type ThemeProps = StepProps & {
  setTopic: (topic: string) => void;
};
