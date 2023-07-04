import { createContext, useContext, useState, useEffect } from "react"

const AppContext = createContext()
export const useApp = () => useContext(AppContext)

export const AppProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState()
  // const [currentUserIsLoading, setCurrentUserIsLoading] = useState()

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setCurrentUser(user)
    })
  }, [])

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    currentUser
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
