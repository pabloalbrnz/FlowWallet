import "./style.css";
import { ReactNode } from "react";

interface ButtonProps {
  placeholder?: { text?: string; visible?: boolean };
  icon?: { side: "left" | "right"; element: ReactNode };
  style?: "primary" | "secondary" | "disabled";
}

export function Button({ style = "primary", ...props }: ButtonProps) {
  let btnStyle: string,
    disabled = false;

  switch (style) {
    case "primary":
      btnStyle =
        "flex gap-2 items-center text-flow-green-dark-100 font-poppins text-md px-4 h-8 border-[1px] border-opacity-25 border-flow-green-dark-50 rounded-sm bg-flow-green-dark-900 transition-all ease-linear hover:rounded-lg hover:border-opacity-100 hover:bg-opacity-100 hover:bg-flow-green-dark-950 hover:text-flow-green-dark-50 focus:border-flow-green-dark-500 box-border cursor-pointer";
      break;
    case "secondary":
      btnStyle =
        "flex gap-2 items-center text-flow-green-dark-950 font-poppins text-md px-4 h-8 border-[1px] border-opacity-25 border-flow-green-dark-50 rounded-sm bg-flow-green-dark-500 transition-all ease-linear hover:rounded-lg hover:border-opacity-100 hover:bg-flow-green-dark-700 hover:text-flow-green-dark-night focus:border-flow-green-dark-500 box-border cursor-pointer";
      break;
    case "disabled":
      btnStyle =
        "flex gap-2 items-center text-gray-400 font-poppins text-md px-4 h-8 border-[1px] border-opacity-25 border-gray-200 rounded-sm bg-gray-900 box-border cursor-not-allowed";
      disabled = true;
      break;
  }

  let side = props.icon ? props.icon.side : null;

  return (
    <button disabled={disabled} className={btnStyle}>
      {props.icon ? (
        side == "left" ? (
          <>
            {props.icon.element}
            {props.placeholder ? (
              <span
                className={
                  props.placeholder.visible == true ? "" : "btn-animated"
                }
              >
                {props.placeholder.text}
              </span>
            ) : (
              ""
            )}
          </>
        ) : (
          <>
            {props.placeholder ? (
              <span
                className={
                  props.placeholder.visible == true ? "" : "btn-animated"
                }
              >
                {props.placeholder.text}
              </span>
            ) : (
              ""
            )}
            {props.icon.element}
          </>
        )
      ) : (
        <>{props.placeholder ? props.placeholder.text : null}</>
      )}
    </button>
  );
}
