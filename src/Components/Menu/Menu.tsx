import {
  List,
  ListItem,
  Typography,
  Divider as MuiDivider,
} from "@mui/material";
import styles from "./styles.module.scss";
import classNames from "classnames";

interface IMenuProps {
  vertical?: boolean;
}

const Menu: React.FC<IMenuProps> = ({ vertical }) => {
  const Divider = () => (
    <>
      {vertical && (
        <ListItem>
          <MuiDivider className={styles["divider"]} />
        </ListItem>
      )}
    </>
  );

  return (
    <List
      className={classNames(styles["container"], {
        [styles["vertical"]]: vertical,
      })}
    >
      <Item text="About" />
      <Divider />
      <Item text="Discover" />
      <Divider />
      <Item text="Get Started" />
    </List>
  );
};

const Item = ({ text }: { text: string }) => (
  <ListItem className={styles["item"]}>
    <Typography className={styles["text"]}>{text}</Typography>
  </ListItem>
);

export { Menu };
