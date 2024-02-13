// eslint-disable-next-line react/prop-types
export default function Third({name, next}) {
    const handleClick = () => {
        alert('Karena ini hari rabu')
        alert('canda2')
        next((prev)=> prev+1)
    }
  return (
    <>
    <img src="https://i.pinimg.com/originals/22/d9/7f/22d97fdac3c35c358a2d3e44e43e43bf.gif" className='rounded-full h-48 w-48 object-cover border-8 border-[#FFF8E3]' alt="" />
    <h1 className='text-2xl text-center font-varela font-bold'> Hai {name},<br/> tau ngga kenapa hari ini hari rabu </h1>
    <div className='flex flex-row  w-full justify-center gap-4'>
        <button onClick={handleClick} className='bg-[#F3D7CA] hover:bg-[#e2c9bd] active:bg-[#dec6bc] text-black font-varela font-bold py-2 px-4 rounded-md'>Kenapa tuch</button>
    </div>
    </>
  )
}
