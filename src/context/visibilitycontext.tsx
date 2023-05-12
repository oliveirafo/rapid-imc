import { createContext, useState } from "react";


export const VisibilityContext = createContext({})


export function VisibilityProvider ({children}: any) {

  const [isVisible, setIsVisible] = useState('visible')

  return (
    <VisibilityContext.Provider value={{isVisible, setIsVisible}} >
      {children}
    </VisibilityContext.Provider>
  )
} 