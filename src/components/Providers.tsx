"use client"



import { NextUIProvider } from '@nextui-org/system'
import React, { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'


export default function Providers({children}:{children:ReactNode}) {


  return (
    <NextUIProvider>

          <ToastContainer position='bottom-right'hideProgressBar className="z-50"/>

        {children}
    </NextUIProvider>  )
}
