import { useEffect, useRef, useState } from "react"

// eslint-disable-next-line react/prop-types
export default function Seventh({ next}) {
    const [clicked, setClicked] = useState(1)
    const [bigSize, setBigSize] = useState(1)
    const [counter, setCounter] = useState(0)

    const buttonRef = useRef()
    const biggerButtonRef = useRef()
    const handleClick = () => {
        next((prev)=> prev+1)
    }
    useEffect(() => {
        // add transition
        buttonRef.current.style.transition = 'all 1s'
        biggerButtonRef.current.style.transition = 'all 1s'
    }, [])

    const images =["https://i.pinimg.com/originals/75/35/89/753589ee385233757d931b8800cc7475.gif","https://i.pinimg.com/originals/f3/78/4d/f3784dc54de78b85eac662dc55ba64aa.gif", "https://i.pinimg.com/originals/47/84/08/478408e9bd7af7e8d7d7c14c8e206171.gif", "https://i.pinimg.com/originals/56/6e/aa/566eaad385fc74ba0bbfe56fd78c0f65.gif", "https://i.pinimg.com/originals/40/cc/30/40cc3065c2659744c81210dbb3882a61.gif", "https://i.pinimg.com/originals/c3/74/44/c374443bca49181fcabeff3182073759.gif", "https://i.pinimg.com/originals/2b/d0/0f/2bd00f0a653a7a1195f6a271f2946554.gif"]
    const text = ["So, Would you be my valentine?", "Are you sure","Think Again", "Dont do this to me","Youre breaking my heart", "Im Gonna Cry" ,"Please"]

    const reduceSize = () => {
        setCounter((prev)=> prev+1)
        // reduce size each time button is clicked
        setClicked((prev)=> prev-0.15)
        buttonRef.current.style.opacity = clicked-0.15
        buttonRef.current.style.transform = `scale(${clicked})`
        // random position
        const x = 25 + Math.floor(Math.random() * 50)
        const y = Math.floor(Math.random() * 70)
        buttonRef.current.style.position = 'absolute'
        buttonRef.current.style.left = `${x}%`
        buttonRef.current.style.top = `${y}%`

        // increaseSize of the bigger button
        setBigSize((prev)=> prev+0.3)
        biggerButtonRef.current.style.transform = `scale(${bigSize})`
    }
  return (
    <>
    <img src={images[counter]} className='rounded-full h-48 w-48 object-cover border-8 border-[#FFF8E3]' alt="" />
    <h1 className='text-2xl text-center font-varela font-bold'> {text[counter]}</h1>
    <div className='flex flex-row  w-full justify-center gap-4'>
        <button ref={biggerButtonRef} onClick={handleClick} className='bg-[#F3D7CA] hover:bg-[#e2c9bd] active:bg-[#dec6bc] text-black font-varela font-bold py-2 px-4 rounded-md'>Yes</button>
        <button ref={buttonRef} onClick={reduceSize} className='bg-[#F3D7CA] hover:bg-[#e2c9bd] active:bg-[#dec6bc] text-black font-varela font-bold py-2 px-4 rounded-md'>No</button>
    </div>
    </>
  )
}
