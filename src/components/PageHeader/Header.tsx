import { ReactNode } from "react";

export function Header(props: { children: ReactNode }) {
  return <header className="h-16 w-screen px-16 inline-flex items-center justify-between fixed">{props.children}</header>;
}
