import { Image } from '@mantine/core'
import React from 'react'
import africandance from '../assets/dancingwoman.jpg'
import president from '../assets/drsamia.jpg'
import groupphoto from '../assets/group-photo-2.jpg'
import utiajiwasaini from '../assets/Utiajiwasaini.jpg'
import sittingwoman from '../assets/sittingwoman.jpg'


const Events = () => {
  return (
    <div className="group relative flex min-h-[300px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[300px]">

      <Image
        src={africandance}
        alt="edit"
        className='max-h-[300px]'

      />

      <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl   p-3 shadow-sm transition-all">
        <span className="p-semibold-14 w-min rounded-full bg-green-100 px-4 py-1 text-green-60">
          FREE
        </span>
      </div>


      <div
        className="flex min-h-[150px] flex-col gap-3 p-5 md:gap-4"
      >
        <div className="flex flex-row justify-between gap-2">
          <div>

            <p className="p-semibold-14 w-min rounded-full bg-slate-300 px-4 py-1 text-grey-500 line-clamp-1">
              Tourism
            </p>
          </div>
          <div>
            <p className="p-medium-16 p-medium-18 text-grey-500">
              24th June 2024,  13:00 AM
            </p>
          </div>
        </div>

        <a>
          <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black">Uzinduzi wa drumbeats records</p>
        </a>

        <div className="w-full">
          <p className="p-medium-14 md:p-medium-16 text-grey-600">
            Mbunji Mohamed
          </p>
        </div>
      </div>
    </div>
  )
}

export default Events
