import React from "react";

export interface DefinePropsInterface<E> extends React.HTMLAttributes<E> {}

export type HTMLAttributes<E, P = {}> = React.DetailedHTMLProps<React.HTMLAttributes<E> & P, E>;
export type AnchorHTMLAttributes<E, P = {}> = React.DetailedHTMLProps<React.AnchorHTMLAttributes<E> & P, E>;
export type DefineProps<P = {}> = HTMLAttributes<HTMLElement, P>;
