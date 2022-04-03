import React from 'react'
import Plantel from './Plantel'

export default function () {
  return (
    <>
      <div className="h-1 bg-black"></div>
      <div className=" h-auto bg-[url('/images/cuadro.jpeg')] bg-cover bg-center backdrop-brightness-50 backdrop-contrast-200">
        <div className="mx-auto flex max-w-6xl justify-start p-5">
          <Plantel />
        </div>
      </div>
    </>
  )
}
