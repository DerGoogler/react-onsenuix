import * as React from "react";
import { DefinedProps } from "../utils/DefinedProps";

interface PageProps {
  children: React.ReactNode;
  style?: React.CSSProperties | undefined;
  ref?: React.Ref<any> | undefined;

  /**
   * @description
   * Specify the style of the page content. Optional.
   */
  contentStyle?: object | undefined;

  /**
   * @description
   * Specify modifier name to specify custom styles. Optional.
   */
  modifier?: string | undefined;

  /**
   * @description
   * This function renders a modal that masks current screen.
   */
  renderModal?: (<T>(ref?: React.Ref<T> | undefined) => JSX.Element | undefined) | undefined;

  /**
   * @description
   * This function renders the toolbar of the page.
   */
  renderToolbar?: (<T>(ref?: React.Ref<T> | undefined) => JSX.Element | undefined) | undefined;

  /**
   * @description
   * This function renders the bottom toolbar of the page.
   */
  renderBottomToolbar?: (<T>(ref?: React.Ref<T> | undefined) => JSX.Element | undefined) | undefined;

  /**
   * @description
   * This function renders fixed content of the page. Can be used to render `Fab` or `SpeedDial` components as well as other components that don't scroll with the page.
   */
  renderFixed?: (<T>(ref?: React.Ref<T> | undefined) => JSX.Element | undefined) | undefined;

  /**
   * @description
   * Fired right after the page is attached.
   */
  onInit?: Function | undefined;

  /**
   * @description
   * Called Fired right after the page is shown.
   */
  onShow?: Function | undefined;

  /**
   * @description
   * Called after the page is hidden.
   */
  onHide?: Function | undefined;

  /**
   * @description
   * Called when scrolling to the bottom of the page. It gets a 'done' callback (first argument) that must be called when it's finished.
   */
  onInfiniteScroll?: Function | undefined;

  /**
   * @description
   * Custom handler for device back button.
   */
  onDeviceBackButton?: Function | undefined;
}

class Page extends React.Component<DefinedProps<PageProps>> {
  public constructor(props: DefinedProps<PageProps> | Readonly<DefinedProps<PageProps>>) {
    super(props);
  }

  public render(): React.ReactNode {
    const { renderToolbar, renderModal, renderFixed, renderBottomToolbar, children, style, ref } = this.props;

    return (
      <ons-page ref={ref} {...this.props}>
        {renderToolbar ? renderToolbar(ref) : null}
        <div className="page__background"> </div>
        <div className="page__content" style={style}>
          {children}
        </div>
        <div className="page__extra" style={{ zIndex: 10001 }}>
          {renderModal ? renderModal(ref) : null}
        </div>
        {renderFixed ? renderFixed(ref) : null}
        {renderBottomToolbar ? renderBottomToolbar(ref) : null}
      </ons-page>
    );
  }
}

export { Page, PageProps };
