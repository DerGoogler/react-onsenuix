import * as React from "react";
import { ContentXView } from "../components/ContentXView";
import { Page } from "../components/Page";

export interface ActivityXRenderData<P = {}, S = {}> {
  p: P | Readonly<P>;
  s: S | Readonly<S>;
}

/**
 * An extended `React.Component` for building activity components
 * @DefinedProps false
 * @extends {React.Component}
 */
export class ActivityX<P = {}, S = {}, SS = any> extends React.Component<P, S, SS> {
  /**
   * Uses an optional component to improve the content
   */
  public static useContentBody = false;

  public constructor(props: P | Readonly<P>) {
    super(props);
  }
  /**
   * @deprecated
   */
  public componentDidMount(): void {
    this.onMount();
  }
  /**
   * @deprecated
   */
  public componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot?: SS): void {
    this.onUpdate(prevProps, prevState, snapshot);
  }
  /**
   * @deprecated
   */
  public componentWillUnmount(): void {
    this.onWillUnmount();
  }

  public onMount(): void {}

  public onUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot?: SS): void {}

  public onWillUnmount(): void {}

  /**
   * Creates the activity
   */
  public onCreate(data: ActivityXRenderData<P, S>): JSX.Element {
    return <></>;
  }

  /**
   * Renders the Toolbar
   */
  public onCreateToolbar(): JSX.Element {
    return <></>;
  }

  public onCreateModal(): JSX.Element {
    return <></>;
  }

  public onCreateBottomToolbar(): JSX.Element {
    return <></>;
  }

  public onCreateFAB(): JSX.Element {
    return <></>;
  }

  public onInit(): void {}

  public onShow(): void {}

  public onHide(): void {}

  public onInfiniteScroll(): void {}

  //@ts-ignore
  public get pageModifier(): string {
    return "";
  }

  /**
   * Don't use render in a ActivityX component
   * @deprecated
   */
  public render = (): React.ReactNode => {
    const props = this.props;
    const state = this.state;
    return (
      <Page
        modifier={this.pageModifier}
        renderBottomToolbar={this.onCreateBottomToolbar}
        renderFixed={this.onCreateFAB}
        renderModal={this.onCreateModal}
        onInfiniteScroll={this.onInfiniteScroll}
        onHide={this.onHide}
        onShow={this.onShow}
        onInit={this.onInit}
        renderToolbar={this.onCreateToolbar}
      >
        {ActivityX.useContentBody ? (
          <ContentXView>
            <this.onCreate p={props} s={state} />
          </ContentXView>
        ) : (
          <this.onCreate p={props} s={state} />
        )}
      </Page>
    );
  };
}
