import styles from "./styles.module.scss";
import { Bookmark, Button, Card } from "..";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { LogoMastercraft } from "../../assets";
import { IComponent } from "../types";
import classNames from "classnames";
import { useContext } from "react";
import { PageContext } from "../context";

interface IMastercraftCardProps extends IComponent {
  onClick?: () => void;
}

const MastercraftCard: React.FC<IMastercraftCardProps> = ({
  className,
  onClick,
}) => {
  const { bookmarked, updateBookmark } = useContext(PageContext);

  const isLarge = useMediaQuery("(min-width: 500px)");

  return (
    <Card className={classNames(styles["container"], className)}>
      <img className={styles["img-logo-mc"]} src={LogoMastercraft} />
      <Typography className={styles["title"]} variant="h1">
        Mastercraft Bamboo Monitor Riser
      </Typography>
      <Typography className={styles["text"]}>
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </Typography>
      <Box className={styles["items"]}>
        <Button
          className={styles["btn"]}
          text="Back this project"
          onClick={onClick}
        />
        <Bookmark
          wide={isLarge}
          bookmarked={bookmarked}
          onClick={() => updateBookmark(!bookmarked)}
        />
      </Box>
    </Card>
  );
};

export { MastercraftCard };
