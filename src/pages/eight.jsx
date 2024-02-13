/* eslint-disable react/prop-types */
export default function Eight({ name}) {
    
    return (
      <div className="flex justify-between flex-col w-full h-full items-center">
        <div className="flex flex-col justify-center  gap-4 items-center">
            <img src="https://i.pinimg.com/originals/16/9d/4f/169d4fc870de9d54dcc47ecb88130670.gif" className='rounded-full h-48 w-48 object-cover border-8 border-[#FFF8E3]' alt="" />
            <h1 className='text-3xl text-center font-varela font-bold'> Yayyyy makasi ayang {name} 😘🥰</h1>
        </div>
            <div className='flex flex-row  w-full justify-center gap-4'>
            {/* <button onClick={()=> next((prev)=> prev+1)} className='bg-[#F3D7CA] hover:bg-[#e2c9bd] active:bg-[#dec6bc] text-black font-varela font-bold py-2 px-4 rounded-md'>Click Me</button> */}
            <p className=" text-lg opacity-25">Author: <a target="_blank" href="https://nafhan.site">Ghifari Nafhan | All rights reserved</a></p>
            </div>
      </div>
    )
  }
  