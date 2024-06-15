export interface PhotoPostTypes {
  source?: string;
  alt?: string;
}

export interface PhotoPostPropTypes {
  photo: PhotoPostTypes | undefined;
}
