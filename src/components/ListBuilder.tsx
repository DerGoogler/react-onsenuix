import { Component, isValidElement } from "react";
import ons from "onsenui";
import React from "react";
import { List } from "./List";
import { ISharedPreferences, SharedPreferences } from "googlers-tools";
import { Card } from "./Card";
import { Switch } from "./Switch";
import { Select } from "./Select";
import { GestureDetector } from "./GestureDetector";

interface ListBuilderProps {
  data: ListBuilderData[];
}

interface ListBuilderOptions {
  key?: string;
  disabled?: boolean;
  id?: string;
  style?: React.CSSProperties;
  /**
   * @deprecated This element slow down the rendering
   */
  expandableContent?: JSX.Element | HTMLElement | string | undefined;
  /**
   * @deprecated This element slow down the rendering
   */
  expandable?: boolean;
  tappable?: boolean;
  unTyped?: any;
  modifier?: string;
  /**
   * Makes an dialog
   */
  helper?: ListDataHelper;
  type: "switch" | "select" | "";
  text: string | JSX.Element;
  subtext?: string | JSX.Element;

  /**
   * Performs an onClick event to the current list item
   * @param key Get the key from the current list item
   */
  onClick?(key?: string | undefined): void;
  selectValue?: ListBuilderSelectValue[];
  icon?: string | JSX.Element;
  selectDefaultValue?: string;
  selectDefaultText?: string;
  switchDefaultValue?: boolean;
  /**
   *
   * @param {Event} e Event
   * @param {String} key Returns the key
   * @param {Void} keepDefaultFuntion This will keep the default function
   */
  callback?(e?: any, key?: string | undefined, keepDefaultFuntion?: void): void;
}

interface ListDataHelper {
  /**
   * Hold the current list item text to open the dialog
   */
  text: string;
  /**
   * @default true
   */
  cancelable?: boolean;
}

interface ListBuilderSelectValue {
  text: string;
  value: string;
  disabled?: boolean;
}

interface ListBuilderData {
  title: string;
  id?: string;
  unTyped?: any;
  style?: React.CSSProperties;
  className?: string;
  content: ListBuilderOptions[];
}

class ListBuilder extends Component<ListBuilderProps> {
  private pref: ISharedPreferences;

  public constructor(props: ListBuilderProps | Readonly<ListBuilderProps>) {
    super(props);
    this.pref = new SharedPreferences();
  }

  public render() {
    const { data } = this.props;
    return (
      <>
        <List.Body
          dataSource={data}
          renderRow={(header: ListBuilderData): JSX.Element => (
            <section id={header.id} className={header.className} style={header.style}>
              <List.Title>{header.title}</List.Title>
              {header.content.map((item: ListBuilderOptions) => (
                <>
                  <List.Item
                    modifier={item.modifier ? item.modifier : ""}
                    tappable={item.tappable}
                    id={item.key + "-ListItem"}
                    style={item.style}
                    onClick={() => {
                      if (typeof item.onClick == "function") {
                        const key = item.key;
                        item.onClick(key);
                      }
                    }}
                  >
                    {item.icon === (null || "" || undefined) ? null : isValidElement(item.icon) ? <div className="left">{item.icon}</div> : null}
                    <GestureDetector
                      onHold={() => {
                        if (item.helper?.text) {
                          ons.notification.alert({
                            message: item.helper?.text,
                            title: "Info",
                            buttonLabels: ["Ok"],
                            animation: "default",
                            primaryButtonIndex: 1,
                            cancelable: item.helper?.cancelable,
                          });
                        }
                      }}
                    >
                      <div className="center">
                        {item.subtext === (null || "" || undefined) ? (
                          item.text
                        ) : (
                          <>
                            <span className="list-item__title">{item.text}</span>
                            <span className="list-item__subtitle" style={{ display: "block" }}>
                              {item.subtext}
                            </span>
                          </>
                        )}
                      </div>
                    </GestureDetector>
                    <div className="right">
                      {(() => {
                        switch (item.type) {
                          case "switch":
                            return (
                              <Switch
                                checked={this.pref.getBoolean(`${item.key!}_switch`, false)}
                                disabled={item.disabled}
                                onChange={(e: any) => {
                                  /**
                                   * This will keep the default funtion
                                   */
                                  const keepDefaultFuntion = (): void => this.pref.setBoolean(`${item.key!}_switch`, e.target.checked);
                                  if (typeof item.callback == "function") {
                                    const key = item.key;
                                    item.callback(e, key, keepDefaultFuntion());
                                  } else {
                                    keepDefaultFuntion();
                                  }
                                }}
                              ></Switch>
                            );
                          case "select":
                            return (
                              <Select
                                disabled={item.disabled}
                                // @ts-ignore --> Argument of type 'string | undefined' is not assignable to parameter of type 'string'. Type 'undefined' is not assignable to type 'string'.ts(2345)
                                value={this.pref.getString(`${item.key!}_select`, item.selectDefaultValue)}
                                onChange={(e: any) => {
                                  const keepDefaultFuntion = () => this.pref.setString(`${item.key!}_select`, e.target.value);
                                  if (typeof item.callback == "function") {
                                    const key = item.key;
                                    item.callback(e, key, keepDefaultFuntion());
                                  } else {
                                    keepDefaultFuntion();
                                  }
                                }}
                              >
                                <option value="" selected disabled hidden>
                                  {item.selectDefaultText ? item.selectDefaultText : "Choose"}
                                </option>
                                {item.selectValue?.map((select: ListBuilderSelectValue) => (
                                  <>
                                    <option value={select.value} disabled={select.disabled}>
                                      {select.text}
                                    </option>
                                  </>
                                ))}
                              </Select>
                            );
                          default:
                            return;
                        }
                      })()}
                    </div>
                  </List.Item>
                </>
              ))}
            </section>
          )}
        />
      </>
    );
  }
}

export { ListBuilder, ListBuilderOptions, ListBuilderData, ListBuilderProps, ListBuilderSelectValue };
