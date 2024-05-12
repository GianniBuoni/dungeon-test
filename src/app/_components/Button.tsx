"use client";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  id?: number;
  funct: (id?: number) => void;
}

const Button = ({ children, id, funct }: Props) => {
  const router = useRouter();
  const handleClick = (input?: number) => {
    funct(input);
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

export default Button;
