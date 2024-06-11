import { MoodTypes } from "./FlagsContainer/FlagsContainerTypes";

interface PostDataTypes {
  type: string;
  hasTitle: boolean;
  title?: {
    english: string;
    spanish: string;
  };
  message: {
    english: string;
    spanish: string;
  };
  hasFlags: boolean;
  moodFlags?: MoodTypes[];
}

export interface EntryTypes {
  _id: string;
  pinned: boolean;
  postData: PostDataTypes;
  createdAt: Date;
  guest: {
    isGuest: boolean;
    avatar?: string;
    name?: string;
  };
}

export interface EntryPropTypes {
  dataPost: EntryTypes;
}
