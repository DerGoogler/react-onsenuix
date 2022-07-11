import * as React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  name?: string;

  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  The appearance of the button.
   */
  modifier?: string | undefined;

  /**
   * @name disabled
   * @type bool
   * @description
   *  Specifies whether the button is disabled.
   */
  disabled?: boolean | undefined;

  /**
   * @name ripple
   * @type bool
   * @description
   *  Specifies whether the button has a ripple effect.
   */
  ripple?: boolean | undefined;

  /**
   * @name onClick
   * @type function
   * @description
   *  This function will be called when the button is clicked.
   */
  onClick?: React.MouseEventHandler | undefined;
}

/**
 * @original ons-button
 * @category form
 * @tutorial react/Reference/button
 * @description
 *  Button component. If you want to place a button in a toolbar, use `ToolbarButton` or `BackButton` instead. Will automatically display as a Material Design button with a ripple effect on Android.
 * @example
 * <Button modifier="large--cta">
 *   Tap Me
 * </Button>
 *  Or 
 * <Button modifier="large--cta" name="Tap me" />
 */
class Button extends React.Component<ButtonProps> {
  public constructor(props: ButtonProps | Readonly<ButtonProps>) {
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
