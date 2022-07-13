import * as React from "react";
import { DefinedProps } from "../utils/DefinedProps";

interface BackButtonProps {
  children: React.ReactNode;

  /**
   * @description
   * The appearance of the back button.
   */
  modifier?: string | undefined;

  /**
   * @description
   * This function will be called when the button is clicked. To prevent the default click behaviour, call `event.preventDefault()`.
   */
  onClick?: React.MouseEventHandler | undefined;

  /**
   * @description
   * Specifies the animation, animationOptions, and callback.
   */
  options?:
    | {
        animation?: string | undefined;
        animationOptions?: object | undefined;
        callback?: Function | undefined;
      }
    | undefined;
}

class BackButton extends React.Component<DefinedProps<BackButtonProps>> {
  public constructor(props: DefinedProps<BackButtonProps> | Readonly<DefinedProps<BackButtonProps>>) {
    super(props);
  }

  public render(): React.ReactNode {
    return <ons-back-button {...this.props}>{this.props.children}</ons-back-button>;
  }
}

var OnsBackButtonElement: BackButtonProps;

export { BackButton, BackButtonProps, OnsBackButtonElement };
