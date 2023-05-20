import { Box, InputAdornment, Typography, styled } from "@mui/material";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsd } from "@fortawesome/free-solid-svg-icons";

const font = "var(--verydarkcyan)";
const primary = "hsl(0, 0%, 48%, 0.2)";
const secondary = "hsl(176, 50%, 47%)";
const errorColor = "var(--red)";

const TextFieldStyled = styled(TextField)<TextFieldProps>(({ disabled }) => ({
  width: "100%",
  ".MuiOutlinedInput-root": {
    height: "100%",
    color: font,
    "&:hover fieldset": {
      borderColor: secondary,
    },
    "&.Mui-focused fieldset": {
      borderColor: secondary,
    },
    "&.Mui-error fieldset": {
      borderColor: errorColor,
    },
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: primary,
      borderWidth: 2,
      borderRadius: "2rem",
    },
    ".MuiOutlinedInput-input": {
      // padding: `0.8rem 0.1rem`,
      fontWeight: 700,
      "::placeholder": {
        opacity: 0.7,
      },
      cursor: disabled ? "not-allowed" : undefined,
    },
  },
}));

export interface IInputFieldProps {
  className?: string;
  value?: any;
  onValueChange?: (value?: any) => void;
  caption?: string;
  error?: boolean;
  errorMessage?: string;
  placeholder?: string;
  maxLength?: number;
  icon?: any;
  disabled?: boolean;
  allowDecimal?: boolean;
}

const DecimalPoints: number = 2;

const isNumber = (text: any, allowDecimal: boolean) => {
  const decimalPointsRegex = new RegExp(`^\\d*\\.?\\d{0,${DecimalPoints}}$`);

  return allowDecimal
    ? !isNaN(text) &&
        !/\s+/.test(text) &&
        decimalPointsRegex.test(text) &&
        parseFloat(text) >= 0
    : !isNaN(text) && !/\s+|\./.test(text) && parseFloat(text) >= 0;
};

const hasDecimalPoint = (text: any) => text.includes(".");

const InputField: React.FC<IInputFieldProps> = ({
  className,
  value,
  caption,
  error,
  errorMessage,
  placeholder,
  maxLength = 10,
  allowDecimal = true,
  disabled = false,
  onValueChange,
}) => {
  const handleValueChange = (text?: any) => {
    if (text === "") {
      onValueChange?.(undefined);
    } else if (
      (text?.length ?? 0) <=
        (hasDecimalPoint(text) ? maxLength + DecimalPoints + 1 : maxLength) &&
      isNumber(text, allowDecimal)
    ) {
      onValueChange?.(text);
    }
  };

  return (
    <Box
      sx={{ height: "100%" }}
      className={classNames(styles["container"], className)}
    >
      {caption && (
        <Typography className={styles["caption"]}>{caption}</Typography>
      )}
      {error && (
        <Typography className={styles["error"]}>{errorMessage}</Typography>
      )}
      <TextFieldStyled
        disabled={disabled}
        InputProps={{
          style: { fontSize: 14 },
          startAdornment: (
            <InputAdornment
              position="start"
              sx={{ paddingLeft: "0.7rem", marginTop: "3px" }}
            >
              <FontAwesomeIcon icon={faUsd} size={"sm"} opacity={0.5} />
            </InputAdornment>
          ),
        }}
        placeholder={placeholder}
        value={value?.toString() ?? ""}
        error={error}
        onChange={(e) => {
          handleValueChange(e.target.value);
        }}
      />
    </Box>
  );
};

export { InputField };
