import type { PropsWithChildren } from 'react';
import { FiCode } from 'react-icons/fi' 

export function Page({ children }: PropsWithChildren) {
  return (
    <div className="page container">
      <h1 >Matías Chacón <FiCode /></h1>
      {children}
    </div>
  )
}