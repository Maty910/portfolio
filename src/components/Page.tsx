import type { PropsWithChildren } from 'react';
import { FiCode } from 'react-icons/fi' 
import './Page.css' 

export function Page({ children }: PropsWithChildren) {
  return (
    <div className="page container">
      <h1 >Matías Chacón <FiCode /></h1>
      <img className="page-img" src="/images/FOTO DE PERFIL.jpg" alt="" />
      <img className="home-logo" src="/Logo Mati.svg" alt="Logo de Matías" />
      {children}
    </div>
  )
}