import { useRef, useState } from "react"

/* eslint-disable react/prop-types */
export default function Fourth({next}) {
    const [isClicked, setIsClicked] = useState(false)
    const buttonRef = useRef()
    const [clicked, setClicked] = useState(1)

    const ReduceOpacity = () => {
        buttonRef.current.style.opacity = clicked-0.2
        setClicked((prev)=> prev-0.2)
    }
    
    return (
      <>
            <img src="https://i.pinimg.com/originals/33/77/8e/33778e63b76713c22755ed7059daa8fc.gif" className='bg-white rounded-full h-48 w-48 object-cover border-8 border-[#FFF8E3]' alt="" />
            <h1 className='text-2xl text-center font-varela font-bold'> Karena senyumanmu melebihi madu</h1>
            {!isClicked && <button onClick={()=> setIsClicked((prev)=>!prev)} className='bg-[#F3D7CA] hover:bg-[#e2c9bd] active:bg-[#dec6bc] text-black font-varela font-bold py-2 px-4 rounded-md'>Lagi Ga?</button>}
            {isClicked && <div className='flex flex-row  w-full justify-center gap-4'>
            <button onClick={()=> next((prev)=> prev+1)} className='bg-[#F3D7CA] hover:bg-[#e2c9bd] active:bg-[#dec6bc] text-black font-varela font-bold py-2 px-4 rounded-md w-32'>Ya</button>
            <button ref={buttonRef} onClick={ReduceOpacity} className='bg-[#F3D7CA] hover:bg-[#e2c9bd] active:bg-[#dec6bc] text-black font-varela font-bold py-2 px-4 rounded-md'>Nggak</button>
            </div>}
      </>
    )
  }
  