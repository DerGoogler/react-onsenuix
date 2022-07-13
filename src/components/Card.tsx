import * as React from "react";
import { DefineProps } from "../utils/DefineProps";

interface CardProps extends P {
  /**
   * @description
   * Specify modifier name to specify custom styles. Optional.
   */
  modifier?: string | undefined;
}

interface P {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

/**
 * @description
 * Card component that can be used to display content.
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
class Card extends React.Component<DefineProps<CardProps>> {
  public constructor(props: DefineProps<CardProps> | Readonly<DefineProps<CardProps>>) {
    super(props);
  }

  public render(): React.ReactNode {
    return <ons-card {...this.props}>{this.props.children}</ons-card>;
  }

  public static Title = class extends React.Component<DefineProps<CardProps>> {
    public constructor(props: DefineProps<CardProps> | Readonly<DefineProps<CardProps>>) {
      super(props);
    }

    public render(): React.ReactNode {
      return (
        <div className={"title right " + this.props.className} style={this.props.style}>
          {this.props.children}
        </div>
      );
    }
  };

  public static Content = class extends React.Component<DefineProps<CardProps>> {
    public constructor(props: DefineProps<CardProps> | Readonly<DefineProps<CardProps>>) {
      super(props);
    }

    public render(): React.ReactNode {
      return (
        <div className={"content " + this.props.className} style={this.props.style}>
          {this.props.children}
        </div>
      );
    }
  };
}

export { Card, CardProps };
