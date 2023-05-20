import { Box } from "@mui/material";
import styles from "./styles.module.scss";
import { IComponent } from "../types";
import classNames from "classnames";

interface IProgress extends IComponent {
  progress?: number;
}

const Progress: React.FC<IProgress> = ({ className, progress = 0 }) => {
  return (
    <Box className={classNames(styles["container"], className)}>
      <Box
        className={styles["inside"]}
        width={`${progress > 1 ? 1 * 100 : progress * 100}%`}
      />
    </Box>
  );
};

export { Progress };
