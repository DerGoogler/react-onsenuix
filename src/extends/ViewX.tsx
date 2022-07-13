import React from "react";
import { DefinedProps } from "..";

export interface ViewXRenderData<P = {}, S = {}, E = HTMLElement> {
  p: DefinedProps<React.HTMLAttributes<E> & P> | Readonly<DefinedProps<React.HTMLAttributes<E> & P>>;
  s: S | Readonly<S>;
}

/**
 * ViewX includes all HTML props, no need to add it extra
 * @DefinedProps true
 * @extends {React.Component}
 */
export class ViewX<P = {}, S = {}, E = HTMLElement, SS = any> extends React.Component<DefinedProps<React.HTMLAttributes<E> & P>, S, SS> {
  public constructor(props: DefinedProps<React.HTMLAttributes<E> & P> | Readonly<DefinedProps<React.HTMLAttributes<E> & P>>) {
    super(props);
  }

  public createView(data: ViewXRenderData<P, S, E>): JSX.Element {
    return <></>;
  }

  /**
   * @deprecated
   */
  public render(): React.ReactNode {
    return <this.createView p={this.props} s={this.state} />;
  }
}
