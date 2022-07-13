import * as React from "react";
import { DefineProps } from "../utils/DefineProps";

interface ToolbarProps extends P {
  /**
   * @description
   * Specify modifier name to specify custom styles. Optional.
   */
  modifier?: string | undefined;

  /**
   * @description
   * If true, the toolbar is shown on the screen. Otherwise, the toolbar is not shown.
   */
  visible?: boolean | undefined;

  /**
   * @description
   * Static toolbars are not animated by `ons-navigator` when pushing or popping pages. This can be useful to improve performance in some situations.
   */
  static?: boolean | undefined;

  /**
   * @description
   * Display the toolbar as an inline element.
   */
  inline?: boolean | undefined;
}

interface ToolbarButtonProps extends P {
  /**
   * @description
   * The appearance of the button.
   */
  modifier?: string;

  /**
   * @description
   * Indicates whether the button is disabled.
   */
  disabled?: boolean;

  /**
   * @description
   * Creates an `Icon` component with this string.
   */
  icon?: string;

  /**
   * @description
   * This function will be called when the button is clicked.
   */
  onClick?: React.MouseEventHandler | undefined;
}

interface P {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

/**
 * @description
 * Toolbar component that can be used with navigation. Left, center and right container can be specified by class names. This component will automatically displays as a Material Design toolbar when running on Android devices.
 * @example
 *
 * <Page renderToolbar={() =>
 *   <Toolbar>
 *     <Toolbar.Left>
 *       <BackButton>
 *           Back
 *       </BackButton>
 *     </Toolbar.Left>
 *     <Toolbar.Center>
 *       Title
 *     </Toolbar.Center>
 *     <Toolbar.Right>
 *       <Toolbar.Button>
 *         <Icon icon="md-menu" />
 *       </Toolbar.Button>
 *     </Toolbar.Right>
 *   </Toolbar> }
 * />
 */
class Toolbar extends React.Component<DefineProps<ToolbarProps>> {
  public constructor(props: DefineProps<ToolbarProps> | Readonly<DefineProps<ToolbarProps>>) {
    super(props);
  }

  public render(): React.ReactNode {
    return <ons-toolbar {...this.props}>{this.props.children}</ons-toolbar>;
  }

  public static Left = class extends React.Component<DefineProps<P>> {
    public constructor(props: DefineProps<P> | Readonly<DefineProps<P>>) {
      super(props);
    }

    public render(): React.ReactNode {
      return (
        <div className={"left " + this.props.className} style={this.props.style}>
          {this.props.children}
        </div>
      );
    }
  };

  public static Center = class extends React.Component<DefineProps<P>> {
    public constructor(props: DefineProps<P> | Readonly<DefineProps<P>>) {
      super(props);
    }

    public render(): React.ReactNode {
      return (
        <div className={"center " + this.props.className} style={this.props.style}>
          {this.props.children}
        </div>
      );
    }
  };

  public static Right = class extends React.Component<DefineProps<P>> {
    public constructor(props: DefineProps<P> | Readonly<DefineProps<P>>) {
      super(props);
    }

    public render(): React.ReactNode {
      return (
        <div className={"right " + this.props.className} style={this.props.style}>
          {this.props.children}
        </div>
      );
    }
  };

  /**
   * @description
   * Button component for the Toolbar. Using this component gives a nice default style.
   * @example
   * <Page
   *   renderToolbar = { () =>
   *    <Toolbar>
   *      <Toolbar.Left><BackButton>Back</BackButton></Toolbar.Left>
   *      <Toolbar.Center>Input</Toolbar.Center>
   *      <Toolbar.Right>
   *        <Toolbar.Button onClick={this.add}>Add</Toolbar.Button>
   *      </Toolbar.Right>
   *    </Toolbar>
   *   }>
   *    Page Content
   *  </Page>
   */
  public static Button = class extends React.Component<DefineProps<ToolbarButtonProps>> {
    public constructor(props: DefineProps<ToolbarButtonProps> | Readonly<DefineProps<ToolbarButtonProps>>) {
      super(props);
    }

    public render(): React.ReactNode {
      return <ons-toolbar-button {...this.props}>{this.props.children}</ons-toolbar-button>;
    }
  };
}

export { Toolbar, ToolbarProps, ToolbarButtonProps };
