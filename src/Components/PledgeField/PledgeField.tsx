import { Box, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import { Radio } from "..";
import classNames from "classnames";
import { IComponent } from "../types";

interface IPledgeField extends IComponent {
  title?: string;
  pledge?: string;
  radio?: boolean;
  checked?: boolean;
  canHover?: boolean;
  wide?: boolean;
}

const PledgeField: React.FC<IPledgeField> = ({
  title,
  pledge,
  radio,
  checked,
  canHover,
  wide = false,
  className,
}) => {
  return (
    <Box className={classNames(styles["container"], className)}>
      {radio && <Radio checked={checked} />}
      <Typography
        className={classNames(styles["title"], {
          [styles["wide"]]: wide,
          [styles["canHover"]]: canHover,
        })}
      >
        {title} <span className={styles["pledge"]}>{pledge}</span>
      </Typography>
    </Box>
  );
};

export { PledgeField };
