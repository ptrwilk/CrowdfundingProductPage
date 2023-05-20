import { syncAllHelper, syncHelper } from "./utils";
import { createContext, useState } from "react";
import { ICardItem, IFinance } from "./types";
import data from "../data.json";

interface IPageContextProps {
  items: ICardItem[];
  finance: IFinance;
  bookmarked: boolean;
  update: (
    item: ICardItem,
    key: keyof ICardItem,
    value: ICardItem[keyof ICardItem],
    defaultValue?: ICardItem[keyof ICardItem]
  ) => void;
  updateAll: (key: keyof ICardItem, value: ICardItem[keyof ICardItem]) => void;
  updateFinance: (finance: IFinance) => void;
  updateBookmark: (bookmarked: boolean) => void;
}

export const PageContext = createContext<IPageContextProps>({
  items: [],
  finance: {},
  bookmarked: false,
  update() {},
  updateAll() {},
  updateFinance() {},
  updateBookmark() {},
});

export const usePageContext = () => {
  const [items, setItems] = useState(data.cards);
  const [finance, setFinance] = useState<IFinance>(data.finance);
  const [bookmarked, setBookmarked] = useState(false);

  return {
    items,
    finance,
    bookmarked,
    update: (
      item: ICardItem,
      key: keyof ICardItem,
      value: ICardItem[keyof ICardItem],
      defaultValue?: ICardItem[keyof ICardItem]
    ) =>
      syncHelper(
        setItems,
        (item1, item2) => item1.title === item2.title,
        item,
        key,
        value,
        defaultValue
      ),
    updateAll: (key: keyof ICardItem, value: ICardItem[keyof ICardItem]) =>
      syncAllHelper<ICardItem, keyof ICardItem>(setItems, key, value),
    updateFinance(finance: IFinance) {
      setFinance(finance);
    },
    updateBookmark(bookmarked: boolean) {
      setBookmarked(bookmarked);
    },
  };
};
