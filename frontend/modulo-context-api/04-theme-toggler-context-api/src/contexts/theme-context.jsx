import { createContext, useState } from 'react'

export const themes = {
    light: {
        color: '#000',
        backgroundColor: '#eee'
    },
    dark: {
        color: '#fff',
        backgroundColor: '#000'
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const [ theme, setTheme ] = useState(themes.light) 

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}