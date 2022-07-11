import * as React from "react";

interface CardProps extends P {
  /**
   * @name modifier
   * @type string
   * @description
   *  Specify modifier name to specify custom styles. Optional.
   */
  modifier?: string | undefined;
}

interface P {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

/**
 * @original ons-card
 * @category visual
 * @tutorial react/Reference/visual (Tutorial does not match)
 * @description
 *  Card component that can be used to display content.
 * @example
 *
 * <Card.Body>
 *  <Card.Title>Awesome framework</Card.Title>
 *  <Card.Content>
 *    <Button><Icon icon="ion-ios-thumbs-up"></Icon></Button>
 *    <Button><Icon icon="ion-ios-share"></Icon></Button>
 *    <List>
 *      <ListHeader>Bindings</ListHeader>
 *      <ListItem>Vue</ListItem>
 *      <ListItem>Angular</ListItem>
 *      <ListItem>React</ListItem>
 *    </List>
 * </Card.Content>
 * </Card.Body>
 */
namespace Card {
  export class Body extends React.Component<CardProps> {
    public constructor(props: CardProps | Readonly<CardProps>) {
      super(props);
    }

    public render(): React.ReactNode {
      return <ons-card {...this.props}>{this.props.children}</ons-card>;
    }
  }

  // nor class because isn't an main component
  export function Title(props: P | Readonly<P>): JSX.Element {
    return (
      <div className={"title right " + props.className} style={props.style}>
        {props.children}
      </div>
    );
  }

  // nor class because isn't an main component
  export function Content(props: P | Readonly<P>): JSX.Element {
    return (
      <div className={"content " + props.className} style={props.style}>
        {props.children}
      </div>
    );
  }
}

export { Card, CardProps };
