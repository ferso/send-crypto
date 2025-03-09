import { Button, ButtonProps } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export interface AppLinkProps extends ButtonProps {
  href: string;
  label: string;
}

export const AppBtnLink: React.FC<AppLinkProps> = (props) => {
  return (
    <Button component={RouterLink} {...props} to={props.href}>
      {props.label}
    </Button>
  );
};
