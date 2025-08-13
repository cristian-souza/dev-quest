import React, { useContext } from 'react'
import { ThemeContext } from "../../contexts/theme-context"

export const Card = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <div style={{color: theme.color, backgroundColor: theme.backgroundColor}}>
            <h1>Titulo do card</h1>
            <p> Paragrafo do card, Paragrafo do card, Paragrafo do card, Paragrafo do card, Paragrafo do card, Paragrafo do card, Paragrafo do card, Paragrafo do card,</p>
        </div>
    )
}