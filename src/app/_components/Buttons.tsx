"use client";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Buttons = ({ children }: Props) => {
  return (
    <button
      className="btn btn-primary btn-sm"
      onClick={() => console.log("clicked")}
    >
      {children}
    </button>
  );
};

export default Buttons;
