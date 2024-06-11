export interface ITitleContainerProps {
  titleSelected: string;
  setTitleSelected: (title: string) => void;
}

export interface ITitleItemProps {
  item: ITitleItem;
  titleSelected: string;
  onSelect: (e: React.MouseEvent<HTMLButtonElement>, title: string) => void;
}

export interface ITitleItem {
  id: string;
  title: string;
}
