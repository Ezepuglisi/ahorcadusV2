import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Game from './Game'

function App() {

  return (
    <main className='bg-slate-900 h-screen flex flex-col'>

      <nav className='py-4 px-10 bg-black text-white flex items-center justify-between'>
        <p>Ahorcadus</p>
        <div className='flex items-center justify-center gap-2'>
        <p>Created by: <a target="_blank" href='https://github.com/ezepuglisi'>Ezequiel Puglisi </a></p>
        <img src='./github.png' height={15} width={15} />
        </div>
      </nav>

      <div className='flex-grow flex items-center justify-center'>
        <Game />
      </div>
    </main>
  )
}

export default App
