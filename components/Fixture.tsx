import React from 'react'
import CardFixture from './CardFixture'

const RIVALES = [
  {
    image: '/images/alianza.png',
    torneo: 'Por Copa Libertadores - Fase de grupos',
    fecha: '02/04',
  },
  {
    image: '/images/argentinos.png',
    torneo: 'Por Liga Argentina - Jornada 9',
    fecha: '10/04',
  },
  {
    image: '/images/fortaleza.png',
    torneo: 'Por Copa Libertadores - Fase de grupos',
    fecha: '13/04',
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
