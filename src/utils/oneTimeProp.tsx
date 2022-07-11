import React from "react";

const oneTimeProp = (WrappedComponent: any, defaultProp: any, prop: any) => {
  class OneTimeProp extends React.Component<any, any> {
    private ref: any;
    constructor(props: any) {
      super(props);
      this.ref = React.createRef();
    }

    componentDidMount() {
      const value = this.props[defaultProp];
      if (value) {
        this.ref.current[prop] = value;
      }
    }

    render() {
      const { innerRef, ...rest } = this.props;
      // @ts-ignore
      delete rest[defaultProp];

      if (innerRef && innerRef !== this.ref) {
        this.ref = innerRef;
      }

      return (
        <WrappedComponent ref={this.ref} {...rest}>
          {this.props.children}
        </WrappedComponent>
      );
    }
  }

  return React.forwardRef((props: any, ref: any) => (
    <OneTimeProp innerRef={ref} {...props}>
      {props.children}
    </OneTimeProp>
  ));
};

export default oneTimeProp;
