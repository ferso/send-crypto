// material-ui.d.ts
import {
  PaletteOptions,
  PaletteColorOptions,
  Palette,
  SimplePaletteColorOptions,
  ColorPartial,
} from "@mui/material/styles/createPalette";
import "@mui/material/styles";

declare module "@mui/material/styles/createPalette" {
  export interface TypeBackground {
    default: string;
    paper: string;
    transparent: string;
    gradient: string;
    accent: string;
  }
}

declare module "@mui/material/styles" {
  interface PaletteColor {
    gradient?: string;
  }
  interface SimplePaletteColorOptions {
    gradient?: string;
  }
}

export {};
