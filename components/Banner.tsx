import React from 'react'

interface Image {
  image: string
  alt: string
  id: number
}
const SPONSORS: Image[] = [
  {
    image: '/images/adidas.png',
    alt: 'Adidas',
    id: 1,
  },
  {
    image: '/images/amazon.png',
    alt: 'Amazon',
    id: 2,
  },
  {
    image: '/images/coca.png',
    alt: 'Coke',
    id: 3,
  },
  {
    image: '/images/turkish.png',
    alt: 'Turkish',
    id: 4,
  },

  {
    image: '/images/konamis.png',
    alt: 'konami',
    id: 5,
  },
  {
    image: '/images/flow.png',
    alt: 'flow',
    id: 6,
  },
]

const Banner: React.FC = (props) => {
  return (
    <div className=" mx-auto flex  max-w-3xl justify-center p-1 ">
      {SPONSORS.map((sponsor) => (
        <img
          className="h-6 object-contain sm:px-3 p-1   lg:px-5 "
          key={sponsor.id}
          src={sponsor.image}
          alt={sponsor.alt}
        />
      ))}
    </div>
  )
}

export default Banner
