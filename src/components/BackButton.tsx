import * as React from "react";
import { DefineProps } from "../utils/DefineProps";

interface BackButtonProps {
  children: React.ReactNode;

  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  The appearance of the back button.
   */
  modifier?: string | undefined;

  /**
   * @name onClick
   * @type function
   * @description
   *  This function will be called when the button is clicked. To prevent the default click behaviour, call `event.preventDefault()`.
   */
  onClick?: React.MouseEventHandler | undefined;

  /**
   * @name options
   * @type object
   * @description
   *  Specifies the animation, animationOptions, and callback.
   */
  options?:
    | {
        animation?: string | undefined;
        animationOptions?: object | undefined;
        callback?: Function | undefined;
      }
    | undefined;
}

class BackButton extends React.Component<DefineProps<BackButtonProps>> {
  public constructor(props: DefineProps<BackButtonProps> | Readonly<DefineProps<BackButtonProps>>) {
    super(props);
  }

  public render(): React.ReactNode {
    return <ons-back-button {...this.props}>{this.props.children}</ons-back-button>;
  }
}

export { BackButton, BackButtonProps };
