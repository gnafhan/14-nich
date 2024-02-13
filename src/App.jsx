import { useEffect, useState } from 'react'
import './App.css'
import First from './pages/first'
import Second from './pages/second'
import Third from './pages/third'
import Fourth from './pages/fourth'
import Fifth from './pages/fifth'
import Sixth from './pages/sixth'
import Seventh from './pages/seventh'
import Eight from './pages/eight'

function App() {
  const [page, setPage] = useState(0)
  const [name, setName] = useState('')
  useEffect(() => {
    console.log('page', page)
  }, [page])

  return (
    <>
      <div className='justify-center flex items-center h-screen'>
        <div className='max-w-screen-sm flex flex-col gap-5 h-[70vh] flex-1 items-center px-2 '>
          {page === 0 && <First next={setPage} />}
          {page === 1 && <Second name={setName} next={setPage} />}
          {page === 2 && <Third name={name} next={setPage}/>}
          {page === 3 && <Fourth next={setPage}/>}
          {page === 4 && <Fifth name={name} next={setPage}/>}
          {page === 5 && <Sixth next={setPage}/>}
          {page === 6 && <Seventh next={setPage}/>}
          {page === 7 && <Eight next={setPage} name={name}/>}
        </div>
      </div>
    </>
  )
}

export default App
