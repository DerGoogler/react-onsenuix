import * as React from "react";
import { DefinedProps } from "../utils/DefinedProps";

interface IconProps {
  /**
   * @description
   * The appearance of the icon.
   */
  modifier?: string | undefined;

  /**
   * @description
   * Can be either a string or an object. If it is an string, it is set to an specific icon like 'ions-navicon'. If it is an object, it represents a dictionary of the icons depending on the modifier e.g.   `{{default: 'ion-navicon', material: 'md-menu'}}`
   */
  icon?: ParseIcon | string | undefined;

  /**
   * @description
   * Can be either a number or an object. If it is an number, it  specifies the icon size with a number in pixels. If it is an object, it represents a dictionary of the icon sizes depending on the modifier e.g.   `{{default: 20, material: 18}}`
   */
  size?: ParseSize | undefined | number;

  /**
   * @description
   * Number of degrees to rotate the icon. Valid values are 90, 180 and 270.
   */
  rotate?: 0 | 90 | 180 | 270 | undefined;

  /**
   * @description
   * When used in a list, you want the icons to have the same width so that they align vertically by defining this attribute.
   */
  fixedWidth?: boolean | undefined;

  /**
   * @description
   * Specify whether the icon should be spinning.
   */
  spin?: boolean | undefined;
}

interface ParseIcon {
  default: string;
  material: string;
  [x: string]: string;
}

interface ParseSize {
  default: number;
  material: number;
  [x: string]: number;
}

class Icon extends React.Component<DefinedProps<IconProps>> {
  public constructor(props: DefinedProps<IconProps> | Readonly<DefinedProps<IconProps>>) {
    super(props);
  }

  private parseIcon(icon: ParseIcon | string | undefined): string | undefined {
    if (icon) {
      if (typeof icon === "string") {
        return icon;
      } else {
        const keys = Object.keys(icon).filter(a => a !== "default");
        const innerString = keys.map(key => key + ":" + icon[key] + "");
        return icon.default + ", " + innerString.join(",");
      }
    }
  }

  private parseSize(size: ParseSize | undefined | number): any | undefined {
    if (size) {
      if (typeof size === "number") {
        return `${size}px`;
      } else {
        const keys = Object.keys(size).filter(a => a !== "default");
        const innerString = keys.map(key => key + ":" + size[key] + "px");
        return size.default + "px, " + innerString.join(",");
      }
    }
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(`ERRROR: ${error.message}\n\rERROR INFO: ${errorInfo.componentStack}`);
  }

  public render(): React.ReactNode {
    return (
      <ons-icon icon={this.parseIcon(this.props.icon)} size={this.parseSize(this.props.size)} {...this.props}>
        {this.props.children}
      </ons-icon>
    );
  }
}

export { Icon, IconProps };
