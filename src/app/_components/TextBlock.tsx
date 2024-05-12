import { PropsWithChildren } from "react";
import { myCard } from "../_styles/clsx";

// places.text is rendered here as markdown prose.

const TextBlock = ({ children }: PropsWithChildren) => {
  return <div className={`${myCard} font-semibold`}>{children}</div>;
};

export default TextBlock;
