import { Box, IconButton, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import {
  IconBookmark,
  IconBookmarkHovered,
  IconBookmarkSelected,
} from "../../assets";
import { useState } from "react";
import classNames from "classnames";

interface IBookmarkProps {
  wide?: boolean;
  bookmarked?: boolean;
  onClick?: () => void;
}

const Bookmark: React.FC<IBookmarkProps> = ({
  wide = false,
  bookmarked = false,
  onClick,
}) => {
  const [hover, setHover] = useState(false);

  return (
    <Box
      className={styles["container"]}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <IconButton sx={{ padding: 0 }}>
        <img
          src={
            hover
              ? IconBookmarkHovered
              : bookmarked
              ? IconBookmarkSelected
              : IconBookmark
          }
        />
      </IconButton>
      {wide && (
        <Typography
          className={classNames(styles["text"], {
            [styles["bookmarked"]]: bookmarked,
          })}
        >
          {bookmarked ? "Bookmarked" : "Bookmark"}
        </Typography>
      )}
    </Box>
  );
};

export { Bookmark };
