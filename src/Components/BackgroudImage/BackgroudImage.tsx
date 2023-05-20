import { Box, useMediaQuery } from "@mui/material";
import styles from "./styles.module.scss";
import { ImageHeroDesktop, ImageHeroMobile } from "../../assets";

const BackgroudImage = () => {
  const isLarge = useMediaQuery("(min-width: 1000px)");

  return (
    <img
      className={styles["img-hero"]}
      src={isLarge ? ImageHeroDesktop : ImageHeroMobile}
    />
  );
};

export { BackgroudImage };
