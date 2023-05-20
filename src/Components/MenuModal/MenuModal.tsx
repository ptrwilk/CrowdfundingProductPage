import { Box, Modal } from "@mui/material";
import styles from "./styles.module.scss";
import { IModalProps } from "../types";
import { Menu } from "..";

interface IMenuModalProps extends IModalProps {
  children?: any;
}

const MenuModal: React.FC<IMenuModalProps> = ({
  open = false,
  children,
  onClose,
}) => {
  return (
    <Modal className={styles["container"]} open={open} onClose={onClose}>
      <Box className={styles["section"]}>
        <Box className={styles["section-top"]}>{children}</Box>
        <Box className={styles["section-bottom"]}>
          <Menu vertical />
        </Box>
      </Box>
    </Modal>
  );
};

export { MenuModal };
