export interface IInputPasswordModalProps {
  goToNotes: () => void;
}

export interface IInputPasswordModalRef {
  open: () => void;
  close: () => void;
}

export interface IShowIcon {
  isShow: boolean;
  onPress: (value: boolean) => void;
}
