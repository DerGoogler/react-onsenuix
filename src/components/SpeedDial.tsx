import * as React from "react";
import { DefineProps } from "../utils/DefineProps";
import { FabProps } from "./Fab";

interface SpeedDialProps {
  /**
   * @description
   * The appearance of the speed dial.
   */
  modifier?: string | undefined;

  /**
   * @description
   * Specify the vertical and horizontal position of the component.
   * I.e. to display it in the top right corner specify "right top".
   * Choose from "right", "left", "top" and "bottom".
   */
  position?: string | undefined;

  /**
   * @description
   * Specify the direction the items are displayed. Possible values are "up", "down", "left" and "right".
   */
  direction?: "up" | "down" | "left" | "right";

  /**
   * @description
   * Specify if button should be disabled.
   */
  disabled?: boolean | undefined;
}

interface SpeedDialItemProps {
  /**
   * @description
   * The appearance of the button.
   */
  modifier?: string | undefined;

  /**
   * @description
   * This function will be called when the button is clicked.
   */
  onClick?: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
}

/**
 * @description
 * Element that displays a Material Design Speed Dialog component. It is useful when there are more than one primary action that can be performed in a page.
 * The Speed dial looks like a `Fab` element but will expand a menu when tapped.
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
class SpeedDial extends React.Component<DefineProps<SpeedDialProps>> {
  public constructor(props: DefineProps<SpeedDialProps> | Readonly<DefineProps<SpeedDialProps>>) {
    super(props);
  }

  public render(): React.ReactNode {
    return <ons-speed-dial {...this.props}>{this.props.children}</ons-speed-dial>;
  }

  public static Item = class extends React.Component<DefineProps<SpeedDialItemProps>> {
    public constructor(props: DefineProps<SpeedDialItemProps> | Readonly<DefineProps<SpeedDialItemProps>>) {
      super(props);
    }

    public render(): React.ReactNode {
      return (
        <ons-speed-dial-item
          ref={(e: HTMLElement) => {
            if (e?.onclick) {
              e.onclick = this.props.onClick!;
            }
          }}
          {...this.props}
        >
          {this.props.children}
        </ons-speed-dial-item>
      );
    }
  };

  public static Fab = class extends React.Component<DefineProps<FabProps>> {
    public constructor(props: DefineProps<FabProps> | Readonly<DefineProps<FabProps>>) {
      super(props);
    }

    public render(): React.ReactNode {
      return <ons-fab {...this.props}>{this.props.children}</ons-fab>;
    }
  };
}

export { SpeedDial, SpeedDialProps, SpeedDialItemProps };
