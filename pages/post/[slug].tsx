import { GetStaticPaths, GetStaticProps } from 'next'
import { useForm, SubmitHandler } from 'react-hook-form'
import Header from '../../components/Header'
import { sanityClient, urlFor } from '../../sanity'
import { Post } from '../../typings'
import PortableText from 'react-portable-text'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { useState } from 'react'

interface Props {
  post: Post
}
interface Form {
  _id: string
  name: string
  email: string
  comment: string
}
function Post({ post }: Props) {
  const [enviado, setEnviado] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>()

  const onSubmit: SubmitHandler<Form> = (data) => {
    fetch('/api/createComment', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log(data)
        setEnviado(true)
      })
      .catch((err) => {
        console.log(err)
        setEnviado(false)
      })
  }

  return (
    <main>
      <Header />
      <div className="bg-blacksoft">
        <div className="mx-auto flex  max-w-6xl  justify-items-start p-2">
          <Link href="/">
            <button className="rounded-lg  p-2 text-white"> ← Regresar</button>
          </Link>
        </div>
      </div>
      <article className="mx-auto max-w-3xl p-5">
        <h1 className="mb-3 text-4xl font-bold">{post.title}</h1>

        <h2 className="mb-2 text-xl font-light text-black">
          {post.description}
        </h2>
        <div className="flex items-center space-x-2">
          <img
            className="mt-5  w-10 rounded-full object-contain "
            src={urlFor(post.author.image).url()!}
            alt=""
          />
          <p className="text-sm font-extralight">
            Por <span className="font-bold">{post.author.name}</span>- Publicado{' '}
            {new Date(post._createdAt).toLocaleString()}
          </p>
        </div>
        <div className="mt-10">
          <PortableText
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
            content={post.body}
            serializers={{
              h1: (props: any) => (
                <h1 className="my-3 text-2xl font-bold" {...props} />
              ),
              h2: (props: any) => (
                <h1 className="my-5 text-xl font-bold" {...props} />
              ),
              li: (props: any) => <h1 className="ml-4 list-disc" {...props} />,
              link: ({ href, children }: any) => (
                <a href={href} className="text-blue hover:underline">
                  {children}
                </a>
              ),
            }}
          />
        </div>
      </article>

      <div className="mx-auto max-w-full  bg-black ">
        {enviado ? (
         <div className='flex justify-center items-center h-40 border-4 border-t-red'>
            <h2 className='text-white text-3xl '>🐔 ¡ Comentario enviado ! 🐔</h2>
         </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto  flex max-w-2xl flex-col p-5 "
          >
            <h3 className="text-2xl text-white">Te gustó el artículo?</h3>
            <h4 className="text-4xl font-bold text-white">Algún comentario?</h4>
            <hr className="mt-2 py-3" />

            <input
              {...register('_id')}
              type="hidden"
              name="_id"
              value={post._id}
            />

            <label className="mb-5 block">
              <span className="text-white">Nombre</span>
              <input
                {...register('name', { required: true })}
                type="text"
                className=" form-input mt-1 block w-full rounded border-2  border-red py-2 px-3 shadow"
                placeholder="nombre"
              />
            </label>

            <label className="mb-5 block">
              <span className="text-white">Email</span>
              <input
                {...register('email', { required: true })}
                type="email"
                className="form-input mt-1 block w-full rounded border-2 border-red py-2 px-3 shadow "
                placeholder="Ingrese su correo"
              />
            </label>

            <label className="mb-5 block">
              <span className="text-white">Comentarios</span>
              <textarea
                {...register('comment', { required: true })}
                className="form-textarea mt-1 block w-full rounded border-2 border-red py-3 px-2 shadow outline-none ring-0 "
                placeholder="comentario.."
                rows={8}
              ></textarea>
            </label>
            <div className="flex flex-col p-5">
              {errors.name && (
                <span className="text-red">El nombre es obligatorio</span>
              )}
              {errors.email && (
                <span className="text-red">El correo es obligatorio</span>
              )}
              {errors.comment && (
                <span className="text-red">
                  El comentario no puede estar vacío
                </span>
              )}
            </div>

            <input
              type="submit"
              className="focus:shadow-outline rounded-md bg-red p-2 font-medium text-white shadow focus:outline-none"
            />
          </form>
        )}
      </div>

      <Footer />
    </main>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const query = `
    *[_type == "post"]{
      _id,
     slug {
         current
     }
    } 
    `
  const posts = await sanityClient.fetch(query)

  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `
    *[ _type == "post" && slug.current == $slug ] [0] {
      _id,
      _createdAt,
      title, 
      author -> {
      name, 
      image
    },
    'comments': *[
        _type == 'comment' &&
        post._ref == ^._id && 
        approved == true
    ],
        description,
        mainImage,
        slug,
        body
    }
    `
  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  })

  if (!post) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      post,
    },
    revalidate: 60,
  }
}

export default Post
