// Type definitions para View Transitions API
// https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API

interface ViewTransition {
  /**
   * Promise que se resuelve cuando la transición está lista para comenzar
   */
  ready: Promise<void>;
  
  /**
   * Promise que se resuelve cuando la transición termina
   */
  finished: Promise<void>;
  
  /**
   * Promise que se resuelve cuando la animación está lista para actualizarse
   */
  updateCallbackDone: Promise<void>;
  
  /**
   * Permite saltar la animación de transición
   */
  skipTransition: () => void;
}

interface Document {
  /**
   * Inicia una transición de vista
   * @param callback - Función que realiza los cambios de DOM
   */
  startViewTransition(callback: () => void | Promise<void>): ViewTransition;
}
