import * as React from "react";

interface SelectProps {
  children?: React.ReactNode | undefined;

  /**
   * @name modifier
   * @type string
   * @description
   *  The appearance of the select box.
   */
  modifier?: string | undefined;

  /**
   * @name disabled
   * @type bool
   * @description
   *  Specifies whether the select is disabled.
   */
  disabled?: boolean | undefined;

  /**
   * @name onChange
   * @type function
   * @description
   *  Called when the value of the select changes.
   */
  onChange?: React.FormEventHandler | undefined;

  /**
   * @name value
   * @type string
   * @description
   *  Use this prop to set the selected option value.
   */
  value?: string | undefined;

  /**
   * @name defaultValue
   * @type string
   * @description
   *  Use this prop to set the defalut selected option value (uncontrolled components).
   */
  defaultValue?: string | undefined;

  /**
   * @name multiple
   * @type boolean
   * @description
   *  If this attribute is defined, multiple options can be selected at once.
   */
  multiple?: boolean | undefined;

  /**
   * @name autofocus
   * @type boolean
   * @description
   *  Element automatically gains focus on page load.
   */
  autofocus?: boolean | undefined;

  /**
   * @name required
   * @type boolean
   * @description
   *  Make the select input required for submitting the form it is part of.
   */
  required?: boolean | undefined;

  /**
   * @name form
   * @type string
   * @description
   *  Associate a select element to an existing form on the page, even if not nested.
   */
  form?: string | undefined;

  /**
   * @name size
   * @type number
   * @description
   *  How many options are displayed; if there are more than the size then a scroll appears to navigate them
   */
  size?: number | undefined;

  /**
   * @name name
   * @type string
   * @description
   *  Name the select element, useful for instance if it is part of a form.
   */
  name?: string | undefined;
}

class Select extends React.Component<SelectProps> {
  public constructor(props: SelectProps | Readonly<SelectProps>) {
    super(props);
  }

  public render(): React.ReactNode {
    return (
      <ons-select {...this.props}>
        <select>{this.props.children}</select>
      </ons-select>
    );
  }
}

export { Select, SelectProps };
