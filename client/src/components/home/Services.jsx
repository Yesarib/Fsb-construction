import React from 'react'

const Services = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-20 font-roboto">
        <div className='w-4/6 flex justify-start'>
            <h1 className='flex justify-start mb-5 text-primary font-bold text-[36px]'>  Hizmetlerimiz </h1>
        </div>
        <div className="flex justify-start space-x-40 mt-5">
            <div className='w-48 h-24 border-2 rounded-2xl  flex justify-center items-center shadow-2xl'>
                <h1>1. Servis</h1>
            </div>
            <div className='w-48 h-24 border-2 rounded-2xl  flex justify-center items-center shadow-2xl'>
                <h1>2. Servis</h1>
            </div>
            <div className='w-48 h-24 border-2 rounded-2xl  flex justify-center items-center shadow-2xl'>
                <h1>3. Servis</h1>
            </div>
            <div className='w-48 h-24 border-2 rounded-2xl  flex justify-center items-center shadow-2xl'>
                <h1>4. Servis</h1>
            </div>
        </div>
    </div>
  )
}

export default Services