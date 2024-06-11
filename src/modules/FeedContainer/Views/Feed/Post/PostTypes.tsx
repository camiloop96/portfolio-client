import { MoodTypes } from "./FlagsContainer/FlagsContainerTypes";
import { PhotoPostTypes } from "./Types/PhotoPost/PhotoPostTypes";

interface PostDataTypes {
  type: string;
  photoLink?: PhotoPostTypes;
  hasTitle: boolean;
  title?: string;
  content: string;
  hasFlags: boolean;
  moodFlags?: MoodTypes[];
}

export interface PostTypes {
  _id: string;
  isPinned: boolean;
  postData: PostDataTypes;
  createdAt: Date;
  likes: number;
}

export interface PostPropTypes {
  dataPost: PostTypes;
}
