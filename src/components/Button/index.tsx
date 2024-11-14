import React, { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";
import variants from "./Variants.module.scss";
import sizes from "./Sizes.module.scss";
import { concatStyles } from "../../utils/concatStyles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 1 | 2 | 3;
  variant?: "default" | "outline";
}

export const Button = ({
  size = 3,
  variant = "default",
  className = "",
  ...props
}: ButtonProps) => {
  const buttonStyles = concatStyles([
    styles.button,
    sizes[`size-${size}`],
    variants[`variant-${variant}`],
    className,
  ]);

  return <button className={buttonStyles} {...props} />;
};