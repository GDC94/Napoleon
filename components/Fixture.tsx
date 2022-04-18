import React from 'react'
import CardFixture from './CardFixture'

const RIVALES = [
  {
    image: '/images/alianza.png',
    torneo: 'Por Copa Libertadores - Fase de grupos',
    fecha: '1 - 0 ',
  },
  {
    image: '/images/argentinos.png',
    torneo: 'Por Liga Argentina - Jornada 9',
    fecha: '4 - 2',
  },
  {
    image: '/images/fortaleza.png',
    torneo: 'Por Copa Libertadores - Fase de grupos',
    fecha: '2 - 0 ',
  },
  {
    image: '/images/banfield.png',
    torneo: 'Por Liga Argentina - Jornada 10',
    fecha: '17/04',
  },
]

export default function Fixture() {
  return (
    <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 ">
      {RIVALES.map((rival) => (
        <CardFixture
          torneo={rival.torneo}
          fecha={rival.fecha}
          escudorival={rival.image}
        />
      ))}
    </div>
  )
}
