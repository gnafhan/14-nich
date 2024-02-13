/* eslint-disable react/prop-types */
export default function First({next}) {
    
  return (
    <>
          <img src="https://i.pinimg.com/originals/16/9d/4f/169d4fc870de9d54dcc47ecb88130670.gif" className='rounded-full h-48 w-48 object-cover border-8 border-[#FFF8E3]' alt="" />
          <h1 className='text-3xl text-center font-varela font-bold'> Hey Youuu </h1>
          <div className='flex flex-row  w-full justify-center gap-4'>
          <button onClick={()=> next((prev)=> prev+1)} className='bg-[#F3D7CA] hover:bg-[#e2c9bd] active:bg-[#dec6bc] text-black font-varela font-bold py-2 px-4 rounded-md'>Click Me</button>
          </div>
    </>
  )
}
