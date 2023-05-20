import { List, ListItem, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import { Card, PledgeCard } from "..";
import { useContext } from "react";
import { ICardItem, IComponent } from "../types";
import { PageContext } from "../context";
import classNames from "classnames";

interface IAboutCard extends IComponent {
  onClick?: (item: ICardItem) => void;
}

const AboutCard: React.FC<IAboutCard> = ({ onClick, className }) => {
  const { items } = useContext(PageContext);

  return (
    <Card className={classNames(styles["container"], className)}>
      <Typography className={styles["title"]} variant="h1">
        About this project
      </Typography>
      <Typography className={styles["text"]}>
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </Typography>
      <Typography className={styles["text"]}>
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </Typography>
      <List className={styles["items"]}>
        {items.slice(1).map((item, key) => (
          <ListItem key={key}>
            <PledgeCard
              {...item}
              pledgeWide
              checked={false}
              onSelectReward={() => onClick?.(item)}
            />
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export { AboutCard };
