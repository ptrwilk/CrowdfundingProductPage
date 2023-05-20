import { Box, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import { IComponent } from "../types";
import classNames from "classnames";

interface IAmount extends IComponent {
  amount?: string;
  text?: string;
  horizontal?: boolean;
}

const Amount: React.FC<IAmount> = ({ amount, text, horizontal, className }) => {
  return (
    <Typography
      id={styles["Amount"]}
      className={classNames(className, {
        [styles["horizontal"]]: horizontal,
      })}
    >
      {amount}
      <span className={styles["text"]}>{text}</span>
    </Typography>
  );
};

export { Amount };
