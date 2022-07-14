import { dom } from "googlers-tools";
import * as React from "react";

interface RouterNavigatorProps {
  /**
   * @name renderPage
   * @type function
   * @required true
   * @defaultValue null
   * @description
   *  This function takes the current route object as a parameter and returns a react componen.
   */
  renderPage: Function;
  /**
   * @name routeConfig
   * @type object
   * @required true
   * @defaultValue null
   * @description
   *  This object must contain two properties:
   *  `routeStack`: An array of route objects,
   *  `processStack`: An array of process objects `{ type: push | pop | reset, route: userRoute }` that
   *  describe the transition from the current state to the next state.
   *  Make sure that the route stack is not emptied before the animations for the `processStack` have completed.
   *  It is recommended to update the `routeStack` and empty the `processStack` in the 'onPostPop' callback.
   */
  routeConfig: {
    routeStack: any[];
    processStack: any[];
  };

  /**
   * @name onPrePush
   * @type function
   * @required false
   * @description
   *  Called just before a page is pushed.
   */
  onPrePush?: Function | undefined;

  /**
   * @name onPostPush
   * @type function
   * @required false
   * @description
   *  Called just after a page is pushed.
   */
  onPostPush?: Function | undefined;

  /**
   * @name onPrePop
   * @type function
   * @required false
   * @description
   *  Called just before a page is popped.
   */
  onPrePop?: Function | undefined;

  /**
   * @name onPostPop
   * @type function
   * @required false
   * @description
   *  Called just after a page is popped.
   */
  onPostPop?: Function | undefined;

  /**
   * @property animation
   * @type {String}
   * @description
   *  Animation name. Available animations are `"slide"`, `"lift"`, `"fade"` and `"none"`.
   *  These are platform based animations. For fixed animations, add `"-ios"` or `"-md"` suffix to the animation name. E.g. `"lift-ios"`, `"lift-md"`. Defaults values are `"slide-ios"` and `"fade-md"`.
   */
  animation?: string | undefined;

  /**
   * @name animationOptions
   * @type object
   * @description
   *  Specify the animation's duration, delay and timing. E.g.  `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.
   */
  animationOptions?: object | undefined;

  /**
   * @name swipeable
   * @type bool|string
   * @required false
   * @description
   *  Enables swipe-to-pop functionality for iOS.
   */
  swipeable?: boolean | string | undefined;

  /**
   * @name swipePop
   * @type function
   * @required false
   * @description
   *  Function called on swipe-to-pop. Must perform a popPage with the given options object.
   */
  swipePop?: Function | undefined;

  /**
   * @name onDeviceBackButton
   * @type function
   * @required false
   * @description
   *  Custom handler for device back button.
   */
  onDeviceBackButton?: Function | undefined;
}

/**
 * @original ons-navigator
 * @category navigation
 * @tutorial react/Reference/navigator
 * @description
 * This component is a variant of the Navigator with a declarative API. In order to manage to display the pages, the  navigator needs to define the `renderPage` method, that takes an route and a navigator and  converts it to an page.
 */
class RouterNavigator extends React.Component<RouterNavigatorProps> {
  private cancelUpdate: boolean;
  private page: null;
  private pages: any;
  private ref: React.RefObject<any>;
  private routeConfig: any;
  private onPrePush: (event: any) => any;
  private onPostPush: (event: any) => any;
  private onPrePop: (event: any) => any;
  private onPostPop: (event: any) => any;

  public constructor(props: RouterNavigatorProps | Readonly<RouterNavigatorProps>) {
    super(props);

    this.cancelUpdate = false;
    this.page = null;

    this.ref = React.createRef();

    const callback = (name: "onPrePush" | "onPostPush" | "onPrePop" | "onPostPop", event: any) => {
      if (this.props[name]) {
        return this.props[name]!(event);
      }
    };

    this.onPrePush = callback.bind(this, "onPrePush");
    this.onPostPush = callback.bind(this, "onPostPush");
    this.onPrePop = callback.bind(this, "onPrePop");
    this.onPostPop = callback.bind(this, "onPostPop");
  }

  public update(cb?: any) {
    if (!this.cancelUpdate) {
      this.setState({}, cb);
    }
  }

  /**
   * @method resetPageStack
   * @signature `resetPageStack(route, options = {})`
   * @param {Array} [routes]
   *   The routes that the navigator should be reset to.
   * @return {Promise}
   *   Promise which resolves to the revealed page.
   * @description
   *    Resets the navigator to the current page stack
   */
  public resetPageStack(routes: any[], options = {}): Promise<any> | undefined {
    if (this.isRunning()) {
      return;
    }

    const update = () => {
      return new Promise(resolve => {
        this.pages.push(this.props.renderPage(routes[routes.length - 1]));
        this.update(resolve);
      });
    };

    return this.ref.current._pushPage(options, update).then(() => {
      this.pages = routes.map(route => this.props.renderPage(route));
      this.update();
    });
  }

  /**
   * @method pushPage
   * @signature pushPage(route, options = {})
   * @param {Array} [routes]
   *   The routes that the navigator should push to.
   * @return {Promise}
   *   Promise which resolves to the revealed page.
   * @description
   *   Pushes a page to the page stack
   */
  private pushPage(route: any[], options = {}): Promise<any> | undefined {
    if (this.isRunning()) {
      return;
    }

    const update = () => {
      return new Promise(resolve => {
        this.page = this.props.renderPage(route);
        this.update(resolve);
      });
    };

    return this.ref.current._pushPage(options, update).then(() => {
      this.page = null;
      this.update();
    });
  }

  public isRunning() {
    return this.ref.current._isRunning;
  }

  /*
   * @method replacePage
   * @signature replacePage(page, [options])
   * @return {Promise}
   *   Promise which resolves to the new page.
   * @description
   *   Replaces the current top page with the specified one. Extends `pushPage()` parameters.
   */
  public replacePage(route: any[], options = {}) {
    if (this.isRunning()) {
      return;
    }

    const update = () => {
      return new Promise(resolve => {
        this.pages.push(this.props.renderPage(route));
        this.update(resolve);
      });
    };

    return this.ref.current._pushPage(options, update).then(() => {
      this.pages.splice(this.pages.length - 2, 1);
      this.update();
    });
  }

  /**
   * @method popPage
   * @signature popPage(route, options = {})
   * @return {Promise}
   *   Promise which resolves to the revealed page.
   * @description
   *   Pops a page out of the page stack
   */
  public popPage(options = {}): Promise<any> | undefined {
    if (this.isRunning()) {
      return;
    }

    const update = () => {
      return new Promise(resolve => {
        this.pages.pop();
        this.update(resolve);
      });
    };

    return this.ref.current._popPage(options, update);
  }

  public _onDeviceBackButton(event?: any) {
    if (this.props.routeConfig.routeStack.length > 1) {
      this.popPage();
    } else {
      event.callParentHandler();
    }
  }

  public componentDidMount() {
    const node = this.ref.current;

    this.cancelUpdate = false;

    node.addEventListener("prepush", this.onPrePush);
    node.addEventListener("postpush", this.onPostPush);
    node.addEventListener("prepop", this.onPrePop);
    node.addEventListener("postpop", this.onPostPop);

    if (!this.props.routeConfig) {
      throw new Error("In RouterNavigator the property routeConfig needs to be set");
    }

    this.routeConfig = this.props.routeConfig;

    this.pages = this.routeConfig.routeStack.map((route: any[]) => this.props.renderPage(route, this));

    node.swipeMax = this.props.swipePop;
    node.onDeviceBackButton = this.props.onDeviceBackButton || this._onDeviceBackButton.bind(this);

    this.update();
  }

  public componentWillUnmount() {
    const node = this.ref.current;

    node.removeEventListener("prepush", this.onPrePush);
    node.removeEventListener("postpush", this.onPostPush);
    node.removeEventListener("prepop", this.onPrePop);
    node.removeEventListener("postpop", this.onPostPop);

    this.cancelUpdate = true;
  }

  public componentDidUpdate(prevProps: Readonly<RouterNavigatorProps>) {
    /* When the component updates we now have the page we're pushing in our routeConfig, so we no longer need to render it specially */
    this.page = null;

    if (this.props.onDeviceBackButton !== undefined) {
      this.ref.current.onDeviceBackButton = this.props.onDeviceBackButton;
    }

    const processStack = [...this.props.routeConfig.processStack];

    /**
     * Fix for Redux Timetravel.
     */
    if (prevProps.routeConfig.processStack.length < this.props.routeConfig.processStack.length && prevProps.routeConfig.routeStack.length > this.props.routeConfig.routeStack.length) {
      return;
    }

    if (processStack.length > 0) {
      const { type, route, options } = processStack[0];

      switch (type) {
        case "push":
          this.pushPage(route, options);
          break;
        case "pop":
          this.popPage(options);
          break;
        case "reset":
          if (Array.isArray(route)) {
            this.resetPageStack(route, options);
          } else {
            this.resetPageStack([route], options);
          }
          break;
        case "replace":
          this.replacePage(route, options);
          break;
        default:
          throw new Error(`Unknown type ${type} in processStack`);
      }
    }
  }

  public render() {
    const { routeConfig, renderPage } = this.props;

    /* Gather pages to render and the animating page in one array so React reuses components. */
    const pagesToRender = routeConfig.routeStack.map(route => renderPage(route));
    pagesToRender.push(this.page);

    return (
      <ons-navigator {...this.props} ref={this.ref}>
        {pagesToRender}
      </ons-navigator>
    );
  }
}

export { RouterNavigator, RouterNavigatorProps };
