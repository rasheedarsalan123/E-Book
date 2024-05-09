import React, { useEffect } from 'react'

export const titel = (title) => {
    useEffect(
        ()=>{
document.title = `${title} E-Book`
        },[title]
    )
  return  null
}
