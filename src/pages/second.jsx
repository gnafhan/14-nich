import { useRef } from "react"

/* eslint-disable react/prop-types */
export default function Second({name, next}) {

    const nameRef = useRef()
    const handleSubmit = (e) => {
        e.preventDefault()
        name(nameRef.current.value)
        next((prev)=> prev+1)
    }
  return (
    <>
    <img src="https://i.pinimg.com/originals/97/30/f2/9730f26e048bbe59229979862924f042.gif" className='rounded-full h-48 w-48 object-cover border-8 border-[#FFF8E3]' alt="" />
    <h1 className='text-3xl text-center font-varela font-bold'> Siapa kamuuu </h1>
    <form onSubmit={handleSubmit} className='flex flex-col w-full justify-center items-center gap-4'>
    <input ref={nameRef} type="text" className='border-4 border-[#FFF8E3] bg-[#F3D7CA] active:border-0 outline-none  rounded-lg p-2 w-3/4 text-center font-varela' placeholder='Masukkan nama kamu'/>
    <button className='bg-[#F3D7CA] hover:bg-[#e2c9bd] active:bg-[#dec6bc] text-black font-varela font-bold py-2 px-4 rounded-md'>Submit</button>
    </form>
    </>
    
  )
}
