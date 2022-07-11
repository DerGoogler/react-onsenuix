import { ActionSheetProps } from "./components/ActionSheet";
import { BackButtonProps } from "./components/BackButton";
import { ButtonProps } from "./components/Button";
import { CardProps } from "./components/Card";
import { GestureDetectorProps } from "./components/GestureDetector";
import { ListProps } from "./components/List";
import { PageProps } from "./components/Page";
import { SelectProps } from "./components/Select";
import { SwitchProps } from "./components/Switch";
import { ToolbarProps } from "./components/Toolbar";
import { ToolbarButtonProps } from "./components/ToolbarButton";

export = {};

declare global {
  type func = Function;
  type bool = boolean;

  interface Function {
    readonly name: string;
  }

  type HTMLAttributes<E, P = {}> = React.DetailedHTMLProps<React.HTMLAttributes<E> & P, E>;
  type AnchorHTMLAttributes<E, P = {}> = React.DetailedHTMLProps<React.AnchorHTMLAttributes<E> & P, E>;

  namespace JSX {
    interface IntrinsicElements {
      "ons-action-sheet": HTMLAttributes<HTMLElement, ActionSheetProps>;
      "ons-page": HTMLAttributes<HTMLElement, PageProps>;
      "ons-button": HTMLAttributes<HTMLElement, ButtonProps>;
      "ons-card": HTMLAttributes<HTMLElement, CardProps>;
      "ons-toolbar": HTMLAttributes<HTMLElement, ToolbarProps>;
      "ons-toolbar-button": HTMLAttributes<HTMLElement, ToolbarButtonProps>;
      "ons-navigator": HTMLAttributes<HTMLElement, any>;
      "ons-back-button": HTMLAttributes<HTMLElement, BackButtonProps>;
      "ons-list": HTMLAttributes<HTMLElement, ListProps>;
      "ons-list-title": HTMLAttributes<HTMLElement, any>;
      "ons-list-item": HTMLAttributes<HTMLElement, any>;
      "ons-select": HTMLAttributes<HTMLElement, SelectProps>;
      "ons-switch": HTMLAttributes<HTMLElement, any>;
      "ons-gesture-detector": HTMLAttributes<HTMLElement, GestureDetectorProps>;
    }
  }
}
