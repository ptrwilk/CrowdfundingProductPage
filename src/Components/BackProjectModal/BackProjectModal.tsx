import {
  Box,
  IconButton,
  List,
  ListItem,
  Modal,
  Typography,
} from "@mui/material";
import styles from "./styles.module.scss";
import { PledgeCard } from "..";
import { IconCloseModal } from "../../assets";
import { useContext, useEffect, useState } from "react";
import { ICardItem, IModalProps } from "../types";
import { syncHelper } from "../utils";
import { PageContext } from "../context";

interface IBackProjectModalProps extends IModalProps {
  onContinue?: (item: ICardItem) => void;
}

const BackProjectModal: React.FC<IBackProjectModalProps> = ({
  open = false,
  onClose,
  onContinue,
}) => {
  const { items: data } = useContext(PageContext);

  const [items, setItems] = useState<ICardItem[]>([]);

  useEffect(() => {
    setItems(data);
  }, [open]);

  const handleClick = (item: ICardItem) => {
    update(item, "checked", true, false);
  };

  const update = (
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
    );

  const handleValueChange = (item: ICardItem, value?: number) =>
    update(item, "price", value);

  return (
    <Modal className={styles["container"]} open={open}>
      <Box className={styles["section"]}>
        <Typography className={styles["title"]} variant="h1">
          Back this project
        </Typography>
        <IconButton className={styles["btn"]} onClick={onClose}>
          <img src={IconCloseModal} />
        </IconButton>
        <Typography className={styles["text"]}>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </Typography>
        <List className={styles["items"]}>
          {items.map((item, key) => (
            <ListItem key={key}>
              <PledgeCard
                {...item}
                hasLeftOnTop
                clickable
                hasReward={false}
                hasInput={!!item.pledge && item.checked}
                hasLeft={!!item.pledge}
                hasContinue={item.pledge === undefined && item.checked}
                canHover={!item.disabled}
                hasRadio
                onClick={() => handleClick(item)}
                value={item.price}
                onContinue={() => onContinue?.(item)}
                onValueChange={(value) => handleValueChange(item, value)}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Modal>
  );
};

export { BackProjectModal };
