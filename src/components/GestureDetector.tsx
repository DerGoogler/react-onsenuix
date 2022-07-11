import * as React from "react";

interface GestureDetectorProps {
  children?: React.ReactNode | undefined;

  /**
   * @name onDrag
   * @type function
   * @description
   *  Called when the user drags in any direction.
   */
  onDrag?: React.DragEventHandler<HTMLElement> | undefined;

  /**
   * @name onDragLeft
   * @type function
   * @description
   *  Called when the user drags left.
   */
  onDragLeft?: Function | undefined;

  /**
   * @name onDragRight
   * @type function
   * @description
   *  Called when the user drags right.
   */
  onDragRight?: Function | undefined;

  /**
   * @name onDragUp
   * @type function
   * @description
   *  Called when the user drags up.
   */
  onDragUp?: Function | undefined;

  /**
   * @name onDragDown
   * @type function
   * @description
   *  Called when the user drags down.
   */
  onDragDown?: Function | undefined;

  /**
   * @name onHold
   * @type function
   * @description
   *  Called when the user holds.
   */
  onHold?: Function | undefined;

  /**
   * @name onRelease
   * @type function
   * @description
   *  Called when the user releases.
   */
  onRelease?: Function | undefined;

  /**
   * @name onSwipe
   * @type function
   * @description
   *  Called when the user swipes in any direction.
   */
  onSwipe?: Function | undefined;

  /**
   * @name onSwipeLeft
   * @type function
   * @description
   *  Called when the user swipes left.
   */
  onSwipeLeft?: Function | undefined;

  /**
   * @name onSwipeRight
   * @type function
   * @description
   *  Called when the user swipes right.
   */
  onSwipeRight?: Function | undefined;

  /**
   * @name onSwipeUp
   * @type function
   * @description
   *  Called when the user swipes up.
   */
  onSwipeUp?: Function | undefined;

  /**
   * @name onSwipeDown
   * @type function
   * @description
   *  Called when the user swipes down.
   */
  onSwipeDown?: Function | undefined;

  /**
   * @name onTap
   * @type function
   * @description
   *  Called when the user taps.
   */
  onTap?: Function | undefined;

  /**
   * @name onDoubleTap
   * @type function
   * @description
   *  Called when the user double taps.
   */
  onDoubleTap?: Function | undefined;

  /**
   * @name onPinch
   * @type function
   * @description
   *  Called when the user pinches in or out.
   */
  onPinch?: Function | undefined;

  /**
   * @name onPinchIn
   * @type function
   * @description
   *  Called when the user pinches in.
   */
  onPinchIn?: Function | undefined;

  /**
   * @name onPinchOut
   * @type function
   * @description
   *  Called when the user pinches out.
   */
  onPinchOut?: Function | undefined;

  /**
   * @name onTouch
   * @type function
   * @description
   *  Called when the user touches.
   */
  onTouch?: Function | undefined;

  /**
   * @name onTransform
   * @type function
   * @description
   *  Called when the user transforms.
   */
  onTransform?: Function | undefined;

  /**
   * @name onRotate
   * @type function
   * @description
   *  Called when the user rotates.
   */
  onRotate?: Function | undefined;
}

class GestureDetector extends React.Component<GestureDetectorProps> {
  public constructor(props: GestureDetectorProps | Readonly<GestureDetectorProps>) {
    super(props);
  }

  public render(): React.ReactNode {
    return <ons-gesture-detector {...this.props}>{this.props.children}</ons-gesture-detector>;
  }
}

export { GestureDetector, GestureDetectorProps };
