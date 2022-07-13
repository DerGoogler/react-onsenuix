import { BackButtonProps } from "./components/BackButton";
import { BottomToolbarProps } from "./components/BottomToolbar";
import { ButtonProps } from "./components/Button";
import { CardProps } from "./components/Card";
import { FabProps } from "./components/Fab";
import { IconProps } from "./components/Icon";
import { ListItemProps, ListProps } from "./components/List";
import { PageProps } from "./components/Page";
import { SpeedDialItemProps, SpeedDialProps } from "./components/SpeedDial";
import { ToolbarProps } from "./components/Toolbar";
import { ToolbarButtonProps } from "./components/ToolbarButton";

import { DefineProps } from "./utils/DefineProps";

export = {};

declare global {
  type func = Function;
  type bool = boolean;

  interface Function {
    readonly name: string;
  }

  namespace JSX {
    interface IntrinsicElements {
      "ons-page": DefineProps<PageProps, HTMLElement>;
      "ons-button": DefineProps<ButtonProps, HTMLElement>;
      "ons-card": DefineProps<CardProps, HTMLElement>;
      "ons-toolbar": DefineProps<ToolbarProps, HTMLElement>;
      "ons-toolbar-button": DefineProps<ToolbarButtonProps, HTMLElement>;
      "ons-back-button": DefineProps<BackButtonProps, HTMLElement>;
      "ons-list": DefineProps<ListProps, HTMLElement>;
      "ons-list-title": DefineProps<any, HTMLElement>;
      "ons-list-item": DefineProps<ListItemProps, HTMLElement>;
      "ons-fab": DefineProps<FabProps, HTMLElement>;
      "ons-speed-dial": DefineProps<SpeedDialProps, HTMLElement>;
      "ons-speed-dial-item": DefineProps<SpeedDialItemProps, HTMLElement>;
      "ons-icon": DefineProps<IconProps, HTMLElement>;
      "ons-bottom-toolbar": DefineProps<BottomToolbarProps, HTMLElement>;
    }
  }
}
