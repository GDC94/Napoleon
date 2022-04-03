import type { NextPage } from 'next'

import Head from 'next/head'
import Link from 'next/link'
import Banner from '../components/Banner'

import Fixture from '../components/Fixture'
import Footer from '../components/Footer'

import Header from '../components/Header'
import Picture from '../components/Picture'

import { sanityClient, urlFor } from '../sanity'
import { Post } from '../typings'

interface Props {
  posts: [Post]
}
export default function Home({ posts }: Props) {
  return (
    <div className="  flex-col  py-0">
      <Head>
        <title>Napoleón, noticias sobre River 🐔 </title>
      </Head>
      <Header />
      <Banner />
      <div className="h-1 bg-red"></div>
      <div className=" lg:py-15 h-80 bg-[url('/images/hero.png')] bg-cover bg-center py-10 shadow-xl">
        <div className="mx-auto flex max-w-6xl justify-center p-5">
          <img
            className=" w-52 cursor-pointer object-contain  "
            src={'/images/libertadores.png'}
            alt=""
          />
        </div>
      </div>
      <div className="h-1 bg-red"></div>

      <div className="mx-auto flex max-w-6xl flex-col p-5 ">
        <h3 className="font-sans font-semibold sm:text-2xl lg:text-4xl  ">
          Próximos partidos ⚽️{' '}
        </h3>
        <div className="mt-9">
          <Fixture />
        </div>
      </div>

      <div className="mx-auto mt-4 flex max-w-6xl flex-col p-5">
        <h3 className="xs:text-xl font-sans font-semibold sm:text-3xl md:text-3xl lg:text-4xl  ">
          Últimas noticias en Napoleón ⚡️{' '}
        </h3>
      </div>

      <div className="mx-auto  grid max-w-6xl   justify-between gap-3 p-2  sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
        {posts.map((post) => {
          return (
            <Link key={post._id} href={`/post/${post.slug.current}`}>
              <div className=" rounded-lg border-4 border-black bg-blacksoft shadow-xl drop-shadow-2xl ">
                <div className=" h-52 overflow-hidden">
                  <img
                    className=" min-h-full rounded-t-md"
                    src={urlFor(post.mainImage).url()!}
                    alt=""
                  />
                </div>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                      {post.title}
                    </h5>
                  </a>
                  <p className=" text-sm font-medium text-white ">
                    {' '}
                    🐔 {post.author.name}{' '}
                  </p>
                  {/*<p className="mb-3 py-2 font-normal text-white">
                    {post.description}
                  </p>*/}
                  <a
                    href="#"
                    className="mt-4 inline-flex items-center rounded-lg border-2 border-black bg-red py-2 px-3 text-center text-sm font-medium text-white transition hover:bg-redstrong  "
                  >
                    Nota completa
                    <svg
                      className="ml-2 -mr-1 h-4 w-4"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      <div className="mx-auto mt-4 flex max-w-6xl flex-col p-5  ">
        <h3 className="font-sans text-3xl font-semibold ">
          El plantel para esta temporada ⚽️{' '}
        </h3>
        <p className="mt-2  text-xl  font-medium  lg:max-w-4xl">
          Después de un mercado de pases super movido para el millonario, así
          quedó conformado el plantel de jugadores con los que contará Marcelo
          Gallardo para esta temporada
        </p>
      </div>
      <Picture />

      <Footer />
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `
    *[_type == "post"]{
      _id,
      title, 
      author -> {
      name, 
      image
    },
    description,
    mainImage,
    slug
    }
    `
  const posts = await sanityClient.fetch(query)

  return {
    props: {
      posts,
    },
  }
}
