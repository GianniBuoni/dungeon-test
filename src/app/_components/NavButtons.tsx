"use client";
import React, { ReactNode } from "react";
import { goPlace } from "@/db/serverActions";
import { useRouter } from "next/navigation";

interface Props {
  children: ReactNode;
  id: number;
}

const Buttons = ({ children, id }: Props) => {
  const router = useRouter();

  const handleClick = (passedId: number) => {
    goPlace(passedId);
    router.refresh();
  };

  return (
    <button
      className="btn btn-base-900 btn-sm rounded-md hover:btn-neutral transition-colors"
      onClick={() => handleClick(id)}
    >
      {children}
    </button>
  );
};

export default Buttons;
