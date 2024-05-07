import React, { useEffect } from 'react'
import { useLocation } from 'react-router';

export const ScrollToTop = () => {
    const {pathName} = useLocation();
    useEffect(()=>{
window.scrollTo(0,0 )
        
    },[pathName])
  return null;
}
