import {
  Divider as MuiDivider,
  List,
  ListItem,
  Box,
  useMediaQuery,
} from "@mui/material";
import styles from "./styles.module.scss";
import { Amount, Card, Progress } from "..";
import { useContext } from "react";
import { PageContext } from "../context";
import { IComponent } from "../types";
import classNames from "classnames";

const FinanceCard: React.FC<IComponent> = ({ className }) => {
  const { finance } = useContext(PageContext);

  const isLarge = useMediaQuery("(min-width: 768px)");

  const Item = ({ amount, text }: { amount: string; text: string }) => (
    <ListItem>
      <Amount amount={amount} text={text} />
    </ListItem>
  );

  const Divider = () => (
    <ListItem>
      {isLarge ? (
        <Box className={styles["divider-vertical"]}></Box>
      ) : (
        <MuiDivider />
      )}
    </ListItem>
  );

  return (
    <Card className={classNames(styles["container"], className)}>
      <List className={styles["items"]}>
        <Item
          amount={`$${finance.money?.toLocaleString("en-US")}`}
          text="of $100,000 backed"
        />
        <Divider />
        <Item
          amount={`${finance.backlers?.toLocaleString("en-US")}`}
          text="total backers"
        />
        <Divider />
        <Item amount="56" text="days left" />
      </List>
      <Progress
        className={styles["progress"]}
        progress={finance.money! / 100000}
      />
    </Card>
  );
};

export { FinanceCard };
