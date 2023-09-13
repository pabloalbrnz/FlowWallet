import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CTAButtonProps {
  placeholder: { text: string; icon?: ReactNode };
  disabled?: boolean;
  mergeClass?: string;
}

export function CTAButton(props: CTAButtonProps) {
  return (
    <button
      className={twMerge(
        "flex gap-2 items-center justify-center text-flow-green-dark-50 text-xl bg-flow-green-dark-800 py-2 px-4 rounded border border-flow-green-dark-100 transition-all ease-linear hover:text-flow-green-dark-100 hover:bg-flow-green-dark-950 hover:border-flow-green-dark-200 hover:rounded-lg",
        props.mergeClass
      )}
      disabled={props.disabled == true ? true : false}
    >
      <span>{props.placeholder.text}</span>
      {props.placeholder.icon ? props.placeholder.icon : <></>}
    </button>
  );
}
