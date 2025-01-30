'use client'
import React, { createContext, useContext, useState } from 'react'

const QueryContext = createContext()
export const BusinessNameContext = ({ children }) => {
    const [query, setQuery] = useState(() => {
        if (typeof window !== 'undefined') {
            const sessionQuery = sessionStorage.getItem('query')
            if (sessionQuery) return JSON.parse(sessionQuery)
        } else {
            return {}
        }
    })

    const updateQuery = (newQuery) => {
        setQuery((prev) => {
            const newQueryData = { ...prev, ...newQuery }
            if (typeof window !== 'undefined') {
                sessionStorage.setItem('query', JSON.stringify(newQueryData))
            }
            return newQueryData
        })
    }

    return (
        <QueryContext.Provider value={{ query, updateQuery }} >
            {children}
        </QueryContext.Provider>
    )
}

// custom hook to use query  context 
export function useQueryContext() {
    return useContext(QueryContext)
}