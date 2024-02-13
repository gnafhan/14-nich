// eslint-disable-next-line react/prop-types
export default function Fifth({next, name}) {
  return (
    <>
    <img src="https://i.pinimg.com/originals/2f/82/6d/2f826d33bc7dc9c498b96d391b397eca.gif" className='rounded-full h-48 w-48 object-cover border-8 border-[#FFF8E3]' alt="" />
    <h1 className='text-2xl text-center font-varela font-bold'> {name},<br/> tau ngga kenapa sekarang tanggal 14? </h1>
    <div className='flex flex-row  w-full justify-center gap-4'>
        <button onClick={()=>next((prev)=>prev+1)} className='bg-[#F3D7CA] hover:bg-[#e2c9bd] active:bg-[#dec6bc] text-black font-varela font-bold py-2 px-4 rounded-md'>Kenapa tuch</button>
    </div>
    </>
  )
}
