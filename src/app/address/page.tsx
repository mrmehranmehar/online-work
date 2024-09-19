import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div><figure className="md:flex bg-green-300 circle-xl p-8 md:p-0 dark:bg-yellow-800">
    <Image className="w-24 h-24 md:w-48 md:h-auto md:circle-none circle-full mx-auto" src="/19.jpg" alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
        House no.56,Saeed Tone,Rahim yar Khan,Zip code 64200,Punjab.
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Punjab
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          City.Ryk
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}
export default page