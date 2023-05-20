import { Button as MuiButton } from "@mui/material";
import styles from "./styles.module.scss";
import { IComponent } from "../types";
import classNames from "classnames";

interface IButtonProps extends IComponent {
  text?: string;
  disabled?: boolean;
  disabledWithOpacity?: boolean;
  fontSize?: number;
  onClick?: () => void;
}

const Button: React.FC<IButtonProps> = ({
  className,
  text,
  disabled,
  disabledWithOpacity,
  fontSize = 16,
  onClick,
}) => {
  return (
    <MuiButton
      id={styles["button"]}
      className={classNames(
        {
          [styles["disabled"]]: disabled || disabledWithOpacity,
          [styles["disabledWithOpacity"]]: disabledWithOpacity,
        },
        className
      )}
      sx={{ fontSize: fontSize }}
      disabled={disabled || disabledWithOpacity}
      onClick={onClick}
    >
      {text}
    </MuiButton>
  );
};

export { Button };
