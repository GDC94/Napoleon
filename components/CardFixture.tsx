import React from 'react'

interface Props {
  torneo: string
  escudorival: string
  fecha: string
}

export default function CardFixture(props: Props) {
  return (
    <div className="rounded-lg p-3 shadow-xl h-32 flex flex-col justify-center  ">
      <div className="flex flex-col items-center justify-center">
        <h5 className="mb-2 font-sans lg:text-xs sm:text-lg font-bold tracking-tight text-black ">
          {props.torneo}
        </h5>
        <p className="lg:text-xs sm:text-lg font-bold">{props.fecha}</p>
      </div>
      <div className="flex items-center justify-around">
        <img
          className="w-9 cursor-pointer object-contain"
          src={'/images/escudo.png'}
          alt=""
        />
        <p className="font-bold text-black">VS</p>
        <img
          className="w-9 cursor-pointer object-contain "
          src={props.escudorival}
          alt=""
        />
      </div>
    </div>
  )
}
