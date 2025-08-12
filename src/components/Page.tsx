import type { PropsWithChildren } from 'react';

export function Page({ children }: PropsWithChildren) {
  return <div className="page container">{children}</div>;
}