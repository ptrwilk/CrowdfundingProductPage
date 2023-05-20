import { Box, Divider, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import { Amount, Button, Card, InputField, PledgeField } from "..";
import classNames from "classnames";

interface IPledgeCardProps {
  title: string;
  pledge?: string;
  text: string;
  left?: number;
  disabled?: boolean;
  hasInput?: boolean;
  hasRadio?: boolean;
  hasReward?: boolean;
  hasContinue?: boolean;
  hasLeftOnTop?: boolean;
  hasLeft?: boolean;
  value?: number;
  pledgeWide?: boolean;
  checked?: boolean;
  clickable?: boolean;
  minValue?: number;
  canHover?: boolean;
  onClick?: () => void;
  onSelectReward?: () => void;
  onContinue?: () => void;
  onValueChange?: (value: number) => void;
}

const PledgeCard: React.FC<IPledgeCardProps> = ({
  title,
  pledge,
  text,
  left,
  disabled,
  hasInput,
  hasRadio,
  hasReward = true,
  hasLeft = true,
  hasContinue = false,
  hasLeftOnTop = false,
  value,
  checked,
  clickable,
  minValue,
  pledgeWide,
  canHover,
  onSelectReward,
  onClick,
  onContinue,
  onValueChange,
}) => {
  return (
    <Card
      className={classNames(styles["container"], {
        [styles["disabled"]]: disabled,
      })}
      selected={checked}
      clickable={!checked && !disabled && clickable}
      onClick={disabled || checked ? undefined : onClick}
    >
      <Box
        className={classNames(styles["section-top"], {
          [styles["hasLeftOnTop"]]: hasLeftOnTop,
        })}
      >
        <PledgeField
          className={styles["pledge-field"]}
          wide={pledgeWide}
          canHover={canHover}
          radio={hasRadio}
          title={title}
          pledge={pledge}
          checked={checked}
        />
        <Typography className={styles["text"]}>{text}</Typography>
        {hasLeft && (
          <Amount
            className={styles["amount"]}
            horizontal
            amount={left?.toString()}
            text="left"
          />
        )}
        {hasReward && (
          <Button
            className={styles["btn-reward"]}
            disabled={disabled}
            text={disabled ? "Out of Stock" : "Select Reward"}
            onClick={disabled ? undefined : onSelectReward}
          />
        )}
        {hasContinue && (
          <Box className={styles["btn-continue-container"]}>
            <Button
              className={styles["btn-continue"]}
              text="Continue"
              fontSize={13}
              onClick={onContinue}
            />
          </Box>
        )}
      </Box>
      {hasInput && (
        <PledgeArea
          value={value}
          minValue={minValue}
          onValueChange={onValueChange}
          onClick={onContinue}
        />
      )}
    </Card>
  );
};

const PledgeArea = ({
  value,
  minValue,
  ...props
}: {
  value?: number;
  minValue?: number;
  [key: string]: any;
}) => {
  return (
    <Box className={styles["pledge-area-container"]}>
      <Divider />
      <Box className={styles["section-pledge-area"]}>
        <Typography className={styles["text"]}>Enter your pledge</Typography>
        <InputField
          className={styles["input-field"]}
          {...props}
          value={value}
          maxLength={4}
          allowDecimal={false}
        />
        <Button
          className={styles["btn-continue"]}
          {...props}
          text="Continue"
          fontSize={13}
          disabledWithOpacity={
            value && minValue
              ? value < minValue
              : value === undefined
              ? true
              : false
          }
        />
      </Box>
    </Box>
  );
};

export { PledgeCard };
