export interface IComponent {
  className?: string;
}

export interface IModalProps {
  open?: boolean;
  onClose?: () => void;
}

export interface ICardItem {
  title: string;
  pledge?: string;
  text: string;
  checked?: boolean;
  left?: number;
  disabled?: boolean;
  price?: number;
  minValue?: number;
}

export interface IFinance {
  money?: number;
  backlers?: number;
}
