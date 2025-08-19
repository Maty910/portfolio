import type { PropsWithChildren } from 'react';
import { FiCode } from 'react-icons/fi' 
import './Page.css' 

export function Page({ children }: PropsWithChildren) {
  return (
    <div className="page container">
      <h1 >Matías Chacón <FiCode /></h1>
      <img src="/images/FOTO DE PERFIL.jpg" alt="" />

      {children}
    </div>
  )
}