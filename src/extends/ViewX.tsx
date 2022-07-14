import React from "react";
import { ContentXView, DefinedProps } from "..";

export interface ViewXRenderData<P = {}, S = {}, E = HTMLElement> {
  p: DefinedProps<React.HTMLAttributes<E> & P> | Readonly<DefinedProps<React.HTMLAttributes<E> & P>>;
  s: S | Readonly<S>;
}

type Consturctor = { new (...args: any[]): any };

function toString<T extends Consturctor>(BaseClass: T) {
  return class extends BaseClass {
    toString() {
      return JSON.stringify(this);
    }
  };
}

const deprecated = (deprecationReason: string) => {
  return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
    return {
      get() {
        const wrapperFn = (...args: any[]) => {
          console.warn(`Method ${memberName} is deprecated with reason: ${deprecationReason}`);
          propertyDescriptor.value.apply(this, args);
        };

        Object.defineProperty(this, memberName, {
          value: wrapperFn,
          configurable: true,
          writable: true,
        });
        // return wrapperFn;
      },
    };
  };
};

/**
 * ViewX includes all HTML props, no need to add it extra
 * @DefinedProps true
 * @extends {React.Component}
 */
export class ViewX<P = {}, S = {}, E = HTMLElement, SS = any> extends React.Component<DefinedProps<React.HTMLAttributes<E> & P>, S, SS> {
  public constructor(props: DefinedProps<React.HTMLAttributes<E> & P> | Readonly<DefinedProps<React.HTMLAttributes<E> & P>>) {
    super(props);

    this.createView = this.createView.bind(this);
  }

  public static useContentBody(element: JSX.Element, props?: React.HTMLAttributes<HTMLDivElement>) {
    return <ContentXView {...props}>{element}</ContentXView>;
  }

  /**
   * Normal method to render
   */
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
