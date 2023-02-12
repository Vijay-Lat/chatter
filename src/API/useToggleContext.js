import React, { useContext } from 'react'
import toggleContext from '../Store/toggleContext'

const useToggleContext = () => {
    const show = useContext(toggleContext)

    return show
   
}

export default useToggleContext
