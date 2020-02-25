import React, {useState} from 'react'

export const appContext = React.createContext()

const AppContextProvider = props => {
  const [isAlertShowing, setAlertShowing] = useState(true)

  return (
    <appContext.Provider value={{
      isAlertShowing,
      showAlert: () => setAlertShowing(true),
      hideAlert: () => setAlertShowing(false)
    }}>
      {props.children}
    </appContext.Provider>
  )
}

export default ({element}) => (
  <AppContextProvider>
    {element}
  </AppContextProvider>
)
