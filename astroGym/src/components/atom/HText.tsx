import React from 'react'
import { HTextProps } from '../types/types'

const HText = ({children}: HTextProps) => {
  return (
    <h1 className=" basis-3/5 font-montserrat text-3xl font-bold">
        {children}
    </h1>
  )
}

export default HText