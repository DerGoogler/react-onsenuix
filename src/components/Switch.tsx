import * as React from "react";
import oneTimeProp from "../utils/oneTimeProp";

interface SwitchChangeEvent extends Event {
  switch: HTMLElement;
  value: boolean;
  isInteractive: boolean;
}

interface SwitchProps {
  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  The appearance of the checkbox.
   */
  modifier?: string | undefined;

  /**
   * @name onChange
   * @type function
   * @description
   *  Called when the value of the switch changes (checked/unchecked)
   */
  onChange?(e: SwitchChangeEvent): void;

  /**
   * @name checked
   * @type bool
   * @description
   *  Whether the switch is checked.
   */
  checked?: boolean;

  /**
   * @name defaultChecked
   * @type boolean
   * @description
   *  Defined the state of the switch at first render for uncontrolled inputs.
   */
  defaultChecked?: boolean | undefined;

  /**
   * @name disabled
   * @type bool
   * @description
   *  If set, the switch is disabled.
   */
  disabled?: boolean | undefined;

  /**
   * @name inputId
   * @type string
   * @description
   *  Specify the `id` attribute of the inner `<input>` element. This is useful when using `<label forHtml="...">` elements.
   */
  inputId?: string | undefined;
}

class Switch extends React.Component<SwitchProps> {
  public constructor(props: SwitchProps | Readonly<SwitchProps>) {
    super(props);
  }

  public render(): React.ReactNode {
    return <ons-switch {...this.props} />;
  }
}

// const Switch = () => oneTimeProp(Switch_, "defaultChecked", "checked");

export { Switch, SwitchProps, SwitchChangeEvent };
