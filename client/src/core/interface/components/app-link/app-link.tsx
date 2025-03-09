import { SxProps } from "@mui/material";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

export interface AppLinkProps {
  href: string;
  label: string;
  children?: React.ReactNode;
  sx?: SxProps;
}

export const AppLink: React.FC<AppLinkProps> = (props) => {
  return (
    <Link component={RouterLink} to={props.href} sx={props.sx}>
      {props.label}
    </Link>
  );
};
