import { ReactNode } from "react";

export function Header(props: { children: ReactNode }) {
  return <header className="h-16 w-screen px-16 flex items-center justify-between">{props.children}</header>;
}
