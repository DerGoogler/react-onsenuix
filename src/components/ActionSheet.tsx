import * as React from "react";
import { DefineProps } from "../utils/DefineProps";

interface ActionSheetProps {
  children: React.ReactNode;

  /**
   * @name title
   * @type string
   * @required false
   * @description
   *  Optional title of the action sheet. A new element will be created containing this string.
   */
  title?: string | undefined;

  /**
   * @name onDialogCancel
   * @type function
   * @required false
   * @description
   *  Called only if cancelable is true. It will be called after tapping the background or by pressing the back button on Android devices.
   */
  onDialogCancel?: Function | undefined;

  /**
   * @name visible
   * @type bool
   * @description
   *  Indicates whether the dialog is open and shown.
   */
  visible?: boolean | undefined;

  /**
   * @name cancelable
   * @type bool
   * @required false
   * @description
   * Specifies whether the dialog is cancelable or not.
   * A cancelable dialog will call onCancel  when tapping the background or or  pressing the back button on Android devices
   */
  cancelable?: boolean | undefined;

  /**
   * @name disabled
   * @type bool
   * @required false
   * @description
   * Specifies whether the dialog is disabled.
   */
  disabled?: boolean | undefined;

  /**
   * @name onCancel
   * @type function
   * @required false
   * @deprecated Use `onDialogCancel` instead.
   */
  onCancel?: Function | undefined;

  /**
   * @name isOpen
   * @type bool
   * @deprecated Use `visible` instead.
   */
  isOpen?: boolean | undefined;

  /**
   * @name isCancelable
   * @type bool
   * @required false
   * @deprecated Use `cancelable` instead.
   */
  isCancelable?: boolean | undefined;

  /**
   * @name isDisabled
   * @type bool
   * @required false
   * @deprecated Use `disabled` instead.
   */
  isDisabled?: boolean | undefined;

  /**
   * @name animation
   * @type string
   * @required false
   * @description
   * The animation used when showing and hiding the dialog. Can be either `"none"` or `"default"`.
   */
  animation?: string | undefined;

  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   * The appearance of the dialog.
   */
  modifier?: string | undefined;

  /**
   * @name maskColor
   * @type string
   * @required false
   * @description
   * Color of the background mask. Default is "rgba(0, 0, 0, 0.2)"
   */
  maskColor?: string | undefined;

  /**
   * @name animationOptions
   * @type object
   * @required false
   * @description
   * Specify the animation's duration, delay and timing. E.g.  `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.
   */
  animationOptions?: object | undefined;

  /**
   * @name onPreShow
   * @type function
   * @required false
   * @description
   * Called just before the action sheet is displayed.
   */
  onPreShow?: Function | undefined;

  /**
   * @name onPostShow
   * @type function
   * @required false
   * @description
   * Called just after the action sheet is displayed.
   */
  onPostShow?: Function | undefined;

  /**
   * @name onPreHide
   * @type function
   * @required false
   * @description
   * Called just before the action sheet is hidden.
   */
  onPreHide?: Function | undefined;

  /**
   * @name onPostHide
   * @type function
   * @required false
   * @description
   * Called just after the action sheet is hidden.
   */
  onPostHide?: Function | undefined;

  /**
   * @name onDeviceBackButton
   * @type function
   * @required false
   * @description
   * Custom handler for device back button.
   */
  onDeviceBackButton?: Function | undefined;
}

/**
 * @original ons-action-sheet
 * @category dialog
 * @tutorial react/Reference/action-sheet
 * @description
 * Action/bottom sheet that is displayed on top of current screen.
 * The action sheet is useful for displaying a list of options and asking the user to make a decision. An ActionSheetButton component is provided for this purpose, although it can contain any type of content.
 * It will automatically be displayed as Material Design (bottom sheet) when running on an Android device.
 */
class ActionSheet extends React.Component<DefineProps<ActionSheetProps>> {
  public constructor(props: DefineProps<ActionSheetProps> | Readonly<DefineProps<ActionSheetProps>>) {
    super(props);
  }

  public render(): React.ReactNode {
    return <ons-action-sheet {...this.props}>{this.props.children}</ons-action-sheet>;
  }
}

export { ActionSheet, ActionSheetProps };
