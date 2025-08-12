import type { PropsWithChildren } from 'react';

export function Page({ children }: PropsWithChildren) {
  return (
    <div className="page container">
      <h1>Matías Chacón</h1>
      {children}
    </div>
  )
}