import React from "react";

export interface DefinePropsInterface<E = HTMLElement> {
  ref?: React.Ref<E> | undefined;
  children?: React.ReactNode | undefined;
  className?: string | undefined;
  hidden?: boolean | undefined;
  id?: string | undefined;
  style?: React.CSSProperties | undefined;
  title?: string | undefined;
}

export type DefineProps<P = {}, E = HTMLElement> = DefinePropsInterface<E> & P;
