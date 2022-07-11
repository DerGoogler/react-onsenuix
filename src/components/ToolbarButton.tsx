import * as React from "react";

interface ToolbarButtonProps {
  children: React.ReactNode;

  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  The appearance of the button.
   */
  modifier?: string;

  /**
   * @name disabled
   * @type bool
   * @description
   *  Indicates whether the button is disabled.
   */
  disabled?: boolean;

  /**
   * @name icon
   * @type string
   * @description
   *  Creates an `Icon` component with this string.
   */
  icon?: string;

  /**
   * @name onClick
   * @type function
   * @description
   *  This function will be called when the button is clicked.
   */
  onClick?: React.MouseEventHandler | undefined;
}

/**
 * @original ons-toolbar-button
 * @category page
 * @tutorial react/Reference/page
 * @description
 *   Button component for the Toolbar. Using this component gives a nice default style.
 * @example
 * <Page
 *   renderToolbar = { () =>
 *    <Toolbar.Body>
 *      <Toolbar.Left><BackButton>Back</BackButton></Toolbar.Left>
 *      <Toolbar.Center>Input</Toolbar.Center>
 *      <Toolbar.Right>
 *        <ToolbarButton onClick={this.add}>Add</ToolbarButton>
 *      </Toolbar.Right>
 *    </Toolbar.Body>
 *   }>
 *    Page Content
 *  </Page>
 */
class ToolbarButton extends React.Component<ToolbarButtonProps> {
  public constructor(props: ToolbarButtonProps | Readonly<ToolbarButtonProps>) {
    super(props);
  }

  public render(): React.ReactNode {
    return <ons-toolbar-button {...this.props}></ons-toolbar-button>;
  }
}

export { ToolbarButton, ToolbarButtonProps };
