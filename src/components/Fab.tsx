import * as React from "react";
import { DefinedProps } from "../utils/DefinedProps";

interface FabProps {
  /**
   * @description
   * The appearance of the button.
   */
  modifier?: string | undefined;

  /**
   * @description
   * If true, the button will have a ripple effect when tapped.
   */
  ripple?: boolean | undefined;

  /**
   * @description
   * The position of the button. Should be a string like `"bottom right"` or `"top left"`. If this attribute is not defined it will be displayed as an inline element.
   */
  position?: string | undefined;

  /**
   * @description
   * If true, the button will be disabled.
   */
  disabled?: boolean | undefined;

  /**
   * @description
   * This function will be called ones the button is clicked.
   */
  onClick?: React.MouseEventHandler | undefined;
}

/**
 * @description
 * The Floating action button is a circular button defined in the [Material Design specification](https://www.google.com/design/spec/components/buttons-floating-action-button.html). They are often used to promote the primary action of the app.
 * It can be displayed either as an inline element or in one of the corners. Normally it will be positioned in the lower right corner of the screen.
 * @example
 * <SpeedDial disabled={false} direction='right' onClick={() => console.log('test1')} position='left bottom'>
 *   <SpeedDial.Fab>
 *     <Icon icon='fa-twitter' size={26} fixedWidth={false} style={{verticalAlign: 'middle'}} />
 *   </SpeedDial.Fab>
 *   <SpeedDial.Item onClick={() => console.log('speed A')}> A </SpeedDial.Item>
 *   <SpeedDial.Item onClick={() => console.log('speed B')}> B </SpeedDial.Item>
 *   <SpeedDial.Item onClick={() => console.log('speed C')}> C </SpeedDial.Item>
 *   <SpeedDial.Item onClick={() => console.log('speed D')}> D </SpeedDial.Item>
 * </SpeedDial>
 */
class Fab extends React.Component<DefinedProps<FabProps>> {
  public constructor(props: DefinedProps<FabProps> | Readonly<DefinedProps<FabProps>>) {
    super(props);
  }

  public render(): React.ReactNode {
    return <ons-fab {...this.props}>{this.props.children}</ons-fab>;
  }
}

export { Fab, FabProps };
