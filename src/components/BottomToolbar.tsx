import * as React from "react";
import { DefineProps } from "../utils/DefineProps";

interface BottomToolbarProps {
  /**
   * @description
   * Specify modifier name to specify custom styles. Optional.
   */
  modifier?: string | undefined;
}

class BottomToolbar extends React.Component<DefineProps<BottomToolbarProps>> {
  public render(): React.ReactNode {
    return <ons-bottom-toolbar {...this.props}>{this.props.children}</ons-bottom-toolbar>;
  }
}

export { BottomToolbar, BottomToolbarProps };
