import React, { useEffect, useState } from 'react';
import sanityClient from '../client.js';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';


const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source)
}


export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient.fetch(`*[_type == 'author']{
      name,
      bio,
      'authorImage': image.asset->url
    }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>

  return (
    <main className='bg-pink-100 min-h-screen min-w-full p-12'>
      {/* <img 
        src={clouds} 
        alt='cloud background' 
        className='sm:absolute sm:w-full sm:h-full sm:object-cover sm:bg-auto' 
      /> */}
      <div className='p-10 lg:pt-48 container mx-auto relative'>
        <section className='bg-blue-800 rounded-lg shadow-2xl lg:flex p-20'>
          <img 
            src={urlFor(author.authorImage).url()} 
            className='rounded w-32 h-32 lg:w-64 lg:h-64 mr-8' 
            alt={author.name} 
          />
          <div className='text-lg flex flex-col justify-center'>
            <h1 className='cursive text-6xl text-pink-300 mb-4'>
            Meet{' '}
              <span className='text-green-100'>{author.name}</span>
            </h1>
            <div className='prose lg:prose-xl text-white'>
              <BlockContent 
                blocks={author.bio} 
                projectId='15s4ch70' 
                dataset='production' 
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}