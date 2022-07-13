import { dom } from "googlers-tools";
import * as React from "react";
import { DefinedProps } from "../utils/DefinedProps";

interface TabbarProps {
  /**
   * @description
   * The index of the tab to highlight.
   */
  activeIndex?: number | undefined;

  /**
   * @deprecated Use `activeIndex` instead.
   */
  index?: number | undefined;

  /**
   * @description
   * Function that returns an array of objects with the keys `content` and `tab`.
   */
  renderTabs: TabbarRenderTab;

  /**
   * @description
   * Tabbar's position. Available values are `"bottom"` and `"top"`. Use `"auto"` to choose position depending on platform (iOS bottom, Android top).
   */
  position?: "bottom" | "top" | "auto" | undefined;

  /**
   * @description
   * Enable swipe interaction.
   */
  swipeable?: boolean | undefined;

  /**
   * @description
   * Distance in pixels from both edges. Swiping on these areas will prioritize parent components such as `Splitter` or `Navigator`.
   */
  ignoreEdgeWidth?: number | undefined;

  /**
   * @description
   * If this attribute is set to `"none"` the transitions will not be animated.
   */
  animation?: "none" | "slide" | undefined;

  /**
   * @description
   * Specify the animation's duration, delay and timing. E.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.
   */
  animationOptions?: TabbarAnimationOptions | undefined;

  /**
   * @description
   * If true, the tabs show a dynamic bottom border. Only works for iOS since the border is always visible in Material Design.
   */
  tabBorder?: Function | undefined;

  /**
   * @description
   * Called just before the tab is changed.
   */
  onPreChange?: (event: TabbarEvent) => void | undefined;

  /**
   * @description
   * Called just after the tab is changed.
   */
  onPostChange?: (event: TabbarEvent) => void | undefined;

  /**
   * @description
   * Called if the already open tab is tapped again.
   */
  onReactive?: (event: TabbarEvent) => void | undefined;

  /**
   * @description
   * Hook called whenever the user slides the tabbar. It gets a decimal index and an animationOptions object as arguments.
   */
  onSwipe?: Function | undefined;

  /**
   * @description
   * If true, the tabbar is not shown on the screen. Otherwise, the tabbar is shown.
   */
  hideTabs?: boolean | undefined;

  /**
   * @deprecated Use `hideTabs` instead.
   */
  visible?: boolean | undefined;

  /**
   * @description
   * The appearance of the tabbar.
   */
  modifier?: string | undefined;
}

interface TabbarEvent {
  readonly index: number;
}

interface TabbarRenderTab {
  content: JSX.Element;
  tab: JSX.Element;
}

interface TabbarAnimationOptions {
  duration?: number | undefined;
  delay?: number | undefined;
  timing?: string | undefined | unknown;
}

type EditedTabbarProps = Omit<DefinedProps<TabbarProps>, "children" | "style">;

class Tabbar extends React.Component<EditedTabbarProps> {
  private onPreChange: <K extends keyof HTMLElementEventMap>(evt: HTMLElementEventMap[K]) => void;
  private onPostChange: <K extends keyof HTMLElementEventMap>(evt: HTMLElementEventMap[K]) => any;
  private onReactive: <K extends keyof HTMLElementEventMap>(evt: HTMLElementEventMap[K]) => any;
  private ref: React.RefObject<HTMLElement>;

  public constructor(props: EditedTabbarProps | Readonly<EditedTabbarProps>) {
    super(props);

    const callback = <K extends keyof HTMLElementEventMap>(name: string, event: HTMLElementEventMap[K]) => {
      if (this.props[name]) {
        return this.props[name](event);
      }
    };

    this.ref = React.createRef();

    this.onPreChange = callback.bind(this, "onPreChange");
    this.onPostChange = callback.bind(this, "onPostChange");
    this.onReactive = callback.bind(this, "onReactive");
  }

  public componentDidMount() {
    dom.findBy(this.ref, (e: HTMLElement) => {
      e.addEventListener("prechange", this.onPreChange);
      e.addEventListener("postchange", this.onPostChange);
      e.addEventListener("reactive", this.onReactive);
    });
  }

  public render(): React.ReactNode {
    const { renderTabs, ref, activeIndex, hideTabs, visible } = this.props;
    const tabs = renderTabs(activeIndex, ref);

    // visible is deprecated in favour of hideTabs, but if visible is defined and
    // hideTabs is not, we use its negation as the value of hideTabs
    let reallyHideTabs;
    if (hideTabs === undefined && visible !== undefined) {
      reallyHideTabs = !visible;
    } else {
      reallyHideTabs = hideTabs;
    }

    return (
      <ons-tabbar {...this.props} hideTabs={reallyHideTabs} ref={this.ref}>
        <div className="tabbar__content">
          <div>{tabs.map((tab: TabbarRenderTab) => tab.content)}</div>
          <div></div>
        </div>
        <div className="tabbar">
          {tabs.map((tab: TabbarRenderTab) => tab.tab)}
          <div className="tabbar__border"></div>
        </div>
      </ons-tabbar>
    );
  }
}

export { Tabbar, TabbarProps, TabbarRenderTab, EditedTabbarProps };
export { TabbarAnimationOptions, TabbarEvent };
