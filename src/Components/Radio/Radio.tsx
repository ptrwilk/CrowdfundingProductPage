import { Radio as MuiRadio } from "@mui/material";
import styles from "./styles.module.scss";

interface IRadioProps {
  checked?: boolean;
}

const Radio: React.FC<IRadioProps> = ({ checked }) => {
  return (
    <MuiRadio
      className={styles["container"]}
      sx={{ p: 0 }}
      checked={checked ?? false}
    ></MuiRadio>
  );
};

export { Radio };
