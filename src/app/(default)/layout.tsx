import type { ReactElement, ReactNode } from "react";

interface IRootProps {
  children: ReactNode;
}

export default function DefaultLayout({
  children,
}: Readonly<IRootProps>): ReactElement {
  return (
    <div data-theme="dark" className="w-full h-full bg-base-200">
      <main className="flex flex-col justify-between items-center w-full h-full">
        {children}
      </main>
    </div>
  );
}
