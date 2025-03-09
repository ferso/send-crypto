import { Typography } from "@mui/material";

export interface ScreenTitleProps {
  title: string;
}
export const ScreenTitle: React.FC<ScreenTitleProps> = (props) => {
  return <Typography variant="h4">{props.title}</Typography>;
};
