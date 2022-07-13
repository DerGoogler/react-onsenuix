import { dom } from "googlers-tools";
import * as React from "react";
import { DefinedProps } from "../utils/DefinedProps";

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
  onChange?(e: any): void;

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

type EditedSwitchProps = Omit<DefinedProps<SwitchProps>, "children">;

class Switch extends React.Component<EditedSwitchProps> {
  private ref: React.RefObject<HTMLElement>;
  private onChange: (event: (e: SwitchChangeEvent) => void) => any;

  public constructor(props: EditedSwitchProps | Readonly<EditedSwitchProps>) {
    super(props);

    const callback = (name: string, event: (e: SwitchChangeEvent) => void) => {
      if (this.props[name]) {
        return this.props[name](event);
      }
    };

    this.ref = React.createRef();

    this.onChange = callback.bind(this, "onChange");
  }

  public componentDidMount() {
    dom.findBy(this.ref, (e: HTMLElement) => {
      // @ts-ignore
      e.addEventListener("change", this.onChange);
    });
  }

  public render(): React.ReactNode {
    return <ons-switch ref={this.ref} {...this.props} />;
  }
}

export { Switch, SwitchProps, SwitchChangeEvent };
