import { useRef, useState } from "react"

/* eslint-disable react/prop-types */
export default function Sixth({next}) {
    const [isClicked, setIsClicked] = useState(false)
    const buttonRef = useRef()
    const [clicked, setClicked] = useState(1)

    const ReduceOpacity = () => {
        setClicked((prev)=> prev-0.15)
        buttonRef.current.style.opacity = clicked-0.15
    }


    const randomPosition = () => {
        buttonRef.current.style.transition = 'all 1s'
        ReduceOpacity()
        const x = 25 + Math.floor(Math.random() * 50)
        const y = Math.floor(Math.random() * 70)
        // add transition
        buttonRef.current.style.position = 'absolute'
        buttonRef.current.style.left = `${x}%`
        buttonRef.current.style.top = `${y}%`
    }
    
    return (
      <>
            <img src="https://i.pinimg.com/originals/33/77/8e/33778e63b76713c22755ed7059daa8fc.gif" className='bg-white rounded-full h-48 w-48 object-cover border-8 border-[#FFF8E3]' alt="" />
            <h1 className='text-2xl text-center font-varela font-bold'> Because I`m the only <span className="text-3xl scale-125">1 4</span>  Youuuuu</h1>
            {!isClicked && <button onClick={()=> setIsClicked((prev)=>!prev)} className='bg-[#F3D7CA] hover:bg-[#e2c9bd] active:bg-[#dec6bc] text-black font-varela font-bold py-2 px-4 rounded-md'>Lagi Ga?</button>}
            {isClicked && <div className='flex flex-row  w-full justify-center gap-4'>
            <button ref={buttonRef} style={{transition: 'all 1s'}}  onClick={randomPosition} className='bg-[#F3D7CA] hover:bg-[#e2c9bd] active:bg-[#dec6bc] text-black font-varela font-bold py-2 px-4 rounded-md w-32 duration-1000 transition-all'>Ya</button>
            <button  onClick={()=> next((prev)=>prev+1)} className='bg-[#F3D7CA] hover:bg-[#e2c9bd] active:bg-[#dec6bc] text-black font-varela font-bold py-2 px-4 rounded-md'>Nggak</button>
            </div>}
      </>
    )
  }
  