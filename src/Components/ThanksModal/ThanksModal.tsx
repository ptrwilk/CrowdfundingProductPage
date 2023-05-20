import { Box, Modal, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import { IconCheck } from "../../assets";
import { Button } from "..";
import { IModalProps } from "../types";

const ThanksModal: React.FC<IModalProps> = ({ open = false, onClose }) => {
  return (
    <Modal className={styles["container"]} open={open}>
      <Box className={styles["section"]}>
        <img src={IconCheck} />
        <Typography className={styles["title"]}>
          Thanks for your support!
        </Typography>
        <Typography className={styles["text"]}>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </Typography>
        <Button className={styles["btn"]} text="Got it!" onClick={onClose} />
      </Box>
    </Modal>
  );
};

export { ThanksModal };
