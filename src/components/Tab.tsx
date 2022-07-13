import * as React from "react";
import { DefinedProps } from "../utils/DefinedProps";

interface TabProps {
  /**
   * @description
   * The icon name for the tab. Can specify the same icon name as <ons-icon>.
   */
  icon?: string | undefined;

  /**
   * @description
   * The name of the icon when the tab is active.
   */
  activeIcon?: string | undefined;

  /**
   * @description
   * The label of the tab item.
   */
  label?: string | undefined;

  /**
   * @name badge
   * @type string
   * @description
   * Display a notification badge on top of the tab.
   */
  badge?: string | undefined;
}

type EditedTabProps = Omit<DefinedProps<TabProps>, "children" | "title">;

class Tab extends React.Component<EditedTabProps> {
  public constructor(props: EditedTabProps | Readonly<EditedTabProps>) {
    super(props);
  }

  public render(): React.ReactNode {
    return <ons-tab {...this.props} />;
  }
}

export { Tab, TabProps, EditedTabProps };
