import { Box, IconButton } from "@mui/material";
import styles from "./styles.module.scss";
import { IconCloseMenu, IconHamburger, Logo } from "../../assets";
import classNames from "classnames";
import { Menu } from "..";

interface IHeaderProps {
  buttonType?: "hamburger" | "close";
  onClick?: () => void;
  visible?: boolean;
  showMenu?: boolean;
}

const Header: React.FC<IHeaderProps> = ({
  buttonType = "hamburger",
  visible = true,
  onClick,
  showMenu,
}) => {
  return (
    <Box
      className={classNames(styles["container"], {
        [styles["not-visible"]]: !visible,
      })}
    >
      <img src={Logo} />
      {showMenu ? (
        <Menu />
      ) : (
        <IconButton onClick={onClick}>
          <img
            src={buttonType === "hamburger" ? IconHamburger : IconCloseMenu}
          />
        </IconButton>
      )}
    </Box>
  );
};

export { Header };
