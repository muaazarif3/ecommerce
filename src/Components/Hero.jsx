import React from 'react'



function Hero() {
  return (
   <>
    <div className='flex px-10  w-full h-screen max-md:h-auto bg-white'>
        <div className='herocontent py-32 max-md:py-8 flex flex-col w-1/2 max-md:w-full'>
            <h2 className=' text-4xl  font-semibold leading-tight '>
                The new lineup you'll swear by for dullness, dyness breakouts
            </h2>
            <p className=' xl:w-[80%]   text-[16px] text-gray-800 mt-4'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident suscipit nobis ea, delectus necessitatibus magni deleniti repudiandae ipsa molestias autem nemo accusantium enim nesciunt quos.
            </p>
            <div className="bg-yellow text-txtColor w-[120px] flex justify-center items-center rounded-lg mt-4 py-3">See More</div>
        </div>
        <div className='w-1/2 h-auto max-md:hidden'>
            <img src="./Images/banner.png" className='w-full h-[80%] object-contain' alt="" />
        </div>
    </div>
   </>
  )
}

export default Hero