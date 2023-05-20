import { useState } from "react";
import { IModalProps } from "./types";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const props: IModalProps = {
    open: isOpen,
    onClose() {
      setIsOpen(false);
    },
  };

  return { open, isOpen: isOpen, close, props };
};

export const syncHelper = <T, K extends keyof T>(
  dispatch: any,
  areEqual: (item1: T, item2: T) => boolean,
  item: T,
  key: K,
  value: T[K],
  defaultValue?: T[K]
) => {
  dispatch((items: any) =>
    [...items].map((x) => ({
      ...x,
      [key]: areEqual(item, x) ? value : defaultValue ?? x[key],
    }))
  );
};

export const syncAllHelper = <T, K extends keyof T>(
  dispatch: any,
  key: K,
  value: T[K]
) => {
  dispatch((items: any) =>
    [...items].map((x) => ({
      ...x,
      [key]: value,
    }))
  );
};
