"use client";
import { places } from "@/db/schema";
import { changePlace } from "@/db/server-actions/postActions";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  id: number;
}

const PlaceButton = ({ children, id }: Props) => {
  const router = useRouter();
  const handleClick = (input: number) => {
    changePlace(input);
    router.refresh();
  };
  return (
    <button
      className="btn btn-neutral rounded-md btn-sm"
      onClick={() => handleClick(id)}
    >
      {children}
    </button>
  );
};

export default PlaceButton;
