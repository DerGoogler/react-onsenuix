import * as React from "react";
import { DefinedProps } from "../utils/DefinedProps";

interface ListProps extends P {
  /**
   * @description
   * Source of the list data. Should be an array.
   */
  dataSource?: Array<any> | undefined;

  /**
   * @description
   * Function to specify the rendering function for every element in
   * in the dataSource.
   */
  renderRow?: ((...args: any) => any) | undefined;

  /**
   * @description
   * Function to specify the rendering function for the header
   */
  renderHeader?: ((...args: any) => any) | undefined;

  /**
   * @description
   * Function to specify the rendering function for the footer
   */
  renderFooter?: ((...args: any) => any) | undefined;
}

interface ListItemProps extends P {
  /**
   * @description
   * Specifies whether the list item is tappable.
   */
  tappable?: boolean | undefined;

  /**
   * @description
   * Changes the background color when tapped. For this to work, the attribute "tappable" needs to be set. The default color is "#d9d9d9". It will display as a ripple effect on Android.
   */
  tapBackgroundColor?: string | undefined;

  /**
   * @description
   * Prevent vertical scrolling when the user drags horizontally.
   */
  lockOnDrag?: boolean | undefined;

  /**
   * @description
   * Specifies whether list item can be expanded to reveal hidden content. Expanded content must be defined in `div.expandable-content`.
   */
  expandable?: boolean | undefined;

  /**
   * @description
   * For expandable list items, specifies whether item is expanded
   */
  expanded?: boolean | undefined;

  /**
   * @description
   * This function will be called when the expandable list item expands or contracts.
   */
  onExpand?: Function | undefined;

  /**
   * @description
   * The animation used when showing and hiding the expandable content. Can be either "default" or "none".
   */
  animation?: string | undefined;

  onClick?: React.MouseEventHandler | undefined;
}

interface P {
  /**
   * @description
   * Specify modifier name to specify custom styles.
   */
  modifier?: string | undefined;

  children?: React.ReactNode | undefined;

  id?: string | undefined;

  style?: React.CSSProperties | undefined;
}

class List extends React.Component<DefinedProps<ListProps>> {
  public constructor(props: DefinedProps<ListProps>) {
    super(props);
  }
  public render(): React.ReactNode {
    const { renderHeader, renderFooter, renderRow, dataSource, children } = this.props;

    const rows = dataSource?.map((...args: any) => (renderRow ? renderRow(...args) : null));

    return (
      <ons-list {...this.props}>
        {renderHeader ? renderHeader() : null}
        {rows}
        {children ? children : null}
        {renderFooter ? renderFooter() : null}
      </ons-list>
    );
  }

  public static Title = class extends React.Component<DefinedProps<P>> {
    public constructor(props: DefinedProps<P> | Readonly<DefinedProps<P>>) {
      super(props);
    }

    public render(): React.ReactNode {
      return <ons-list-title {...this.props}>{this.props.children}</ons-list-title>;
    }
  };

  public static Item = class extends React.Component<DefinedProps<P>> {
    public constructor(props: DefinedProps<P> | Readonly<DefinedProps<P>>) {
      super(props);
    }

    public render(): React.ReactNode {
      return <ons-list-item {...this.props}>{this.props.children}</ons-list-item>;
    }
  };
}

export { List, ListProps, ListItemProps };
