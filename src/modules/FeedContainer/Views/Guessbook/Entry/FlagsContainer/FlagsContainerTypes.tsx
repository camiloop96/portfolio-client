export interface MoodTypes {
  _id: string;
  emoji: string;
  flagTitle: string;
  color: string;
  backgroundColor: string;
}

export interface FlagsContainerPropTypes {
  hasFlags?: boolean;
  moodFlags?: MoodTypes[];
}
