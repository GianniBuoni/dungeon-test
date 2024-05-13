"use client";
import { buyHealth } from "@/db/server-actions/postActions";
import React, { ReactNode } from "react";
import { myButton } from "../_styles/myClasses";
import { getMe } from "@/db/server-actions/getActions";
import { useRouter } from "next/navigation";

interface Props {
  children: ReactNode;
  goldNeeded: number;
  action: () => Promise<void>;
}

const TransactionButton = ({ children, goldNeeded, action }: Props) => {
  const router = useRouter();

  const handleClick = async () => {
    const currentMe = await getMe();
    if (currentMe.me.gold < goldNeeded)
      alert(`You do not have enough gold (${goldNeeded}g)`);
    else
      try {
        action();
        router.refresh();
      } catch (error) {
        if (goldNeeded) alert("There are no more weapons in the store to buy");
        else alert("You cannot sell your only equipped weapon");
      }
  };

  return (
    <button onClick={handleClick} className={myButton}>
      {children}
    </button>
  );
};

export default TransactionButton;
