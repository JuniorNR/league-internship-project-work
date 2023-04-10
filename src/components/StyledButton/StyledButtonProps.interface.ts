export interface StyledButtonProps {
  children: string | JSX.Element | JSX.Element[],
  onClick?: () => void
  type?: "button" | "submit" | "reset",
  variant?: "primary",
  width?: string,
  fontSize?: string
}
