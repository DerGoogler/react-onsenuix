import * as React from "react";
import { ViewX } from "../extends/ViewX";
import { Device } from "../utils/Device";

/**
 * ContentXView is an optional component, to improve the view better on desktop
 * @DefinedProps true
 * @extends {ViewX}
 */
class ContentXView extends ViewX<{}, {}, HTMLDivElement> {
  private stlye: any = {
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    minWidth: "200px",
    maxWidth: "580px",
    margin: "0px auto",
    padding: Device.isMobile ? "" : "45px",
  };

  public createView = () => {
    return (
      <div style={{ padding: Device.isMobile ? "" : "16px" }}>
        <div style={Device.isMobile ? {} : this.stlye}>{this.props.children}</div>
      </div>
    );
  };

  public render() {
    return <></>
  }
}

export { ContentXView };
