import React from "react";

export interface DefinePropsInterface<E = HTMLElement> {
  ref?: React.Ref<E> | undefined;
  children?: React.ReactNode | React.ReactNode[] | undefined;
  className?: string | undefined;
  hidden?: boolean | undefined;
  id?: string | undefined;
  style?: React.CSSProperties | undefined;
  title?: string | undefined;
}

export type DefinedProps<P = {}, E = HTMLElement> = DefinePropsInterface<E> & P;
