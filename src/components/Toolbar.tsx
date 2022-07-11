import * as React from "react";

interface ToolbarProps extends P {
  /**
   * @name modifier
   * @type string
   * @description
   *  Specify modifier name to specify custom styles. Optional.
   */
  modifier?: string | undefined;

  /**
   * @name visible
   * @type bool
   * @description
   *  If true, the toolbar is shown on the screen. Otherwise, the toolbar is not shown.
   */
  visible?: boolean | undefined;

  /**
   * @name static
   * @type bool
   * @description
   *   Static toolbars are not animated by `ons-navigator` when pushing or popping pages. This can be useful to improve performance in some situations.
   */
  static?: boolean | undefined;

  /**
   * @name inline
   * @type bool
   * @description
   *   Display the toolbar as an inline element.
   */
  inline?: boolean | undefined;
}

interface P {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

/**
 * @original ons-toolbar
 * @category page
 * @tutorial react/Reference/toolbar
 * @description
 * Toolbar component that can be used with navigation. Left, center and right container can be specified by class names. This component will automatically displays as a Material Design toolbar when running on Android devices.
 * @example
 *
 * <Page renderToolbar={() =>
 *   <Toolbar>
 *     <div className="left">
 *       <BackButton>
 *           Back
 *       </BackButton>
 *     </div>
 *     <div className="center">
 *       Title
 *     </div>
 *     <div className="right">
 *       <ToolbarButton>
 *         <Icon icon="md-menu" />
 *       </ToolbarButton>
 *     </div>
 *   </Toolbar> }
 * />
 */
namespace Toolbar {
  export class Body extends React.Component<ToolbarProps> {
    public constructor(props: ToolbarProps | Readonly<ToolbarProps>) {
      super(props);
    }

    public render(): React.ReactNode {
      return <ons-toolbar {...this.props}>{this.props.children}</ons-toolbar>;
    }
  }

  // nor class because isn't an main component
  export function Left(props: P): React.ReactNode {
    return (
      <div className={"left " + props.className} style={props.style}>
        {props.children}
      </div>
    );
  }

  // nor class because isn't an main component
  export function Center(props: P): React.ReactNode {
    return (
      <div className={"center " + props.className} style={props.style}>
        {props.children}
      </div>
    );
  }

  // nor class because isn't an main component
  export function Right(props: P): React.ReactNode {
    return (
      <div className={"right " + props.className} style={props.style}>
        {props.children}
      </div>
    );
  }
}

export { Toolbar, ToolbarProps };
