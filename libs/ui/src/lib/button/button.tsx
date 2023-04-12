import { Button as MuiButton, ButtonProps } from "@mui/material"
export const Button = ({ children, ...rest }: ButtonProps) => (
  <MuiButton {...rest}>{children}</MuiButton>
)
