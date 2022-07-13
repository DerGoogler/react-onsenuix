import * as React from "react";
import { DefineProps } from "../utils/DefineProps";

interface ButtonProps {
  children?: React.ReactNode;
  name?: string;

  /**
   * @description
   * The appearance of the button.
   */
  modifier?: string | undefined;

  /**
   * @description
   * Specifies whether the button is disabled.
   */
  disabled?: boolean | undefined;

  /**
   * @description
   * Specifies whether the button has a ripple effect.
   */
  ripple?: boolean | undefined;

  /**
   * @description
   * This function will be called when the button is clicked.
   */
  onClick?: React.MouseEventHandler | undefined;
}

/**
 * @description
 * Button component. If you want to place a button in a toolbar, use `ToolbarButton` or `BackButton` instead. Will automatically display as a Material Design button with a ripple effect on Android.
 * @example
 * <Button modifier="large--cta">
 *   Tap Me
 * </Button>
 *  Or
 * <Button modifier="large--cta" name="Tap me" />
 */
class Button extends React.Component<DefineProps<ButtonProps>> {
  public constructor(props: DefineProps<ButtonProps> | Readonly<DefineProps<ButtonProps>>) {
    super(props);
  }

  public render(): React.ReactNode {
    const { name, children } = this.props;
    if (name == undefined) {
      return <ons-button {...this.props}>{children}</ons-button>;
    } else {
      return <ons-button {...this.props}>{name}</ons-button>;
    }
  }
}

export { Button, ButtonProps };
