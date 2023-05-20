import { Box, List, ListItem, useMediaQuery } from "@mui/material";
import styles from "./styles.module.scss";
import {
  AboutCard,
  BackProjectModal,
  BackgroudImage,
  FinanceCard,
  Header,
  MastercraftCard,
  MenuModal,
  ThanksModal,
} from "../Components";
import { useModal } from "../Components/utils";
import { useContext, useEffect } from "react";
import { ICardItem } from "../Components/types";
import { PageContext } from "../Components/context";
import classNames from "classnames";

const CrowdfundingProductPage = () => {
  const backProjectModal = useModal();
  const thanksModal = useModal();
  const menuModal = useModal();

  const { update, updateAll, updateFinance, finance } = useContext(PageContext);

  const isLarge = useMediaQuery("(min-width: 550px)");

  useEffect(() => {
    if (menuModal.isOpen) {
      menuModal.close();
    }
  }, [isLarge]);

  const handleContinue = (item: ICardItem) => {
    backProjectModal.close();
    thanksModal.open();

    if (item.left) {
      update(item, "left", item.left - 1);
    }

    updateFinance({
      money:
        item.price !== undefined
          ? finance.money! + Number(item.price)
          : Number(finance.money),
      backlers: finance.backlers! + 1,
    });
  };

  const openBackProjectModal = (item?: ICardItem) => {
    if (item) {
      update(item, "checked", true, false);
    } else {
      updateAll("checked", false);
    }
    backProjectModal.open();
  };

  return (
    <>
      <BackProjectModal
        {...backProjectModal.props}
        onContinue={handleContinue}
      />
      <ThanksModal {...thanksModal.props} />
      <MenuModal {...menuModal.props}>
        <Header buttonType="close" onClick={() => menuModal.close()} />
      </MenuModal>
      <Box className={styles["container"]}>
        <BackgroudImage />
        <Box className={styles["section-main"]}>
          <Header
            showMenu={isLarge}
            visible={!menuModal.isOpen}
            onClick={() => menuModal.open()}
          />
          <List className={styles["items"]}>
            <ListItem>
              <MastercraftCard
                className={classNames(
                  styles["mastercraft-card"],
                  styles["item"]
                )}
                onClick={openBackProjectModal}
              />
            </ListItem>
            <ListItem>
              <FinanceCard className={styles["item"]} />
            </ListItem>
            <ListItem>
              <AboutCard
                className={styles["item"]}
                onClick={openBackProjectModal}
              />
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
};

export default CrowdfundingProductPage;
