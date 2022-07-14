import { BackButtonProps } from "./components/BackButton";
import { BottomToolbarProps } from "./components/BottomToolbar";
import { ButtonProps } from "./components/Button";
import { CardProps } from "./components/Card";
import { FabProps } from "./components/Fab";
import { IconProps } from "./components/Icon";
import { ListItemProps, ListProps } from "./components/List";
import { PageProps } from "./components/Page";
import { SpeedDialItemProps, SpeedDialProps } from "./components/SpeedDial";
import { SwitchProps } from "./components/Switch";
import { EditedTabProps } from "./components/Tab";
import { EditedTabbarProps } from "./components/Tabbar";
import { ToolbarProps } from "./components/Toolbar";
import { ToolbarButtonProps } from "./components/ToolbarButton";

import { DefinedProps } from "./utils/DefinedProps";

export = {};

declare global {
  type func = Function;
  type bool = boolean;

  interface Function {
    readonly name: string;
  }

  interface GlobalEventHandlersEventMap {
    prechange: Event;
    postchange: Event;
    reactive: Event;
  }

  namespace JSX {
    interface IntrinsicElements {
      "ons-page": DefinedProps<PageProps, HTMLElement>;
      "ons-button": DefinedProps<ButtonProps, HTMLElement>;
      "ons-card": DefinedProps<CardProps, HTMLElement>;
      "ons-toolbar": DefinedProps<ToolbarProps, HTMLElement>;
      "ons-toolbar-button": DefinedProps<ToolbarButtonProps, HTMLElement>;
      "ons-back-button": DefinedProps<BackButtonProps, HTMLElement>;
      "ons-list": DefinedProps<ListProps, HTMLElement>;
      "ons-list-title": DefinedProps<any, HTMLElement>;
      "ons-list-header": DefinedProps<any, HTMLElement>;
      "ons-list-item": DefinedProps<ListItemProps, HTMLElement>;
      "ons-fab": DefinedProps<FabProps, HTMLElement>;
      "ons-speed-dial": DefinedProps<SpeedDialProps, HTMLElement>;
      "ons-speed-dial-item": DefinedProps<SpeedDialItemProps, HTMLElement>;
      "ons-icon": DefinedProps<IconProps, HTMLElement>;
      "ons-bottom-toolbar": DefinedProps<BottomToolbarProps, HTMLElement>;
      "ons-tab": DefinedProps<EditedTabProps, HTMLElement>;
      "ons-tabbar": DefinedProps<EditedTabbarProps, HTMLElement>;
      "ons-switch": DefinedProps<SwitchProps, HTMLElement>;
      "ons-navigator": DefinedProps<any, HTMLElement>;
    }
  }
}
