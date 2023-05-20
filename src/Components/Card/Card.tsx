import { Box } from "@mui/material";
import styles from "./styles.module.scss";
import { IComponent } from "../types";
import classNames from "classnames";

interface ICardProps extends IComponent {
  children: any;
  selected?: boolean;
  onClick?: () => void;
  clickable?: boolean;
}

const Card: React.FC<ICardProps> = ({
  className,
  children,
  selected,
  clickable,
  onClick,
}) => {
  return (
    <Box
      className={classNames(styles["container"], className, {
        [styles["selected"]]: selected,
        [styles["clickable"]]: clickable,
      })}
      onClick={clickable ? onClick : undefined}
    >
      {children}
    </Box>
  );
};

export { Card };
