import React from 'react'

interface Jugador {
  nombre: string
  numero: number
}

const JUGADORES: Jugador[] = [
  {
    nombre: 'armani',
    numero: 1,
  },
  {
    nombre: 'petroli',
    numero: 12,
  },
  {
    nombre: 'centurion',
    numero: 33,
  },
  {
    nombre: 'rojas',
    numero: 2,
  },
  {
    nombre: 'maidana',
    numero: 4,
  },
  {
    nombre: 'martinez',
    numero: 6,
  },
  {
    nombre: 'pirez',
    numero: 6,
  },
  {
    nombre: 'herrera',
    numero: 15,
  },
  {
    nombre: 'diaz',
    numero: 17,
  },
  {
    nombre: 'casco',
    numero: 20,
  },
  {
    nombre: 'pinola',
    numero: 22,
  },
  {
    nombre: 'mammana',
    numero: 23,
  },
  {
    nombre: 'gomez',
    numero: 29,
  },
  {
    nombre: 'zuculini',
    numero: 5,
  },
  {
    nombre: 'palavecino',
    numero: 8,
  },
  {
    nombre: 'quintero',
    numero: 10,
  },
  {
    nombre: 'delacruz',
    numero: 11,
  },
  {
    nombre: 'fernandez',
    numero: 13,
  },
  {
    nombre: 'barco',
    numero: 21,
  },
  {
    nombre: 'perez',
    numero: 24,
  },
  {
    nombre: 'paradela',
    numero: 26,
  },
  {
    nombre: 'penia',
    numero: 28,
  },
  {
    nombre: 'simon',
    numero: 31,
  },
  {
    nombre: 'pochettino',
    numero: 32,
  },
  {
    nombre: 'suarez',
    numero: 7,
  },
  {
    nombre: 'alvarez',
    numero: 9,
  },
  {
    nombre: 'londoño',
    numero: 18,
  },
  {
    nombre: 'romero',
    numero: 19,
  },
]

export default function Plantel() {
  return (
    <div className=" grid  grid-cols-6  gap-2 lg:mx-0 sm:mx-auto">
      {JUGADORES.map((jugador) => {
        return (
          <div className="hover:bg-redstrong transition mt-1.5 flex flex-col items-center justify-center rounded-lg bg-card ">
            <img
              className="w-20 cursor-pointer object-contain"
              src={`/plantel/${jugador.nombre}.png`}
              alt=""
            />
            <p className="  text-md mt-2 font-semibold text-white">
              {jugador.numero}
            </p>
          </div>
        )
      })}
    </div>
  )
}
