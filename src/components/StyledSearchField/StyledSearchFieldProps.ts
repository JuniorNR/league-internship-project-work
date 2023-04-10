export interface StyledSearchFieldProps {
  onChange: (text: string) => void;
  onReset?: () => void;
  value: string;
  placeholder?: string
}
