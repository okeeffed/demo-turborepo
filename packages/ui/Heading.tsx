import * as React from "react";

interface HeadingProps {
  children: React.ReactNode;
}

export function Heading({ children }: HeadingProps) {
  return <h1>{children}</h1>;
}
